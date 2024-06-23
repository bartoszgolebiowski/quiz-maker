import { produce } from "immer";
import { APIPromise } from "openai/core.mjs";
import { ChatCompletionCreateParamsNonStreaming, ChatCompletion } from "openai/resources/index.mjs";
import { TokenCounter } from "../utils.server";

export type TemplateGenerateInput = {
    title: string;
    description: string;
    text: string;
    questions: number;
    userId: string;
};

export class OpenAIRequestBuilder {
    static OpenAIConfig = {
        options: {
            model: "gpt-4o" as const,
            messages: [
                {
                    "role": "system",
                    "content": "You are a quiz maker. Your role is to read a text and extract from this text questions. The number of questions will be provided in the input. This quiz will be used to check if students are ready for the lecture, or this quiz will be used as homework for students.  You need to create a quiz based on the input provided.\nQuestions should be unique. \n\nExample output:\n```json\n{\"data\":[{\"no\":0,\"answers\":{\"0\":\"Warszawa\",\"1\":\"Sosnowiec\",\"2\":\"Kraków\"},\"correct\":0,\"question\":\"Stolica Polski\"},{ \n\"no\":1,\n\"question\": \"Kiedy odbył się Kongres wiedeński?\", \n\"answers\" : {\n\"0\": \"W 1814 roku\",\n\"1\": \"W 1815 roku\",\n\"2\": \"W 1820 roku\",\n\"3\": \"W 1830 roku\"\n}, \"correct\":0 },\n    {\n      \"no\": 2,\n     \"question\": \"Kto reprezentował pokonaną Francję na Kongresie wiedeńskim?\",\n      \"answers\":{\n\"0\": \"Klemens Metternich\",\n\"1\": \"Aleksander I\",\n\"2\": \"Talleyrand\",\n\"3\": \"Napoleon Bonaparte\"\n},\"correct\": 2\n    }]}\n```\n\nThe output should match the example shape.\nThe output should be valid JSON without any control characters.\nIf the output does not match tell me it.\n\nThe language should be extracted from the prompt of the user.\n"
                },
            ] as ChatCompletionCreateParamsNonStreaming["messages"],
            temperature: 1.2,
            max_tokens: 4096,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    }
    static body(input: TemplateGenerateInput): ChatCompletionCreateParamsNonStreaming {
        return produce(OpenAIRequestBuilder.OpenAIConfig.options, (draft) => {
            draft.messages.push({
                role: "user" as const,
                content: JSON.stringify({ questions: input.questions, text: input.text }, null, 2)
            });
        })
    }
}

export class RequestDataFormatter {
    static insert(
        input: ReturnType<typeof OpenAIRequestBuilder.body>,
        output: Awaited<APIPromise<ChatCompletion>>,
        request: TemplateGenerateInput
    ) {
        return {
            input,
            output,
            tokens: TokenCounter.count(output, input),
            title: request.title,
            description: request.description,
            userId: request.userId,
        }
    }
}
