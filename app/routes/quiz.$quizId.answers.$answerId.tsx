import { useLoaderData } from "@remix-run/react";
import Answers from "./template.$templateId.quiz.$quizId.answers.$answerId";
import { type loader } from "./template.$templateId.quiz.$quizId.answers.$answerId";
export {
  loader,
  ErrorBoundary,
} from "./template.$templateId.quiz.$quizId.answers.$answerId";

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <div className="flex flex-col space-y-8 pb-8">
        <h1 className="text-3xl font-bold">Quiz Results</h1>
        <div className="flex flex-col space-y-1">
          <div className="text-2xl font-semibold">
            Total Questions: {data.answerWithScore.result.total}
          </div>
          <div className="text-2xl font-semibold">
            Correct Answers: {data.answerWithScore.result.correct}
          </div>
          <div className="text-2xl font-semibold">
            Percentage: {data.answerWithScore.result.score}%
          </div>
        </div>
      </div>
      <Answers />;
    </>
  );
}
