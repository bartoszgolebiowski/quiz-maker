import React from "react";
import Cross from "~/components/icons/Cross";
import Plus from "~/components/icons/Plus";
import CheckboxControll from "~/components/input/CheckboxControll";
import InputControll from "~/components/input/InputControll";
import { Label } from "~/components/ui/label";
import TextAreaControll from "~/components/input/TextAreaControll";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { State } from "./reducer";

type Props = {
  disabled?: boolean;
  readOnly?: boolean;
  children?: React.ReactNode;
  question: State["data"][number];
  deleteQuestion?: (no: number) => void;
  updateQuestionText?: (no: number, text: string) => void;
  appendAnswer?: (no: number) => void;
  deleteAnswer?: (no: number, answerNo: number) => void;
  updateAnswer?: (no: number, answerNo: number, text: string) => void;
  updateCorrectAnswer?: (no: number, answerNo: number) => void;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const QuestionCard = (props: Props) => {
  const {
    disabled = false,
    readOnly = false,
    children,
    question,
    deleteQuestion = noop,
    updateQuestionText = noop,
    appendAnswer = noop,
    deleteAnswer = noop,
    updateAnswer = noop,
    updateCorrectAnswer = noop,
  } = props;

  return (
    <Card className="mb-10">
      <fieldset disabled={disabled}>
        <CardHeader>
          <h3 className="text-xl font-semibold tracking-tight">
            Question {question.no + 1}
          </h3>
        </CardHeader>
        <CardContent>
          <TextAreaControll
            label="Question *"
            id={`question-${question.no}`}
            value={question.question}
            onChange={(e) => updateQuestionText(question.no, e.target.value)}
            className="h-24"
            disabled={readOnly}
          />
          <div className="pb-6">
            <Label className="flex justify-start my-4">Answers *</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="mr-4"
                    onClick={() => appendAnswer(question.no)}
                    disabled={readOnly}
                    aria-label={`Add answer to question ${question.no}`}
                  >
                    <Plus />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>New answer</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {Object.entries(question.answers).map(([answerNo, answer], index) => (
            <div key={answerNo} className="flex items-center mb-2">
              <CheckboxControll
                checked={index === question.correct}
                id={`answer-checkbox-${question.no}-${answerNo}`}
                disabled={readOnly}
                onClick={() => updateCorrectAnswer(question.no, index)}
                className="size-6"
                innerProps={{
                  wrapperProps: {
                    className: "mr-2 !w-auto",
                  },
                }}
                aria-label={`Check ${answerNo} from question ${question.no}`}
              />
              <InputControll
                type="text"
                id={`answer-text-${question.no}-${answerNo}`}
                value={answer}
                onChange={(e) =>
                  updateAnswer(question.no, index, e.target.value)
                }
                innerProps={{
                  labelProps: {
                    className: "sr-only",
                  },
                  wrapperProps: {
                    className: "flex-grow mr-2",
                  },
                }}
                disabled={readOnly}
                maxLength={511}
                label={`Answer ${answerNo}`}
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="destructive"
                      onClick={() => deleteAnswer(question.no, index)}
                      disabled={readOnly}
                      aria-label={`Delete ${answerNo} from question ${question.no}`}
                    >
                      <Cross />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete answer</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
          {children}
        </CardContent>
        <CardFooter className="card-actions justify-start">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="destructive"
                  onClick={() => deleteQuestion(question.no)}
                  disabled={readOnly}
                  aria-label={`Delete question ${question.no}`}
                >
                  <Cross />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete question</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </fieldset>
    </Card>
  );
};

export default React.memo(
  QuestionCard,
  (prev, next) =>
    prev.question === next.question &&
    prev.disabled === next.disabled
);
