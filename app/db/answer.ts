import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { DynamoDBClient, PutItemCommand, QueryCommand } from "@aws-sdk/client-dynamodb";
import { error404, error500, formatErrors } from "~/utils/errors";
import { v4 as uuidv4 } from "uuid";
import { answerListSchema, answerSingleElementSchema } from '~/answer/validation';

export class AnswerRepository {
    constructor(
        private tableName: string,
        private indexName: string,
        private dynamodbClient: DynamoDBClient,
    ) { }

    async getByQuizId(quizId: string) {
        const queryCommand = new QueryCommand({
            TableName: this.tableName,
            KeyConditionExpression: "quizId = :quizId",
            ExpressionAttributeValues: {
                ":quizId": { S: quizId },
            },
        });

        let dynamodbResults;
        try {
            dynamodbResults = await this.dynamodbClient.send(queryCommand);
        } catch (error) {
            console.error("DynamoDB client failed to send command", error)
            throw error500("DynamoDB client failed to send command");
        }

        if (!dynamodbResults.Items || dynamodbResults.Items.length === 0) {
            throw error404("Answers not found");
        }


        const result = answerListSchema.safeParse(dynamodbResults.Items.map((item) => unmarshall(item)));

        if (!result.success) {
            const formattedErrors = formatErrors(result.error);
            console.error("Failed to parse quiz", formattedErrors);
            throw error500("Failed to parse quiz", formattedErrors);
        }

        return result.data
    }

    async createAnswer(answers: Record<string, string>, quizId: string, templateId: string, version: string, userId: string, studentName: string) {
        const answerId = uuidv4();
        const putItemCommand = new PutItemCommand({
            TableName: this.tableName,
            Item: {
                answers: { "M": marshall(answers) },
                studentName: { S: studentName },
                answerId: { S: answerId },
                quizId: { S: quizId },
                userId: { S: userId },
                createdAt: { S: new Date().toISOString() },
                templateId: { S: templateId },
                version: { S: version }
            },
        });
        try {
            await this.dynamodbClient.send(putItemCommand);
            return answerId;
        } catch (error) {
            console.error("DynamoDB client failed to send command", error)
            throw error500("DynamoDB client failed to send command");
        }
    }

    async getByAnswerId(answerId: string) {
        const queryCommand = new QueryCommand({
            TableName: this.tableName,
            IndexName: this.indexName,
            KeyConditionExpression: "answerId = :answerId",
            ExpressionAttributeValues: {
                ":answerId": { S: answerId },
            },
        });
        let results;
        try {
            results = await this.dynamodbClient.send(queryCommand);
        } catch (error) {
            console.error("DynamoDB client failed to send command", error)
            throw error500("DynamoDB client failed to send command");
        }


        if (!results.Items || results.Items.length === 0) {
            throw error404("Answer not found");
        }

        if (results.Items.length !== 1) {
            throw error500("Multiple answers found for the same answerId");
        }

        const result = answerSingleElementSchema.safeParse(unmarshall(results.Items[0]));

        if (!result.success) {
            const formattedErrors = formatErrors(result.error);
            console.error("Failed to parse asnwer", formattedErrors);
            throw error500("Failed to parse asnwer", formattedErrors);
        }

        return result.data
    }
}