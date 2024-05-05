import React from "react";
import { State, useManualWizardReducer } from "./reducer";


import QuestionCard from "./QuestionCard";
import QuestionCardErrors from "./QuestionCardErrors";
import TemplateDetailsCard from "./TemplateDetailsCard";
import TemplateDetailsCardErrors from "./TemplateDetailsCardErrors";
import { isValid } from "./validation";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import Plus from "~/components/icons/Plus";
import { Button } from "~/components/ui/button";

type Props = {
  children?: React.ReactNode;
  initial?: State;
  isSubmitting: boolean;
  onSubmit: (date: State) => void;
};

const EditTemplate = (props: Props) => {
  const {
    children,
    initial,
    isSubmitting,
    onSubmit,
  } = props;
  const {
    state,
    appendQuestion,
    deleteQuestion,
    updateQuizMetaData,
    updateQuestionText,
    appendAnswer,
    deleteAnswer,
    updateAnswer,
    updateCorrectAnswer,
  } = useManualWizardReducer(initial);

  const disabled = !isValid(state) || isSubmitting;

  return (
    <div className="pt-4">
      <Card>
        <CardHeader>
          <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {children ? children : `Edit: ${state.title}`}
          </h1>
        </CardHeader>
        <CardContent>
          <TemplateDetailsCard
            title={state.title}
            description={state.description}
            onChange={updateQuizMetaData}
            disabled={isSubmitting}
          >
            <TemplateDetailsCardErrors title={state.title} />
          </TemplateDetailsCard>
          <div className="mt-4">
            {state.data.map((question) => (
              <QuestionCard
                disabled={isSubmitting}
                key={question.no}
                question={question}
                deleteQuestion={deleteQuestion}
                updateQuestionText={updateQuestionText}
                appendAnswer={appendAnswer}
                deleteAnswer={deleteAnswer}
                updateAnswer={updateAnswer}
                updateCorrectAnswer={updateCorrectAnswer}
              >
                <QuestionCardErrors question={question} />
              </QuestionCard>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button onClick={appendQuestion} aria-label="Add question">
                <Plus />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>New question</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="fixed right-4 bottom-4">
        <Button
          disabled={disabled}
          onClick={() => onSubmit(state)}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default EditTemplate;
