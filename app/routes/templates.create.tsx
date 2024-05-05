import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { PutItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { useFetcher } from "@remix-run/react";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
  type MetaFunction,
} from "@remix-run/node";
import { zfd } from "zod-form-data";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { State } from "~/templates/reducer";
import GenericCardServerrErrors from "~/templates/GenericCardServerrErrors";
import EditTemplate from "~/templates/EditTemplate";
import { quizContentSchema } from "~/templates/validation";
import { error400, error401, formatErrors, error500 } from "~/utils/errors";
import { authAction, loginRequiredLoader } from "~/auth.server";
import { env } from "~/env";

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

const createTemplateSchema = zfd.formData({
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
  data: zfd.json(quizContentSchema),
});

const actionCreate = async (args: ActionFunctionArgs, form: FormData) => {
  return authAction(args, async (user) => {
    if (!user.username) {
      return error401();
    }

    const input = createTemplateSchema.safeParse(form);
    if (!input.success) {
      const formattedErrors = formatErrors(input.error);
      return error400("Invalid form input", formattedErrors);
    }

    const s3Client = new S3Client({});
    const dynamodbClient = new DynamoDBClient({});
    const fileName = uuidv4();

    const command = new PutObjectCommand({
      Bucket: env.BUCKET_NAME,
      Key: `${user.username}/templates/${fileName}.json`,
      Body: JSON.stringify({
        title: input.data.title,
        description: input.data.description,
        data: input.data.data,
      }),
    });

    try {
      const s3Resposne = await s3Client.send(command);
      const versionId = s3Resposne.VersionId;
      if (!versionId) {
        throw new Error("S3 Versioning not enabled");
      }
      const putItemCommand = new PutItemCommand({
        TableName: env.TABLE_NAME,
        Item: {
          userId: { S: user.username },
          id: { S: fileName },
          title: { S: input.data.title },
          version: { S: versionId },
          description: { S: input.data.description },
        },
      });
      await dynamodbClient.send(putItemCommand);

      return redirect(`/templates/${fileName}/details`);
    } catch (error) {
      console.error(error);
      return error500("Something went wrong");
    }
  });
};
