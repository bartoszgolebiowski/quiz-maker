import {
  ActionFunctionArgs,
  redirect,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import {
  Link,
  Outlet,
  useLoaderData,
  useLocation,
  useParams,
} from "@remix-run/react";
import GenericErrorBoundary from "~/components/GenericErrorBoundary";
import { authAction, loginRequiredLoader } from "~/auth.server";
import { quizRepository, templateRepository } from "~/db/client";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import Plus from "~/components/icons/Plus";
import EditNavLink from "~/components/link/EditNavLink";
import InspectNavLink from "~/components/link/InspectNavLink";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "~/components/ui/table";
import React from "react";
import ExpandLink from "~/components/link/ExpandLink";
import CreateReadingsFromTemplate from "~/features/quizzes/CreateReadingsFromTemplate";
import { createQuizSchema } from "~/features/quizzes/validation";
import { error401, formatErrors, error400 } from "~/utils/errors";
import CollapseLink from "~/components/link/CollapseLink";
import { isExpanded } from "~/utils/links";

export const meta: MetaFunction = () => {
  return [
    { title: "Quiz Templates" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader(args: LoaderFunctionArgs) {
  const user = await loginRequiredLoader(args);
  const templates = await templateRepository.getTemplatesByUserId(
    user.username
  );
  return {
    templates,
  };
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const params = useParams<{ templateId: string }>();
  const location = useLocation();

  return (
    <>
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
                      <Link to="/template/create">
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
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Quizzies</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Quiz</TableHead>
                    <TableHead className="text-right">Edit</TableHead>
                    <TableHead className="text-right">Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.templates.map((template) => (
                    <React.Fragment key={template.version}>
                      <TableRow>
                        <TableCell>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger tabIndex={-1}>
                                {isExpanded(
                                  location.pathname,
                                  `/template/${template.templateId}/quiz`
                                ) ? (
                                  <CollapseLink to={`/template`} />
                                ) : (
                                  <ExpandLink
                                    to={`/template/${template.templateId}/quiz`}
                                  />
                                )}
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Inspect</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableCell>
                        <TableCell>{template.title}</TableCell>
                        <TableCell>{template.description}</TableCell>
                        <TableCell align="right">
                          <CreateReadingsFromTemplate
                            templateId={template.templateId}
                            key={location.key}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger tabIndex={-1}>
                                <EditNavLink
                                  to={`/template/${template.templateId}/edit`}
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
                                  to={`/template/${template.templateId}/details`}
                                />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Inspect</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableCell>
                      </TableRow>
                      {params.templateId === template.templateId ? (
                        <TableRow>
                          <TableCell colSpan={6}>
                            <Card>
                              <Outlet />
                            </Card>
                          </TableCell>
                        </TableRow>
                      ) : null}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </Card>
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

const actionCreate = async (args: ActionFunctionArgs, data: FormData) => {
  return authAction(args, async (user) => {
    if (!user.username) {
      return error401();
    }

    const input = createQuizSchema.safeParse(data);
    if (!input.success) {
      const formattedErrors = formatErrors(input.error);
      return error400("Invalid form input", formattedErrors);
    }

    const quiz = await quizRepository.createQuiz(input.data, user.username);
    return redirect(`/template/${quiz.templateId}/quiz`);
  });
};
