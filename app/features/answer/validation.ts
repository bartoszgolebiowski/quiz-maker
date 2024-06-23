import { z } from 'zod';

export const answerSingleElementSchema = z.object({
    version: z.string(),
    studentName: z.string(),
    userId: z.string().uuid(), // Validates UUID format
    answerId: z.string().uuid(),
    templateId: z.string().uuid(),
    createdAt: z.string(),
    answers: z.record(z.string()),
    quizId: z.string().uuid()
});

export const answerListSchema = z.array(answerSingleElementSchema);