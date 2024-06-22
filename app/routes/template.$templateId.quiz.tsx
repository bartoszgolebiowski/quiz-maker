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
import { authAction, loginRequiredLoader } from "~/auth.server";
import { error401, formatErrors, error400, error500 } from "~/utils/errors";
import { quizRepository } from "~/db/client";
import { createQuizSchema, expireQuizSchema } from "~/quizzes/validation";
import ExpandLink from "~/components/link/ExpandLink";
import DialogCode from "~/quizzes/DialogCode";
import Clock from "~/components/icons/Clock";
import Ok from "~/components/icons/Ok";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async (args: LoaderFunctionArgs) => {
  const user = await loginRequiredLoader(args);
  const [quizzes] = await Promise.all([
    quizRepository.getQuizzesByUserId(user.username),
  ]);

  return json({ quizzes });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const params = useParams<{ templateId: string; quizId: string }>();

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
                      <ExpandLink
                        to={`/template/${params.templateId}/quiz/${quiz.quizId}/answers`}
                      />
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
            {params.quizId ? (
              <TableRow className="ml-12">
                <TableCell></TableCell>
                <TableCell colSpan={5}>{<Outlet />}</TableCell>
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

    try {
      await quizRepository.expireQuiz(user.username, input.data.quizId);
    } catch (error) {
      console.error(error);
      return error500("Failed to finish quiz");
    }

    return redirect(".");
  });
};
