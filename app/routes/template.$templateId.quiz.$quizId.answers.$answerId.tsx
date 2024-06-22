import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Label } from "~/components/ui/label";
import { calculateScore } from "~/quizzes/score";
import { z } from "zod";
import {
  error400,
  error404,
  error500,
  extractErrors,
  formatErrors,
} from "~/utils/errors";
import GenericErrorBoundary from "~/components/GenericErrorBoundary";
import { Card, CardContent } from "~/components/ui/card";
import { answerRepository, templateRepository } from "~/db/client";

const pathParamsSchema = z.object({
  answerId: z.string(),
});

export const loader = async (args: LoaderFunctionArgs) => {
  const params = pathParamsSchema.safeParse(args.params);
  if (!params.success) {
    const formattedErrors = formatErrors(params.error);
    throw error400("Invalid path params", formattedErrors);
  }

  let answer;
  try {
    answer = (await answerRepository.getByAnswerId(
      params.data.answerId
    )) as any;
  } catch (error) {
    console.error(error);
    throw error500("Failed to load answer");
  }

  if (!answer) {
    throw error404("Answer not found");
  }

  let template;
  try {
    console.log(answer.userId, answer.templateId, answer.version);
    template = await templateRepository.getTemplateByIdAndVersion(
      answer.userId,
      answer.templateId,
      answer.version
    );
  } catch (error) {
    throw error500("Failed to load quiz template");
  }

  if (!template) {
    throw error404("Template not found");
  }

  const content = template.data;
  const answers = answer.answers;

  // if (!answers.success) {
  //   const formattedErrors = formatErrors(answers.error);
  //   throw error500("Invalid answer format", formattedErrors);
  // }

  console.log({ hehe: answers });
  const contentWithoutCorrect = content.data.map((question) => ({
    ...question,
    correct: undefined,
    isCorrect: Number(answers[question.no]) === Number(question.correct),
  }));

  const result = {
    answerWithScore: {
      id: answer.answerId,
      content: contentWithoutCorrect,
      answers: answers,
      result: calculateScore(content, answers),
    },
  };
  console.log({ result :result.answerWithScore});
  return json(result);
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="mt-4">
      <Card className="pt-10 w-2.3 mx-auto">
        <CardContent>
          {data.answerWithScore.content.map((question, index) => (
            <div key={index} className="mb-4">
              <p className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
                {index + 1}: {question.question}
              </p>
              <RadioGroup>
                {Object.entries(question.answers).map(([value, text]) => {
                  const isChecked =
                    data.answerWithScore.answers[question.no] === value;
                  return (
                    <div className="flex items-center space-x-2" key={value}>
                      <RadioGroupItem
                        value={value}
                        id={value}
                        checked={isChecked}
                        className={`size-6 mr-2 ${
                          isChecked
                            ? question.isCorrect
                              ? "bg-green-500"
                              : "bg-red-600"
                            : ""
                        }`}
                      />
                      <Label htmlFor={value} className="text-lg">
                        {text}
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <GenericErrorBoundary
      Error400={({ error }) => {
        const answerIdError = extractErrors(
          "answerId",
          error.data?.formattedErrors
        );

        return (
          <>
            {answerIdError ? (
              <div>
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  {answerIdError}
                </h2>
              </div>
            ) : null}
          </>
        );
      }}
    />
  );
}
