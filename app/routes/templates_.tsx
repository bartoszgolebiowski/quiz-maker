import { type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import InspectNavLink from "~/components/link/InspectNavLink";
import EditNavLink from "~/components/link/EditNavLink";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import GenericErrorBoundary from "~/components/GenericErrorBoundary";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { loginRequiredLoader } from "~/auth.server";
import { QueryCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { env } from "~/env";
import { templateListSchema } from "~/templates/validation";

export const meta: MetaFunction = () => {
  return [
    { title: "Quiz Templates" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader(args: LoaderFunctionArgs) {
  const user = await loginRequiredLoader(args);
  const dynamodbClient = new DynamoDBClient({});
  const command = new QueryCommand({
    TableName: env.TABLE_NAME,
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
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <Card className="mb-10 w-2.3 mx-auto">
        <CardHeader>
          <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            My templates
          </h1>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Edit</TableHead>
                <TableHead className="text-right">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.templates.map((template) => (
                <TableRow key={template.version}>
                  <TableCell>{template.title}</TableCell>
                  <TableCell>{template.description}</TableCell>
                  <TableCell align="right">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger tabIndex={-1}>
                          <EditNavLink
                            to={`/templates/${template.id}/edit`}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Edit</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                  <TableCell align="right">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger tabIndex={-1}>
                          <InspectNavLink
                            to={`/templates/${template.id}/details`}
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
  );
}

export function ErrorBoundary() {
  return <GenericErrorBoundary />;
}
