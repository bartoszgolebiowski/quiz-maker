import { unmarshall } from '@aws-sdk/util-dynamodb';
import { DynamoDBClient, PutItemCommand, QueryCommand } from "@aws-sdk/client-dynamodb";
import { error404, error500 } from "~/utils/errors";
import { v4 as uuidv4 } from "uuid";

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

        let results;
        try {
            results = await this.dynamodbClient.send(queryCommand);
        } catch (error) {
            console.error("DynamoDB client failed to send command", error)
            throw error500("DynamoDB client failed to send command");
        }

        console.log(results.Items)
        return results.Items;
    }

    async createAnswer(answers: Record<string, string>, quizId: string, templateId: string, version: string, userId: string, studentName: string) {
        const answerId = uuidv4();
        const putItemCommand = new PutItemCommand({
            TableName: this.tableName,
            Item: {
                answers: { "M": this.convertToDynamoDbMap(answers) },
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

    private convertToDynamoDbMap(record: Record<string, string>): Record<string, { S: string }> {
        const dynamoDbMap: Record<string, { S: string }> = {};
        for (const key in record) {
            dynamoDbMap[key] = { S: record[key] };
        }
        return dynamoDbMap;
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
            throw error404("Quiz not found");
        }

        return unmarshall(results.Items[0])
    }
}