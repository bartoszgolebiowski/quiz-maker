import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { z } from "zod";
import { zfd } from "zod-form-data";
import {
  error400,
  error401,
  error404,
  error500,
  formatErrors,
} from "~/utils/errors";
import GenericCardServerrErrors from "~/templates/GenericCardServerrErrors";
import EditTemplate from "~/templates/EditTemplate";
import { State } from "~/templates/reducer";
import {
  quizContentSchema,
  templateEditDetailsSchema,
} from "~/templates/validation";
import { authAction, loginRequiredLoader } from "~/auth.server";
import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { env } from "~/env";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const pathParamsSchema = z.object({
  id: z.coerce.string(),
});

export const loader = async (args: LoaderFunctionArgs) => {
  const user = await loginRequiredLoader(args);
  const params = pathParamsSchema.safeParse(args.params);
  if (!params.success) {
    const formattedErrors = formatErrors(params.error);
    throw error400("Invalid path params", formattedErrors);
  }

  const s3Client = new S3Client({});
  const command = new GetObjectCommand({
    Bucket: env.BUCKET_NAME,
    Key: `${user.username}/templates/${params.data.id}.json`,
  });
  let template;
  try {
    const response = await s3Client.send(command);
    if (!response.Body) {
      throw error404("Body not found in response");
    }
    const raw = await response.Body.transformToString();
    template = templateEditDetailsSchema.parse(JSON.parse(raw));
  } catch (error) {
    console.error(error);
    throw error500("Failed to load template");
  }

  if (!template) {
    throw error404("Template not found");
  }

  return json({
    title: template.title,
    description: template.description,
    data: template.data.data,
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const fetcher = useFetcher<typeof action>();
  const isSubmitting = fetcher.state !== "idle";

  const initial = {
    title: data.title,
    description: data.description,
    data: data.data,
  };

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

  return (
    <>
      <EditTemplate
        initial={initial}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit}
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
    default:
      return error400("Invalid action", []);
  }
};

const editTemplateSchema = zfd.formData({
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

const actionEdit = async (args: ActionFunctionArgs, form: FormData) => {
  return authAction(args, async (user) => {
    if (!user.username) {
      return error401();
    }

    const input = editTemplateSchema.safeParse(form);
    if (!input.success) {
      const formattedErrors = formatErrors(input.error);
      return error400("Invalid form input", formattedErrors);
    }

    const s3Client = new S3Client({});
    const dynamodbClient = new DynamoDBClient({});
    const fileName = `${input.data.title}`;
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
