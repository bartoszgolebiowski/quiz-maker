import { z } from 'zod';

export const codeSingleElementSchema = z.object({
    templateId: z.string().uuid(), // required att to link with specific template
    quizId: z.string().uuid(),
    code: z.string(),
    version: z.string(), // required att to link with specific template
});
