import { getEncoding } from "js-tiktoken";
import { APIPromise } from "openai/core.mjs";
import { ChatCompletion, ChatCompletionCreateParamsNonStreaming } from "openai/resources/index.mjs";
import { ZodType } from "zod";
import { } from "./templates/utils.server";

class RequestDataFormatter {
    static message(input: ChatCompletionCreateParamsNonStreaming) {
        return input.messages.map((message) => message.content).join("");
    }
}

export class ResposneDataFormatter {
    static content(response: Awaited<APIPromise<ChatCompletion>>) {
        return response.choices.map((choice) => choice.message.content).join("");
    }
    static json<T>(response: Awaited<APIPromise<ChatCompletion>>, schema: ZodType<T>): T {
        const raw = ResposneDataFormatter.content(response);
        const json = JSON.parse(raw);
        return schema.parse(json);
    }
}

export class TokenCounter {
    static enc = getEncoding("cl100k_base");
    static count(
        response: Awaited<APIPromise<ChatCompletion>>,
        input: ChatCompletionCreateParamsNonStreaming
    ) {
        const inputTokens = TokenCounter.tokenInput(input);
        const outputTokens = TokenCounter.tokenOutput(response);
        return inputTokens + outputTokens
    }
    static tokenInput(input: ChatCompletionCreateParamsNonStreaming) {
        return TokenCounter.enc.encode(RequestDataFormatter.message(input)).length;
    }
    static tokenOutput(response: Awaited<APIPromise<ChatCompletion>>) {
        return TokenCounter.enc.encode(ResposneDataFormatter.content(response)).length;
    }
}