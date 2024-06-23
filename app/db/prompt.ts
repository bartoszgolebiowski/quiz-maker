import { marshall } from '@aws-sdk/util-dynamodb';
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from "uuid";
import { error500 } from "~/utils/errors";

export class PromptRepository {
    constructor(
        private tableName: string,
        private dynamodbClient: DynamoDBClient,
    ) { }

    async savePrompt(userId: string, prompt: object) {
        const promptId = uuidv4();
        const putItemCommand = new PutItemCommand({
            TableName: this.tableName,
            Item: {
                userId: { S: userId },
                promptId: { S: promptId },
                prompt: { M: marshall(prompt) },
            },
        });
        try {
            await this.dynamodbClient.send(putItemCommand);
        } catch (error) {
            console.error("DynamoDB client failed to send command", error)
            throw error500("DynamoDB client failed to send command");
        }
    }
}