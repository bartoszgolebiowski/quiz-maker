import { DynamoDBClient, PutItemCommand, QueryCommand } from "@aws-sdk/client-dynamodb";
import { error404, error500, formatErrors } from "~/utils/errors";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { codeSingleElementSchema } from "~/code/validation";

export class CodeRepository {
    constructor(
        private tableName: string,
        private dynamodbClient: DynamoDBClient,
    ) { }

    async createCode(quizId: string, templateId: string, version: string) {
        const code = this.generate6DigitCode();
        const putItemCommand = new PutItemCommand({
            TableName: this.tableName,
            Item: {
                quizId: { S: quizId },
                code: { S: code },
                templateId: { S: templateId },
                version: { S: version },
            },
        });
        try {
            await this.dynamodbClient.send(putItemCommand);
        } catch (error) {
            console.error("DynamoDB client failed to send command", error)
            throw error500("DynamoDB client failed to send command");
        }
        return code;
    }


    async getQuizIdByCode(code: string) {
        const command = new QueryCommand({
            TableName: this.tableName,
            KeyConditionExpression: "code = :pk",
            ExpressionAttributeValues: {
                ":pk": { S: code },
            },
        });
        let results;
        try {
            results = await this.dynamodbClient.send(command);
        } catch (error) {
            console.error("DynamoDB client failed to send command", error)
            throw error500("DynamoDB client failed to send command");
        }

        if (!results.Items || results.Items.length === 0) {
            throw error404("Code not found");
        }

        const result = codeSingleElementSchema.safeParse(
            unmarshall(results.Items[0])
        );

        if (!result.success) {
            const formattedErrors = formatErrors(result.error);
            console.error("Failed to parse quiz", formattedErrors);
            throw error500("Failed to parse quiz", formattedErrors);
        }

        return result.data.quizId;
    }


    private generate6DigitCode() {
        const code = Math.floor(100_000 + Math.random() * 900_000);
        return code.toString();
    }
}