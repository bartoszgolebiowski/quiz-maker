import { z } from 'zod';

const quizSingleElementSchema = z.object({
    quizId: z.string(),
    code: z.string(),
    ownerId: z.string(),
    templateId: z.string(),
    version: z.string(),
    dueDate: z.string(),
    title: z.string(),
    description: z.string(),
});

export const quizListSchema = z.array(quizSingleElementSchema);
