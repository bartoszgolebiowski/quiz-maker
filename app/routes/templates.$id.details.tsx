import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { z } from "zod";
import { error400, error404, error500, formatErrors } from "~/utils/errors";

import DetailsTemplate from "~/templates/DetailsTemplate";
import { templateEditDetailsSchema } from "~/templates/validation";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { loginRequiredLoader } from "~/auth.server";
import { env } from "~/env";

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
  return <DetailsTemplate initial={data} />;
}
