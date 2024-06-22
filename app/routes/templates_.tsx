import { type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
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
import { Button } from "~/components/ui/button";
import Plus from "~/components/icons/Plus";
import { templateClient } from "~/db/client";

export const meta: MetaFunction = () => {
  return [
    { title: "Quiz Templates" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader(args: LoaderFunctionArgs) {
  const user = await loginRequiredLoader(args);
  const templates = await templateClient.getTemplatesByUserId(user.username);
  return {
    templates,
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
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="my-4" asChild>
                    <Link to="/templates/create">
                      <Plus />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Create template</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
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
                          <EditNavLink to={`/templates/${template.templateId}/edit`} />
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
                            to={`/templates/${template.templateId}/details`}
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
