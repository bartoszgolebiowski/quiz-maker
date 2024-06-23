import { State } from "./reducer";
import QuestionCard from "./QuestionCard";
import QuestionCardErrors from "./QuestionCardErrors";
import TemplateDetailsCard from "./TemplateDetailsCard";
import TemplateDetailsCardErrors from "./TemplateDetailsCardErrors";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

type Props = {
  initial: State;
};

const DetailsTemplate = (props: Props) => {
  const { initial } = props;

  return (
    <div className="pt-4">
      <CardHeader>
        <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Details: {initial.title}
        </h1>
      </CardHeader>
      <CardContent>
        <TemplateDetailsCard
          title={initial.title}
          description={initial.description}
          disabled
        >
          <TemplateDetailsCardErrors title={initial.title} />
        </TemplateDetailsCard>
        <div className="mt-4">
          {initial.data.map((question) => (
            <QuestionCard disabled key={question.no} question={question}>
              <QuestionCardErrors question={question} />
            </QuestionCard>
          ))}
        </div>
      </CardContent>
    </div>
  );
};

export default DetailsTemplate;
