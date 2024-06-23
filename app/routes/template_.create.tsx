import { useFetcher, useLocation } from "@remix-run/react";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
  type MetaFunction,
} from "@remix-run/node";
import { State } from "~/features/templates/reducer";
import GenericCardServerrErrors from "~/features/templates/GenericCardServerrErrors";
import EditTemplate from "~/features/templates/EditTemplate";
import { error400, error401, error500, formatErrors } from "~/utils/errors";
import { authAction, loginRequiredLoader } from "~/auth.server";
import { templateRepository } from "~/db/client";
import {
  appendAnswersAiSchema,
  createTemplateSchema,
} from "~/features/templates/validation";
import { appendAnswerClient } from "~/features/ai/client";

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
  const location = useLocation();

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

  const handleAppendQuestion = (
    question: State["data"][number],
    title: string
  ) => {
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
        isSubmitting={isSubmitting}
        generated={generated}
        onSubmit={handleSubmit}
        onClickSuggestion={handleAppendQuestion}
      >
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
    case "append":
      return actionAppend(args, form);
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

    await templateRepository.createTemplate(input.data, user.username);

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
