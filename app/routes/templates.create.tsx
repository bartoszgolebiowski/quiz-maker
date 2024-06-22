import { useFetcher } from "@remix-run/react";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
  type MetaFunction,
} from "@remix-run/node";
import { State } from "~/templates/reducer";
import GenericCardServerrErrors from "~/templates/GenericCardServerrErrors";
import EditTemplate from "~/templates/EditTemplate";
import { error400, error401, formatErrors } from "~/utils/errors";
import { authAction, loginRequiredLoader } from "~/auth.server";
import { templateClient } from "~/db/client";
import { createTemplateSchema } from "~/templates/validation";

export const meta: MetaFunction = () => {
  return [
    { title: "Create Quiz Template" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader(args: LoaderFunctionArgs) {
  const user = await loginRequiredLoader(args);
  if (user) {
    return {};
  }
  return {};
}

export default function Index() {
  const fetcher = useFetcher<typeof action>();
  const isSubmitting = fetcher.state !== "idle";

  const handleSubmit = (state: State) => {
    fetcher.submit(
      {
        action: "create",
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
      <EditTemplate isSubmitting={isSubmitting} onSubmit={handleSubmit}>
        Manual creator
      </EditTemplate>
      {fetcher.data?.type === "error" ? (
        <GenericCardServerrErrors error={fetcher.data} />
      ) : null}
    </>
  );
}

export const action = async (args: ActionFunctionArgs) => {
  const form = await args.request.formData();
  switch (form.get("action")) {
    case "create":
      return actionCreate(args, form);
    default:
      return error400("Invalid action", []);
  }
};

const actionCreate = async (args: ActionFunctionArgs, form: FormData) => {
  return authAction(args, async (user) => {
    if (!user.username) {
      return error401();
    }

    const input = createTemplateSchema.safeParse(form);
    if (!input.success) {
      const formattedErrors = formatErrors(input.error);
      throw error400("Invalid form input", formattedErrors);
    }

    const templateId = await templateClient.createTemplate(
      input.data,
      user.username
    );

    return redirect(`/templates`);
  });
};
