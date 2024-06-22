import { QuizRepository } from './quiz';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { S3Client } from "@aws-sdk/client-s3";
import { TemplateRepository } from "./template";
import { env } from "~/env";
import { CodeRepository } from './code';
import { AnswerRepository } from './answer';

const dynamodbClient = new DynamoDBClient({});
const s3Client = new S3Client({});

export { dynamodbClient, s3Client };

const templateRepository = new TemplateRepository(
    env.ACTIVE_TEMPLATE_TABLE_NAME,
    env.TEMPLATE_TABLE_NAME,
    env.BUCKET_NAME,
    dynamodbClient,
    s3Client
)

export { templateRepository };

const codeRepository = new CodeRepository(
    env.CODE_TABLE_NAME,
    dynamodbClient,
)

const quizRepository = new QuizRepository(
    env.QUIZ_TABLE_NAME,
    env.QUIZ_ID_INDEX_NAME,
    dynamodbClient,
    templateRepository,
    codeRepository
)

export { quizRepository };

const answerRepository = new AnswerRepository(
    env.ANSWER_TABLE_NAME,
    env.ANSWER_ID_INDEX_NAME,
    dynamodbClient,
)

export { answerRepository };