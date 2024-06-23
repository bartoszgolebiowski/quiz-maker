import { LoaderFunctionArgs, json } from "@remix-run/node";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useParams,
} from "@remix-run/react";
import { z } from "zod";
import GenericErrorBoundary from "~/components/GenericErrorBoundary";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import {
  error400,
  error404,
  error500,
  extractErrors,
  formatErrors,
} from "~/utils/errors";
import { calculateScore } from "~/features/quizzes/score";
import { convertStatistics } from "~/features/quizzes/statistics";

import React from "react";
import { Slider } from "~/components/ui/slider";
import clsx from "clsx";
import {
  answerRepository,
  quizRepository,
  templateRepository,
} from "~/db/client";
import ExpandLink from "~/components/link/ExpandLink";
import CollapseLink from "~/components/link/CollapseLink";
import { isExpanded } from "~/utils/links";

const pathParamsSchema = z.object({
  templateId: z.string(),
  quizId: z.string(),
});

export const loader = async (args: LoaderFunctionArgs) => {
  const params = pathParamsSchema.safeParse(args.params);
  if (!params.success) {
    const formattedErrors = formatErrors(params.error);
    throw error400("Invalid path params", formattedErrors);
  }

  const [answers, quiz] = await Promise.all([
    answerRepository.getByQuizId(params.data.quizId),
    quizRepository.getQuizById(params.data.quizId),
  ]);

  const template = await templateRepository.getTemplateByIdAndVersion(
    quiz.userId,
    quiz.templateId,
    quiz.version
  );

  const answersWithScore = answers.map((answer) => ({
    answerId: answer.answerId,
    studentName: answer.studentName,
    result: calculateScore(template.data, answer.answers),
  }));

  const summary = convertStatistics(answersWithScore.map((a) => a.result));

  return json({
    summary,
    answers: answersWithScore,
    title: quiz.title,
    max: template.data.data.length,
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const location = useLocation();
  const params = useParams<{
    templateId: string;
    quizId: string;
    answerId: string;
  }>();

  const [value, setValue] = React.useState([Math.round(data.max / 2)]);
  const handleChange = (value: number[]) => setValue(value);

  return (
    <>
      <div className="mb-8">
        <Card className="mb-10 w-2.3 mx-auto">
          <CardHeader>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Answers for: {data.title}
            </h2>
            <p className="text-gray-500">
              {data.answers.length} students answered this quiz
            </p>
            <p className="text-gray-500">
              Average score: {data.summary.average}%
            </p>
            <p className="text-gray-500">
              Median score: {data.summary.median}%
            </p>
            <p className="max-w-40 text-gray-500">
              Passing score: {value.at(0)}
              <Slider
                className="mt-2 mb-2"
                defaultValue={value}
                max={data.max}
                min={0}
                step={1}
                onValueChange={handleChange}
              />
            </p>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Details</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Correct</TableHead>
                  <TableHead>Incorrect</TableHead>
                  <TableHead>Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.answers.map((answer) => (
                  <>
                    <TableRow
                      key={answer.answerId}
                      className={clsx({
                        "bg-green-100": answer.result.correct >= value.at(0)!,
                        "bg-red-100": answer.result.correct < value.at(0)!,
                      })}
                    >
                      <TableCell align="left">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger tabIndex={-1}>
                              {isExpanded(
                                location.pathname,
                                `/template/${params.templateId}/quiz/${params.quizId}/answers/${answer.answerId}`
                              ) ? (
                                <CollapseLink
                                  to={`/template/${params.templateId}/quiz/${params.quizId}/answers`}
                                />
                              ) : (
                                <ExpandLink
                                  to={`/template/${params.templateId}/quiz/${params.quizId}/answers/${answer.answerId}`}
                                />
                              )}
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Inspect</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                      <TableCell>{answer.studentName}</TableCell>
                      <TableCell>{answer.result.correct}</TableCell>
                      <TableCell>{answer.result.incorrect}</TableCell>
                      <TableCell>
                        {(answer.result.correct / answer.result.total) * 100}%
                      </TableCell>
                    </TableRow>
                    {params.answerId === answer.answerId ? (
                      <TableRow>
                        <TableCell colSpan={5}>
                          <Outlet />
                        </TableCell>
                      </TableRow>
                    ) : null}
                  </>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export function ErrorBoundary() {
  return (
    <GenericErrorBoundary
      Error400={({ error }) => {
        const templateError = extractErrors(
          "templateId",
          error.data?.formattedErrors
        );
        const instanceError = extractErrors(
          "instanceId",
          error.data?.formattedErrors
        );
        return (
          <>
            {templateError ? (
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {templateError}
              </h2>
            ) : null}
            {instanceError ? (
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {instanceError}
              </h2>
            ) : null}
          </>
        );
      }}
    />
  );
}
