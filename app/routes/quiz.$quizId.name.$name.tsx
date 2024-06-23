import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { z } from "zod";
import GenericCardServerErrors from "~/components/GenericCardServerErrors";
import GenericErrorBoundary from "~/components/GenericErrorBoundary";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  error400,
  error404,
  error409,
  error500,
  extractErrors,
  formatErrors,
} from "~/utils/errors";
import { sortQuestions } from "~/quizzes/ordering";
import {
  answerRepository,
  quizRepository,
  templateRepository,
} from "~/db/client";
import { answerSingleElementSchema } from "~/answer/validation";

const pathParamsSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(255, {
      message: "Name must be less than 255 characters",
    })
    .transform(decodeURI),
  quizId: z.string(),
});

export const loader = async (args: LoaderFunctionArgs) => {
  const params = pathParamsSchema.safeParse(args.params);
  if (!params.success) {
    const formattedErrors = formatErrors(params.error);
    throw error400("Invalid path params", formattedErrors);
  }

  const quiz = await quizRepository.getQuizById(params.data.quizId);
  const template = await templateRepository.getTemplateByIdAndVersion(
    quiz.userId,
    quiz.templateId,
    quiz.version
  );

  if (quiz.done) {
    return redirect(`/quiz/${params.data.quizId}/expired`);
  }

  return json({
    studentName: params.data.name,
    quiz: {
      ...quiz,
      content: sortQuestions(template.data),
    },
  });
};

export default function Index() {
  const submit = useActionData<typeof action>();
  const data = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const formId = "quiz-form";

  return (
    <>
      <Card>
        <fieldset disabled={isSubmitting}>
          <CardHeader>
            <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {data.quiz.title} - {data.studentName}
            </h1>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {data.quiz.description}
            </h3>
          </CardHeader>
          <CardContent>
            <Form method="post" className="mt-4" id={formId}>
              {data.quiz.content.data.map((question, index) => (
                <div key={index}>
                  <p className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
                    {index + 1}: {question.question}
                  </p>
                  <RadioGroup name={String(question.no)} className="my-4">
                    {Object.entries(question.answers).map(([value, text]) => (
                      <div className="flex items-center space-x-2" key={text}>
                        <RadioGroupItem
                          value={value}
                          id={`answer${index}-${value}`}
                          className="size-6 [&>svg]:size-4"
                        />
                        <Label
                          htmlFor={`answer${index}-${value}`}
                          className="text-lg cursor-pointer"
                        >
                          {text}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}
            </Form>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button type="reset" form={formId} variant="secondary">
              Clear
            </Button>
            <Button type="submit" form={formId}>
              Submit
            </Button>
          </CardFooter>
        </fieldset>
      </Card>
      {submit ? <GenericCardServerErrors error={submit} /> : null}
    </>
  );
}

export const action = async (args: ActionFunctionArgs) => {
  const params = pathParamsSchema.safeParse(args.params);
  if (!params.success) {
    const formattedErrors = formatErrors(params.error);
    return error400("Invalid path params", formattedErrors);
  }

  const form = await args.request.formData();
  const answers = Object.fromEntries(form.entries());
  const input = answerSingleElementSchema
    .pick({ answers: true })
    .safeParse({ answers });

  if (!input.success) {
    const formattedErrors = formatErrors(input.error);
    return error400("Invalid form input", formattedErrors);
  }

  const quiz = await quizRepository.getQuizById(params.data.quizId);

  if (quiz.done) {
    return error409("Quiz has been closed");
  }

  const answersId = await answerRepository.createAnswer(
    input.data.answers,
    quiz.quizId,
    quiz.templateId,
    quiz.version,
    quiz.userId,
    params.data.name
  );

  return redirect(`/quiz/${params.data.quizId}/answers/${answersId}`);
};

export function ErrorBoundary() {
  return (
    <GenericErrorBoundary
      Error400={({ error }) => {
        const instanceError = extractErrors(
          "quizId",
          error.data?.formattedErrors
        );
        const nameError = extractErrors("name", error.data?.formattedErrors);

        return (
          <>
            {instanceError ? (
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {instanceError}
              </h2>
            ) : null}
            {nameError ? (
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {nameError}
              </h2>
            ) : null}
          </>
        );
      }}
    />
  );
}
