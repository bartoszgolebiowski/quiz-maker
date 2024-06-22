import { DynamoDBClient, PutItemCommand, QueryCommand } from '@aws-sdk/client-dynamodb';
import { GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { z } from 'zod';
import { v4 as uuidv4 } from "uuid";
import { createTemplateSchema, templateEditDetailsSchema, templateListSchema, updateTemplateSchema } from '~/templates/validation';
import { error404, error500 } from '~/utils/errors';

export class TemplateRepository {
    constructor(
        private tableNameRead: string,
        private tableNameWrite: string,
        private s3Bucket: string,
        private dynamodbClient: DynamoDBClient,
        private s3Client: S3Client
    ) { }

    async getTemplatesByUserId(userId: string) {
        const command = new QueryCommand({
            TableName: this.tableNameRead,
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
        return templateListSchema.parse(
            results.Items.map((item) => unmarshall(item))
        )

    }

    async getTemplatesByUserIdAndTemplateId(userId: string, templateId: string) {
        const command = new GetObjectCommand({
            Bucket: this.s3Bucket,
            Key: `${userId}/templates/${templateId}.json`,
        });
        let response;
        try {
            response = await this.s3Client.send(command);
        } catch (error) {
            console.error("S3 client failed to get object", error)
            throw error500("S3 client failed to get object");
        }

        if (!response.Body) {
            console.error("Body not found in response")
            throw error404("Body not found in response");
        }

        const raw = await response.Body.transformToString();
        let json;
        try {
            json = JSON.parse(raw);
        } catch (error) {
            console.error("Failed to parse template", error)
            throw error500("Failed to parse template");
        }

        const template = templateEditDetailsSchema.parse(json);

        if (!template) {
            console.error("Template not found")
            throw error404("Template not found");
        }

        return template;
    }

    async createTemplate(input: z.infer<typeof createTemplateSchema>, userId: string, templateId = uuidv4()) {
        const s3Command = new PutObjectCommand({
            Bucket: this.s3Bucket,
            Key: `${userId}/templates/${templateId}.json`,
            Body: JSON.stringify({
                title: input.title,
                description: input.description,
                data: input.data,
            }),
        });

        let s3Response;
        try {
            s3Response = await this.s3Client.send(s3Command);
        } catch (error) {
            console.error("S3 client failed to get object", error)
            throw error500("S3 client failed to get object");
        }

        const versionId = s3Response.VersionId;
        if (!versionId) {
            console.error("S3 Versioning not enabled")
            throw error500("S3 Versioning not enabled");
        }

        try {
            const putItemWriteCommand = new PutItemCommand({
                TableName: this.tableNameWrite,
                Item: {
                    userId: { S: userId },
                    templateId: { S: templateId },
                    title: { S: input.title },
                    version: { S: versionId },
                    description: { S: input.description },
                },
            });
            const putItemReadCommand = new PutItemCommand({
                TableName: this.tableNameRead,
                Item: {
                    userId: { S: userId },
                    templateId: { S: templateId },
                    title: { S: input.title },
                    version: { S: versionId },
                    description: { S: input.description },
                },
            });
            await Promise.all([
                this.dynamodbClient.send(putItemWriteCommand),
                this.dynamodbClient.send(putItemReadCommand),
            ]);
            return templateId
        } catch (error) {
            console.error("DynamoDB client failed to send command", error)
            throw error500("DynamoDB client failed to send command");
        }
    }

    async updateTemplate(input: z.infer<typeof updateTemplateSchema>, userId: string, templateId: string) {
        if (!templateId) {
            console.error("Template not found")
            throw error404("Template not found");
        }
        const s3Command = new PutObjectCommand({
            Bucket: this.s3Bucket,
            Key: `${userId}/templates/${templateId}.json`,
            Body: JSON.stringify({
                title: input.title,
                description: input.description,
                data: input.data,
            }),
        });

        let s3Response;
        try {
            s3Response = await this.s3Client.send(s3Command);
        } catch (error) {
            console.error("S3 client failed to get object", error)
            throw error500("S3 client failed to get object");
        }

        const versionId = s3Response.VersionId;
        if (!versionId) {
            console.error("S3 Versioning not enabled")
            throw error500("S3 Versioning not enabled");
        }

        try {
            const putItemWriteCommand = new PutItemCommand({
                TableName: this.tableNameWrite,
                Item: {
                    userId: { S: userId },
                    templateId: { S: templateId },
                    title: { S: input.title },
                    version: { S: versionId },
                    description: { S: input.description },
                },
            });
            const putItemReadCommand = new PutItemCommand({
                TableName: this.tableNameRead,
                Item: {
                    userId: { S: userId },
                    templateId: { S: templateId },
                    title: { S: input.title },
                    version: { S: versionId },
                    description: { S: input.description },
                },
            });
            await Promise.all([
                this.dynamodbClient.send(putItemWriteCommand),
                this.dynamodbClient.send(putItemReadCommand),
            ]);
        } catch (error) {
            console.error("DynamoDB client failed to send command", error)
            throw error500("DynamoDB client failed to send command");
        }
    }
}