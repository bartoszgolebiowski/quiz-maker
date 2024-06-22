import { z } from "zod";

const envSchema = z.object({
    REGION: z.string(),
    COGNITO_DOMAIN: z.string(),
    COGNITO_USER_POOL_CLIENT_ID: z.string(),
    SESSION_SECRET: z.string(),
    BUCKET_NAME: z.string(),
    TEMPLATE_READ_TABLE_NAME: z.string(),
    TEMPLATE_WRITE_TABLE_NAME: z.string(),
    QUIZ_TABLE_NAME: z.string(),
    CODE_TABLE_NAME: z.string(),
    INSTANCE_TABLE_NAME: z.string(),
    ANSWER_TABLE_NAME: z.string(),
});

export const env = envSchema.parse(process.env);