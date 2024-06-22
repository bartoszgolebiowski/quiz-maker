import { z } from 'zod';

export const codeSingleElementSchema = z.object({
    templateId: z.string(), // required att to link with specific template
    quizId: z.string(),
    code: z.string(),
    version: z.string(), // required att to link with specific template
});
