import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { z } from "zod";
import { error400, formatErrors } from "~/utils/errors";

import DetailsTemplate from "~/templates/DetailsTemplate";
import { loginRequiredLoader } from "~/auth.server";
import { templateClient } from "~/db/client";

export const meta: MetaFunction = () => {
  return [
    { title: "Quiz Template Details" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

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

  const template = await templateClient.getTemplatesByUserIdAndTemplateId(
    user.username,
    params.data.id
  );

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
