import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import {
  Form,
  useActionData,
  useNavigation,
  useLoaderData,
} from "@remix-run/react";
import { useEffect, useRef } from "react";
import InputControll from "~/components/input/InputControll";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { quizRepository } from "~/db/client";
import { joinQuizSchema } from "~/quizzes/validation";
import {
  error400,
  error409,
  extractErrors,
  formatErrors,
} from "~/utils/errors";

export const loader = async (args: LoaderFunctionArgs) => {
  const { searchParams } = new URL(args.request.url);
  const codeRaw = searchParams.get("code") ?? null;
  const code = codeRaw ? Number(codeRaw) : null;
  return json({ code });
};

export default function Index() {
  const submit = useActionData<typeof action>();
  const data = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const codeRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (extractErrors("code", submit?.formattedErrors)) {
      codeRef.current?.focus();
      return;
    }
    if (extractErrors("name", submit?.formattedErrors)) {
      nameRef.current?.focus();
      return;
    }
  }, [submit]);

  const isSubmitting = navigation.state !== "idle";

  const codeErrors = extractErrors("code", submit?.formattedErrors);
  const nameErrors = extractErrors("name", submit?.formattedErrors);

  return (
    <>
      <Card className="mb-10 w-96 mx-auto">
        <CardHeader>
          <h3 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Join quiz
          </h3>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <fieldset disabled={isSubmitting}>
              {data.code !== null ? (
                <input type="hidden" name="code" value={data.code} />
              ) : (
                <InputControll
                  ref={codeRef}
                  name="code"
                  id="code"
                  label="Code"
                  required
                  type="number"
                  min={100000}
                  max={999999}
                  errorText={codeErrors}
                />
              )}
              <InputControll
                ref={nameRef}
                name="name"
                id="name"
                label="Name"
                required
                type="text"
                maxLength={255}
                errorText={nameErrors}
                disabled={isSubmitting}
              />
              <div className="flex justify-end mt-4">
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </div>
            </fieldset>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}

export const action = async (args: ActionFunctionArgs) => {
  const input = joinQuizSchema.safeParse(await args.request.formData());
  if (!input.success) {
    const formattedErrors = formatErrors(input.error);
    return error400("Invalid path params", formattedErrors);
  }

  const quiz = await quizRepository.getQuizByCode(input.data.code);

  if (quiz.done) {
    return error409("Quiz has been closed");
  }

  return redirect(encodeURI(`/quiz/${quiz.quizId}/name/${input.data.name}`));
};
