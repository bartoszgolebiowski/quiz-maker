import { produce } from "immer";
import { APIPromise } from "openai/core.mjs";
import { ChatCompletionCreateParamsNonStreaming, ChatCompletion } from "openai/resources/index.mjs";
import { TokenCounter } from "../utils.server";

export type AnswerGenerateInput = {
    title: string;
    question: string;
    answers: string[];
    correct: number | null;
    quantity: number;
    userId: string;
};

export class OpenAIRequestBuilder {
    static OpenAIConfig = {
        options: {
            model: "gpt-4o" as const,
            messages: [
                {
                    "role": "system",
                    "content": "You are a teacher. Your role is to create up to 5 questions based on the provided question. The text in this file contains information I'd like to use to create a quiz for my class.\n\nRemember to provide a mix of difficulty levels in the questions to accommodate all learners, \nand please structure the questions and answers in the JSON format as shown above. \n\nFormat the output as follows:\nExample1: { \"data\": {answers: [\"Mars\", \"Venus\", \"Jupiter\", \"Saturn\"],  \"correct\":0} }\nExample2: { \"data\":{\"answers\": [\"William Shakespeare\", \"Charles Dickens\", \"Jane Austen\", \"Mark Twain\"], \"correct\": 3}}\nExample3:  { \"data\":{\"answers\": [\"Warsaw\", \"Cracow\", \"Kielce\", \"Zakopane\"],\"correct\": null}  }\n\nInput format: {\n\"title\": \"Congress of Vienna\",\n\"question\":\"What rules were introduced by the Congress of Vienna?\",\n\"answers\": [\"Principle of Balance of Power in Europe\", \"Principle of Legitimism\", \"Principle of Restoration\", \"Principle of Protectorate\"],\n\"correct\": 0,\n\"quantity\": 3,\n}\n\nWhere \"answers\" are already present in the quiz, \"correct\" is the index of correct answers, if \"correct\" is null no answer is correct, so generate the correct answer for \"question\". The \"quantity\" means how many answers should be generated in the output. You should only generate one object in output. When \"correct\" is null the output should have \"correct\" number value\n\n\n\n"
                },
            ] as ChatCompletionCreateParamsNonStreaming["messages"],
            temperature: 1.2,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    }
    static body(input: AnswerGenerateInput) {
        return produce(OpenAIRequestBuilder.OpenAIConfig.options, (draft) => {
            draft.messages.push({
                role: "user" as const,
                content: JSON.stringify(input, null, 2)
            });
        })
    }
}

export class RequestDataFormatter {
    static insert(
        input: ChatCompletionCreateParamsNonStreaming,
        output: Awaited<APIPromise<ChatCompletion>>,
        request: AnswerGenerateInput
    ) {
        return {
            input,
            output,
            tokens: TokenCounter.count(output, input),
            ownerId: request.userId,
        }
    }
}

