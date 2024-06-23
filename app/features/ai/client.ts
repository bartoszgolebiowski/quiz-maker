import { promptRepository, templateRepository } from "~/db/client";
import OpenAiServer from "./OpenAi.server";
import { AnswerGenerator } from "./answers/answerGenerator.server";
import { TemplateGenerate } from './templates/templateGenerate.server'

const appendAnswerClient = new AnswerGenerator(
    OpenAiServer,
    promptRepository
)

export { appendAnswerClient };

const templateGenerateClient = new TemplateGenerate(
    OpenAiServer,
    promptRepository,
    templateRepository
)

export { templateGenerateClient };