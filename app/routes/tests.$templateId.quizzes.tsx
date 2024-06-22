import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import { Form, Outlet, useLoaderData, useParams } from "@remix-run/react";
import InspectNavLink from "~/components/link/InspectNavLink";
import Clock from "~/components/icons/Clock";
import Ok from "~/components/icons/Ok";
import DialogCode from "~/quizzes/DialogCode";
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
import { z } from "zod";
import { zfd } from "zod-form-data";
import {
  error400,
  error401,
  error404,
  error500,
  extractErrors,
  formatErrors,
} from "~/utils/errors";
import GenericErrorBoundary from "~/components/GenericErrorBoundary";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { authAction, loginRequiredLoader } from "~/auth.server";
import { env } from "~/env";
import {
  DynamoDBClient,
  QueryCommand,
  UpdateItemCommand,
} from "@aws-sdk/client-dynamodb";
import { quizListSchema } from "~/quizzes/validation";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { templateEditDetailsSchema } from "~/templates/validation";

const pathParamsSchema = z.object({
  templateId: z.coerce.string().uuid(),
});

export const loader = async (args: LoaderFunctionArgs) => {
  const user = await loginRequiredLoader(args);
  const params = pathParamsSchema.safeParse(args.params);

  if (!params.success) {
    const formattedErrors = formatErrors(params.error);
    throw error400("Invalid path params", formattedErrors);
  }

  try {
    const dynamodbClient = new DynamoDBClient({});
    const commandQuizzes = new QueryCommand({
      TableName: env.QR_CODE_TABLE_NAME,
      KeyConditionExpression: "templateId = :pk",
      ExpressionAttributeValues: {
        ":pk": { S: params.data.templateId },
      },
    });
    const s3Client = new S3Client({});
    const command = new GetObjectCommand({
      Bucket: env.BUCKET_NAME,
      Key: `${user.username}/templates/${params.data.templateId}.json`,
    });

    const [dynamodbResult, s3Response] = await Promise.all([
      dynamodbClient.send(commandQuizzes),
      s3Client.send(command),
    ]);

    if (!s3Response.Body) {
      throw error404("Body not found in response");
    }

    const raw = await s3Response.Body.transformToString();
    const template = templateEditDetailsSchema.safeParse(JSON.parse(raw));

    if (!template.success) {
      const formattedErrors = formatErrors(template.error);
      throw error500("Invalid template", formattedErrors);
    }

    if (!dynamodbResult.Items) {
      throw error500("Failed to load Quizzes for template");
    }

    const quiezzes = quizListSchema
      .parse(dynamodbResult.Items.map((item) => unmarshall(item)))
      .map((quiz) => ({
        ...quiz,
        done: new Date(quiz.dueDate) < new Date(),
      }));

    return json({
      quiezzes,
      template: template.data,
    });
  } catch (error) {
    console.error(error);
    throw error500("Failed to load Quizzes for template");
  }
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const { templateId } = useParams();

  return (
    <>
      <div className="mb-8">
        <Card className="mb-10 w-2.3 mx-auto">
          <CardHeader className="items-start">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Quizzes for: {data.template.title}
            </h2>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Completed</TableHead>
                  <TableHead>Share</TableHead>
                  <TableHead className="text-right">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.quiezzes.map((quizInstance) => (
                  <TableRow key={quizInstance.quizId}>
                    <TableCell>{quizInstance.title}</TableCell>
                    <TableCell>{quizInstance.description}</TableCell>
                    <TableCell>
                      {quizInstance.dueDate ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Ok />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Completed</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        <Form method="post">
                          <input type="hidden" name="action" value="expired" />
                          <input
                            type="hidden"
                            name="quizId"
                            value={quizInstance.quizId}
                          />
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button type="submit">
                                  <Clock />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Finish quiz</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Form>
                      )}
                    </TableCell>
                    <TableCell>
                      <DialogCode code={quizInstance.code} />
                    </TableCell>
                    <TableCell align="right">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger tabIndex={-1}>
                            <InspectNavLink
                              to={`/tests/${templateId}/quizzes/${quizInstance.quizId}`}
                            />
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
        return (
          <>
            {templateError ? (
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {templateError}
              </h2>
            ) : null}
          </>
        );
      }}
    />
  );
}

export const action = async (args: ActionFunctionArgs) => {
  const form = await args.request.formData();
  const action = form.get("action");
  switch (action) {
    case "expired":
      return actionExpired(args, form);
    default:
      throw new Error("Invalid action");
  }
};

const expiredSchema = zfd.formData({
  templateId: zfd.text(z.string().uuid()),
  quizId: zfd.text(z.string().uuid()),
});

const actionExpired = async (args: ActionFunctionArgs, data: FormData) => {
  return authAction(args, async (user) => {
    if (!user.username) {
      return error401();
    }

    const input = expiredSchema.safeParse(data);
    if (!input.success) {
      const formattedErrors = formatErrors(input.error);
      return error400("Invalid form input", formattedErrors);
    }

    try {
      const dynamodbClient = new DynamoDBClient({});
      const command = new UpdateItemCommand({
        TableName: env.QR_CODE_TABLE_NAME,
        Key: {
          templateId: { S: input.data.templateId },
          quizId: { S: input.data.quizId },
        },
        AttributeUpdates: {
          dueDate: {
            Action: "PUT",
            Value: { S: new Date().toISOString() },
          },
        },
      });
      await dynamodbClient.send(command);
      return redirect(`/tests/${input.data.templateId}/quizzes`);
    } catch (error) {
      console.error(error);
      return error500("Failed to finish quiz");
    }
  });
};
