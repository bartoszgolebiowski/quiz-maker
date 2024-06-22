import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
import InspectNavLink from "~/components/link/InspectNavLink";
import CreateReadingsFromTemplate from "~/quizzes/CreateReadingsFromTemplate";
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
import GenericErrorBoundary from "~/components/GenericErrorBoundary";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import {
  DynamoDBClient,
  PutItemCommand,
  QueryCommand,
} from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { authAction, loginRequiredLoader } from "~/auth.server";
import { env } from "~/env";
import { templateListSchema } from "~/templates/validation";
import CreateReadings from "~/quizzes/CreateReadings";
import { zfd } from "zod-form-data";
import { z } from "zod";
import { error401, formatErrors, error400, error500 } from "~/utils/errors";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async (args: LoaderFunctionArgs) => {
  const user = await loginRequiredLoader(args);
  const dynamodbClient = new DynamoDBClient({});
  const command = new QueryCommand({
    TableName: env.TEMPLATE_TABLE_NAME,
    KeyConditionExpression: "userId = :pk",
    ExpressionAttributeValues: {
      ":pk": { S: user.sub },
    },
  });
  const results = await dynamodbClient.send(command);
  if (!results.Items) {
    return { templates: [] };
  }
  return {
    templates: templateListSchema.parse(
      results.Items.map((item) => unmarshall(item))
    ),
  };
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const location = useLocation();

  return (
    <>
      <div>
        <Card className="mb-10 w-2.3 mx-auto">
          <CardHeader className="items-start">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Templatess
            </h2>
            <div>
              <CreateReadings templates={data.templates} />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Quiz</TableHead>
                  <TableHead align="right" className="text-right">
                    Details
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.templates.map((quiz) => (
                  <TableRow key={quiz.id}>
                    <TableCell>{quiz.title}</TableCell>
                    <TableCell>{quiz.description}</TableCell>
                    <TableCell>
                      <CreateReadingsFromTemplate
                        templateId={quiz.id}
                        key={location.key}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger tabIndex={-1}>
                            <InspectNavLink to={`/tests/${quiz.id}/quizzes`} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Inspect quizzes</p>
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
    </>
  );
}

export function ErrorBoundary() {
  return <GenericErrorBoundary />;
}

export const action = async (args: ActionFunctionArgs) => {
  const form = await args.request.formData();
  const action = form.get("action");
  switch (action) {
    case "create":
      return actionCreate(args, form);
    default:
      throw new Error("Invalid action");
  }
};

const createSchema = zfd.formData({
  templateId: zfd.text(z.string()),
  title: zfd.text(
    z
      .string()
      .min(1, { message: "Title is required" })
      .max(255, { message: "Title is too long, max 255 characters" })
  ),
  description: zfd
    .text(
      z
        .string()
        .min(1, { message: "Description is required" })
        .max(255, { message: "Description is too long, max 255 characters" })
    )
    .optional()
    .default(""),
});

const generate6DigitCode = () => {
  const code = Math.floor(100_000 + Math.random() * 899_999);
  return code.toString();
};

const actionCreate = async (args: ActionFunctionArgs, data: FormData) => {
  return authAction(args, async (user) => {
    if (!user.username) {
      return error401();
    }

    const input = createSchema.safeParse(data);
    if (!input.success) {
      const formattedErrors = formatErrors(input.error);
      return error400("Invalid form input", formattedErrors);
    }

    const s3Client = new S3Client({});
    const command = new GetObjectCommand({
      Bucket: env.BUCKET_NAME,
      Key: `${user.username}/templates/${input.data.templateId}.json`,
    });
    let version;
    try {
      const response = await s3Client.send(command);

      if (!response.VersionId) {
        throw error500("Version not found in response");
      }

      version = response.VersionId;
    } catch (error) {
      console.error(error);
      throw error500("Failed to load template");
    }

    try {
      const quizId = uuidv4();
      const dynamodbClient = new DynamoDBClient({});
      const putItemCommand = new PutItemCommand({
        TableName: env.QR_CODE_TABLE_NAME,
        Item: {
          quizId: { S: quizId },
          code: { S: generate6DigitCode() },
          ownerId: { S: user.username },
          templateId: { S: input.data.templateId },
          version: { S: version },
          dueDate: { S: new Date().toISOString() },
          title: { S: input.data.title },
          description: { S: input.data.description },
        },
      });
      await dynamodbClient.send(putItemCommand);
      return redirect(`/tests/${input.data.templateId}/quizzes`);
    } catch (error) {
      console.error(error);
      throw error500("Failed to save template");
    }
  });
};
