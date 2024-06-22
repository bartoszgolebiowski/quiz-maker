import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
  json,
  redirect,
} from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { z } from "zod";
import { error400, error401, formatErrors } from "~/utils/errors";
import GenericCardServerrErrors from "~/templates/GenericCardServerrErrors";
import EditTemplate from "~/templates/EditTemplate";
import { State } from "~/templates/reducer";
import { updateTemplateSchema } from "~/templates/validation";
import { authAction, loginRequiredLoader } from "~/auth.server";
import { templateRepository } from "~/db/client";

export const meta: MetaFunction = () => {
  return [
    { title: "Edit Quiz Template" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const pathParamsSchema = z.object({
  templateId: z.coerce.string(),
});

export const loader = async (args: LoaderFunctionArgs) => {
  const user = await loginRequiredLoader(args);
  const params = pathParamsSchema.safeParse(args.params);
  if (!params.success) {
    const formattedErrors = formatErrors(params.error);
    throw error400("Invalid path params", formattedErrors);
  }

  const template = await templateRepository.getTemplatesByUserIdAndTemplateId(
    user.username,
    params.data.templateId
  );

  return json({
    title: template.title,
    description: template.description,
    data: template.data.data,
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const fetcher = useFetcher<typeof action>();
  const isSubmitting = fetcher.state !== "idle";

  const initial = {
    title: data.title,
    description: data.description,
    data: data.data,
  };

  const handleSubmit = (state: State) => {
    fetcher.submit(
      {
        action: "edit",
        data: JSON.stringify(state),
        title: state.title,
        description: state.description,
      },
      {
        method: "POST",
      }
    );
  };

  return (
    <>
      <EditTemplate
        initial={initial}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit}
      />
      {fetcher.data?.type === "error" && fetcher.state === "idle" ? (
        <GenericCardServerrErrors error={fetcher.data} />
      ) : null}
    </>
  );
}

export const action = async (args: ActionFunctionArgs) => {
  const form = await args.request.formData();
  switch (form.get("action")) {
    case "edit":
      return actionEdit(args, form);
    default:
      return error400("Invalid action", []);
  }
};

const actionEdit = async (args: ActionFunctionArgs, form: FormData) => {
  return authAction(args, async (user) => {
    if (!user.username) {
      return error401();
    }
    const params = pathParamsSchema.safeParse(args.params);
    if (!params.success) {
      const formattedErrors = formatErrors(params.error);
      throw error400("Invalid path params", formattedErrors);
    }

    const input = updateTemplateSchema.safeParse(form);
    if (!input.success) {
      const formattedErrors = formatErrors(input.error);
      throw error400("Invalid form input", formattedErrors);
    }

    await templateRepository.updateTemplate(
      input.data,
      user.username,
      params.data.templateId
    );

    return redirect(`/template`);
  });
};
