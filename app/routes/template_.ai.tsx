import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { z } from "zod";
import { zfd } from "zod-form-data";
import { authAction } from "~/auth.server";
import InputControll from "~/components/input/InputControll";
import TextAreaControll from "~/components/input/TextAreaControll";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { templateGenerateClient } from "~/features/ai/client";
import GenericCardServerrErrors from "~/features/templates/GenericCardServerrErrors";
import {
  error400,
  error401,
  extractErrors,
  formatErrors,
} from "~/utils/errors";

export default function Index() {
  const submit = useActionData<typeof action>();
  const navigation = useNavigation();
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const questions = useRef<HTMLInputElement>(null);
  const text = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (extractErrors("title", submit?.formattedErrors)) {
      title.current?.focus();
      return;
    }
    if (extractErrors("description", submit?.formattedErrors)) {
      description.current?.focus();
      return;
    }
    if (extractErrors("questions", submit?.formattedErrors)) {
      questions.current?.focus();
      return;
    }
    if (extractErrors("text", submit?.formattedErrors)) {
      text.current?.focus();
      return;
    }
  }, [submit]);

  const isSubmitting = navigation.state !== "idle";

  const titleErrors = extractErrors("title", submit?.formattedErrors);
  const descriptionErrors = extractErrors(
    "description",
    submit?.formattedErrors
  );
  const questionsErrors = extractErrors("questions", submit?.formattedErrors);
  const textErrors = extractErrors("text", submit?.formattedErrors);

  return (
    <>
      <Card className="mb-10 w-2.3 mx-auto">
        <CardHeader>
          <h3 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Generate quiz with AI
          </h3>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <fieldset disabled={isSubmitting}>
              <InputControll
                name="title"
                id="title"
                label="Title *"
                disabled={isSubmitting}
                required
                maxLength={255}
                errorText={titleErrors}
              />
              <TextAreaControll
                name="description"
                id="description"
                label="Description"
                required
                rows={6}
                disabled={isSubmitting}
                maxLength={255}
                errorText={descriptionErrors}
              />
              <InputControll
                name="questions"
                id="questions"
                label="Number of questions *"
                required
                type="number"
                min={1}
                max={20}
                disabled={isSubmitting}
                errorText={questionsErrors}
              />
              <TextAreaControll
                name="text"
                id="text"
                label="Text *"
                required
                rows={10}
                disabled={isSubmitting}
                maxLength={10000}
                errorText={textErrors}
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
      {submit ? <GenericCardServerrErrors error={submit} /> : null}
    </>
  );
}

const createAiSchema = zfd.formData({
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
  text: zfd.text(
    z
      .string()
      .min(1, {
        message: "Text is required",
      })
      .max(10000, { message: "Text is too long, max 10000 characters" })
  ),
  questions: zfd.numeric(
    z.number().min(1, { message: "Minimum 1 question" }).max(20, {
      message: "Maximum 20 questions",
    })
  ),
});

export const action = async (args: ActionFunctionArgs) => {
  return authAction(args, async (user) => {
    if (!user.username) {
      return error401();
    }

    const input = createAiSchema.safeParse(await args.request.formData());
    if (!input.success) {
      const formattedErrors = formatErrors(input.error);
      return error400("Invalid form input", formattedErrors);
    }

    const templateId = await templateGenerateClient.generate({
      questions: input.data.questions,
      text: input.data.text,
      title: input.data.title,
      description: input.data.description,
      userId: user.username,
    });
    return redirect(`/templates/list/${templateId}/edit`);
  });
};
