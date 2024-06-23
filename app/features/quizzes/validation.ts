import { z } from 'zod';
import { zfd } from 'zod-form-data';

const quizSingleElementSchema = z.object({
    quizId: z.string().uuid(),
    templateId: z.string().uuid(),
    userId: z.string().uuid(),
    createdAt: z.string(),
    version: z.string(),
    title: z.string(),
    description: z.string(),
    done: z.coerce.boolean(),
    code: z.string(),
});

export const quizListSchema = z.array(quizSingleElementSchema);

export const createQuizSchema = zfd.formData({
    templateId: zfd.text(z.string()),
    title: zfd.text(
        z
            .string()
            .min(1, { message: "Title is required" })
            .max(255, { message: "Title is too long, max 255 characters" })
    ),
    description: zfd
        .text(
            z
                .string()
                .min(1, { message: "Description is required" })
                .max(255, { message: "Description is too long, max 255 characters" })
        )
        .optional()
        .default(""),
});

export const expireQuizSchema = zfd.formData({
    quizId: zfd.text(z.string()),
});

export const joinQuizSchema = zfd.formData({
    code: zfd
        .numeric(
            z
                .number()
                .min(100000, {
                    message: "Code must be at least 6 digits long",
                })
                .max(999999, {
                    message: "Code must be at most 6 digits long",
                })
        )
        .transform((v) => String(v)),
    name: zfd.text(
        z
            .string()
            .min(1, { message: "Name is required" })
            .max(256, { message: "Name is too long" })
    ),
});