import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
  type MetaFunction,
} from "@remix-run/node";
import {
  Form,
  Outlet,
  useLoaderData,
  useLocation,
  useParams,
  useRouteLoaderData,
} from "@remix-run/react";
import InspectNavLink from "~/components/link/InspectNavLink";
import CreateReadingsFromTemplate from "~/features/quizzes/CreateReadingsFromTemplate";
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
import { authAction, loginRequiredLoader } from "~/auth.server";
import { error401, formatErrors, error400 } from "~/utils/errors";
import { quizRepository } from "~/db/client";
import { expireQuizSchema } from "~/features/quizzes/validation";
import ExpandLink from "~/components/link/ExpandLink";
import DialogCode from "~/features/quizzes/DialogCode";
import Clock from "~/components/icons/Clock";
import Ok from "~/components/icons/Ok";
import CollapseLink from "~/components/link/CollapseLink";
import { isExpanded } from "~/utils/links";
import { z } from "zod";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const pathParamsSchema = z.object({
  templateId: z.string(),
});

export const loader = async (args: LoaderFunctionArgs) => {
  const user = await loginRequiredLoader(args);
  const params = pathParamsSchema.safeParse(args.params);
  if (!params.success) {
    const formattedErrors = formatErrors(params.error);
    throw error400("Invalid path params", formattedErrors);
  }
  const quizzes = await quizRepository.getQuizzesByUserIdAndTemplateId(
    user.username,
    params.data.templateId
  );
  return json({ quizzes });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const params = useParams<{ templateId: string; quizId: string }>();
  const location = useLocation();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Answers</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Share</TableHead>
          <TableHead>Expire</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.quizzes.map((quiz) => (
          <>
            <TableRow key={quiz.quizId}>
              <TableCell>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger tabIndex={-1}>
                      {isExpanded(
                        location.pathname,
                        `/template/${params.templateId}/quiz/${quiz.quizId}/answers`
                      ) ? (
                        <CollapseLink
                          to={`/template/${params.templateId}/quiz`}
                        />
                      ) : (
                        <ExpandLink
                          to={`/template/${params.templateId}/quiz/${quiz.quizId}/answers`}
                        />
                      )}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Inspect</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell>{quiz.title}</TableCell>
              <TableCell>{quiz.description}</TableCell>
              <TableCell>
                <DialogCode code={quiz.code} />
              </TableCell>
              <TableCell>
                {quiz.done ? (
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
                    <input type="hidden" name="quizId" value={quiz.quizId} />
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
            </TableRow>
            {params.quizId === quiz.quizId ? (
              <TableRow>
                <TableCell colSpan={6}>
                  <Outlet />
                </TableCell>
              </TableRow>
            ) : null}
          </>
        ))}
      </TableBody>
    </Table>
  );
}

export function ErrorBoundary() {
  return <GenericErrorBoundary />;
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

const actionExpired = async (args: ActionFunctionArgs, data: FormData) => {
  return authAction(args, async (user) => {
    if (!user.username) {
      return error401();
    }
    const input = expireQuizSchema.safeParse(data);
    if (!input.success) {
      const formattedErrors = formatErrors(input.error);
      return error400("Invalid form input", formattedErrors);
    }

    await quizRepository.expireQuiz(user.username, input.data.quizId);

    return redirect(".");
  });
};
