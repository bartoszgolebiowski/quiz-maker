import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { S3Client } from "@aws-sdk/client-s3";
import { TemplateRepository } from "./template";
import { env } from "~/env";

const dynamodbClient = new DynamoDBClient({});
const s3Client = new S3Client({});

export { dynamodbClient, s3Client };

const templateClient = new TemplateRepository(
    env.TEMPLATE_READ_TABLE_NAME,
    env.TEMPLATE_WRITE_TABLE_NAME,
    env.BUCKET_NAME,
    dynamodbClient,
    s3Client
)

export { templateClient };