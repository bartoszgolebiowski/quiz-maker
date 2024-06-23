import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Label } from "~/components/ui/label";
import { calculateScore } from "~/features/quizzes/score";
import { z } from "zod";
import { error400, extractErrors, formatErrors } from "~/utils/errors";
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

  const answer = await answerRepository.getByAnswerId(params.data.answerId);

  const template = await templateRepository.getTemplateByIdAndVersion(
    answer.userId,
    answer.templateId,
    answer.version
  );

  const contentWithoutCorrect = template.data.data.map((question) => ({
    ...question,
    correct: undefined,
    isCorrect: Number(answer.answers[question.no]) === Number(question.correct),
  }));

  return json({
    answerWithScore: {
      id: answer.answerId,
      content: contentWithoutCorrect,
      answers: answer.answers,
      result: calculateScore(template.data, answer.answers),
    },
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
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
