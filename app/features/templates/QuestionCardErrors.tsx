import React from "react";
import { z } from "zod";

import {
  quizContentSingleElementValidationSchema,
  quizContentSingleElementSchema,
} from "./validation";
import { Alert, AlertTitle } from "~/components/ui/alert";

type Props = {
  question: z.infer<typeof quizContentSingleElementSchema>;
};

const QuestionCardErrors = (props: Props) => {
  const { question } = props;
  const result = quizContentSingleElementValidationSchema.safeParse(question);

  if (!result.success) {
    return (
      <div>
        {result.error.issues.map((issue) => {
          const path = issue.path.join("");
          return (
            <Alert
              key={issue.message}
              variant="destructive"
              className="mb-2"
              role="alert"
              aria-label={`Question ${question.no} field ${path}`}
            >
              <AlertTitle>{issue.message}</AlertTitle>
            </Alert>
          );
        })}
      </div>
    );
  }

  return <></>;
};

export default React.memo(
  QuestionCardErrors,
  (prev, next) => prev.question === next.question
);
