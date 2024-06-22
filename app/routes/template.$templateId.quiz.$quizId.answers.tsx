import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { z } from "zod";
import GenericErrorBoundary from "~/components/GenericErrorBoundary";
import InspectNavLink from "~/components/link/InspectNavLink";
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
import { calculateScore } from "~/quizzes/score";
import { convertStatistics } from "~/quizzes/statistics";

import React from "react";
import { Slider } from "~/components/ui/slider";
import clsx from "clsx";
import {
  answerRepository,
  quizRepository,
  templateRepository,
} from "~/db/client";

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

  let answers, quiz;
  try {
    [answers, quiz] = await Promise.all([
      answerRepository.getByQuizId(params.data.quizId),
      quizRepository.getQuizById(params.data.quizId),
    ]);
  } catch (error) {
    console.error(error);
    throw error500("Failed to load answers or quiz instance");
  }

  if (!quiz) {
    throw error404("Instance not found");
  }

  let template;
  try {
    template = await templateRepository.getTemplateByIdAndVersion(
      quiz.userId,
      quiz.templateId,
      quiz.version
    );
  } catch (error) {
    console.error(error);
    throw error500("Failed to load quiz template");
  }

  if (!template) {
    throw error404("Template not found");
  }

  const content = template.data;
  const answersWithScore = answers.map((answer) => {
    return {
      id: answer.id,
      studentName: answer.studentName,
      result: calculateScore(content, answer.answers as any),
    };
  });

  const summary = convertStatistics(answersWithScore.map((a) => a.result));

  return json({
    answers: answersWithScore as any,
    title: quiz.title,
    summary,
    max: content.data.length,
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
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
                  <TableHead>Student</TableHead>
                  <TableHead>Correct</TableHead>
                  <TableHead>Incorrect</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead className="text-right">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.answers.map((answer) => (
                  <TableRow
                    key={answer.id}
                    className={clsx({
                      "bg-green-100": answer.result.correct >= value.at(0)!,
                      "bg-red-100": answer.result.correct < value.at(0)!,
                    })}
                  >
                    <TableCell>{answer.studentName}</TableCell>
                    <TableCell>{answer.result.correct}</TableCell>
                    <TableCell>{answer.result.incorrect}</TableCell>
                    <TableCell>
                      {(answer.result.correct / answer.result.total) * 100}%
                    </TableCell>
                    <TableCell align="right">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger tabIndex={-1}>
                            <InspectNavLink to={`answers/${answer.id}`} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Inspect</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <Outlet />
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
