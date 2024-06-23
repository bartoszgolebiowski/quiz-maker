import OpenAI from "openai";
import { AnswerGenerateInput, OpenAIRequestBuilder, RequestDataFormatter, } from "./utils.server";
import { ResposneDataFormatter } from "../utils.server";
import { aiAnswerSchema } from "./validation.server";
import { z } from "zod";
import { PromptRepository } from "~/db/prompt";


export class AnswerGenerator {
    constructor(
        private openAI: OpenAI,
        private promptRepository: PromptRepository,
    ) {}

    async generate(request: AnswerGenerateInput): Promise<z.infer<typeof aiAnswerSchema>> {
        const input = OpenAIRequestBuilder.body(request);

        let output;
        try {
            output = await this.openAI.chat.completions.create(input);
        } catch (e) {
            throw new Error("OpenAI API error", { cause: e });
        }

        try {
            const insert = RequestDataFormatter.insert(input, output, request);
            await this.promptRepository.savePrompt(request.userId, insert);
        } catch (e) {
            throw new Error("Database error", { cause: e });
        }
        try {
            const content = ResposneDataFormatter.json(output, aiAnswerSchema)
            return content
        } catch (e) {
            throw new Error("Invalid JSON", { cause: e });
        }
    }
}


