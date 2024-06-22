import { DynamoDBClient, PutItemCommand, QueryCommand } from "@aws-sdk/client-dynamodb";
import { TemplateRepository } from './template';
import { error404, error500 } from "~/utils/errors";
import { createQuizSchema, quizListSchema } from "~/quizzes/validation";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { CodeRepository } from "./code";

export class QuizRepository {
    constructor(
        private tableName: string,
        private indexName: string,
        private dynamodbClient: DynamoDBClient,
        private templateRepository: TemplateRepository,
        private codeRepository: CodeRepository,
    ) { }

    async getQuizzesByUserId(userId: string) {
        const command = new QueryCommand({
            TableName: this.tableName,
            KeyConditionExpression: "userId = :pk",
            ExpressionAttributeValues: {
                ":pk": { S: userId },
            },
        });
        let results;
        try {
            results = await this.dynamodbClient.send(command);
        } catch (error) {
            console.error("DynamoDB client failed to send command", error)
            throw error500("DynamoDB client failed to send command");
        }
        if (!results.Items) {
            return []
        }
        return quizListSchema.parse(
            results.Items.map((item) => unmarshall(item))
        )
    }

    async createQuiz(input: z.infer<typeof createQuizSchema>, userId: string) {
        const quizId = uuidv4();
        const versionId = await this.templateRepository.getCurrentTemplateVersion(userId, input.templateId);
        const code = await this.codeRepository.createCode(quizId, input.templateId, versionId);
        try {
            const putItemCommand = new PutItemCommand({
                TableName: this.tableName,
                Item: {
                    templateId: { S: input.templateId },
                    quizId: { S: quizId },
                    userId: { S: userId },
                    createdAt: { S: new Date().toISOString() },
                    version: { S: versionId },
                    title: { S: input.title },
                    description: { S: input.description },
                    code: { S: code },
                    done: { BOOL: false },
                },
            });
            await this.dynamodbClient.send(putItemCommand);
            return { templateId: input.templateId };
        } catch (error) {
            console.error("DynamoDB client failed to put command", error);
            throw error500("DynamoDB client failed to put command");
        }
    }

    async getQuizById(quizId: string) {
        const command = new QueryCommand({
            TableName: this.tableName,
            IndexName: this.indexName,
            KeyConditionExpression: "quizId = :pk",
            ExpressionAttributeValues: {
                ":pk": { S: quizId },
            },
            Limit: 1,
        })
        let results;
        try {
            results = await this.dynamodbClient.send(command);
        }
        catch (error) {
            console.error("DynamoDB client failed to put command", error);
            throw error500("DynamoDB client failed to put command");
        }

        if (!results.Items || results.Items.length === 0) {
            throw error404("Quiz not found");
        }

        return quizListSchema.parse(
            results.Items.map((item) => unmarshall(item))
        )[0];
    }

    async getQuizByCode(code: string) {
        const quizId = await this.codeRepository.getQuizIdByCode(code);
        const quiz = await this.getQuizById(quizId);
        return quiz;
    }
    
    async expireQuiz(userId: string, quizId: string) {
        const command = new PutItemCommand({
            TableName: this.tableName,
            Item: {
                quizId: { S: quizId },
                userId: { S: userId },
                done: { BOOL: true },
            },
        });
        try {
            await this.dynamodbClient.send(command);
        } catch (error) {
            console.error("DynamoDB client failed to put command", error);
            throw error500("DynamoDB client failed to put command");
        }
    }
}