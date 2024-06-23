import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
  json,
  redirect,
} from "@remix-run/node";
import { useFetcher, useLoaderData, useLocation } from "@remix-run/react";
import { z } from "zod";
import { error400, error401, error500, formatErrors } from "~/utils/errors";
import GenericCardServerrErrors from "~/features/templates/GenericCardServerrErrors";
import EditTemplate from "~/features/templates/EditTemplate";
import { State } from "~/features/templates/reducer";
import { appendAnswersAiSchema, updateTemplateSchema } from "~/features/templates/validation";
import { authAction, loginRequiredLoader } from "~/auth.server";
import { templateRepository } from "~/db/client";
import { appendAnswerClient } from "~/features/ai/client";

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
  const location = useLocation();
  const fetcher = useFetcher<typeof action>();
  const isSubmitting = fetcher.state !== "idle";

  const initial = {
    title: data.title,
    suggestions: null,
    description: data.description,
    data: data.data,
  };

  const generated = (() => {
    if (!fetcher.data) return undefined;
    if (fetcher.data.type === "success") {
      return fetcher.data.result;
    }
    return undefined;
  })();

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

  const handleAppendQuestion = (question: State["data"][number], title:string) => {
    const formData = new FormData();
    formData.append("action", "append");
    formData.append("title", title);
    formData.append("no", `${question.no}`);
    formData.append("question", question.question);
    if (question.correct !== null) {
      formData.append("correct", `${question.correct}`);
    }
    Object.values(question.answers).forEach((item, index) => {
      formData.append(`answers[${index}]`, item);
    });
    formData.append(
      "quantity",
      `${Math.max(5 - Object.values(question.answers).length, 0)}`
    );
    fetcher.submit(formData, {
      method: "POST",
    });
  };

  return (
    <>
      <EditTemplate
        key={location.pathname}
        initial={initial}
        isSubmitting={isSubmitting}
        generated={generated}
        onSubmit={handleSubmit}
        onClickSuggestion={handleAppendQuestion}
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
    case "append":
      return actionAppend(args, form);
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

const actionAppend = async (args: ActionFunctionArgs, form: FormData) => {
  return authAction(args, async (user) => {
    if (!user.username) {
      return error401();
    }

    const input = appendAnswersAiSchema.safeParse(form);
    if (!input.success) {
      const formattedErrors = formatErrors(input.error);
      return error400("Invalid form input", formattedErrors);
    }

    try {
      const result = await appendAnswerClient.generate({
        ...input.data,
        userId: user.username,
      });
      return json({
        type: "success" as const,
        result: {
          data: {
            ...result.data,
            no: input.data.no,
          },
        },
      });
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        return error500(error.message);
      }
      return error500("Something went wrong");
    }
  });
};
