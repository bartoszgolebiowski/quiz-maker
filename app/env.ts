import { z } from "zod";

const envSchema = z.object({
    REGION: z.string(),
    SITE_URL: z.string(),
    COGNITO_DOMAIN: z.string(),
    COGNITO_USER_POOL_CLIENT_ID: z.string(),
    SESSION_SECRET: z.string(),
    BUCKET_NAME: z.string(),
    TABLE_NAME: z.string(),
});

export const env = envSchema.parse(process.env);