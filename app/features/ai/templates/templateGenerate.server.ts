import OpenAI from "openai";
import { TemplateGenerateInput, OpenAIRequestBuilder, RequestDataFormatter } from "./utils.server";
import { ResposneDataFormatter } from "../utils.server";
import { quizContentSchema } from "~/features/templates/validation";
import { TemplateRepository } from '~/db/template';
import { PromptRepository } from "~/db/prompt";

export class TemplateGenerate {
    constructor(
        private openAI: OpenAI,
        private promptRepository: PromptRepository,
        private templateRepository: TemplateRepository,
    ) {}

    async generate(request: TemplateGenerateInput) {
        const input = OpenAIRequestBuilder.body(request);
        let output
        try {
            output = await this.openAI.chat.completions.create(input);
        } catch (e) {
            throw new Error("OpenAI API error", { cause: e });
        }

        const insert = RequestDataFormatter.insert(input, output, request);
        try {
            await this.promptRepository.savePrompt(request.userId, insert)
        } catch (e) {
            throw new Error("Database error", { cause: e });
        }
        let content
        try {
            content = ResposneDataFormatter.json(output, quizContentSchema)
        } catch (e) {
            throw new Error("Invalid JSON", { cause: e });
        }
        try {
            const result = await this.templateRepository.createTemplate({
                data: content,
                title: request.title,
                description: request.description,
            }, request.userId);
            return result
        } catch (e) {
            throw new Error("Database error", { cause: e });
        }
    }
}



