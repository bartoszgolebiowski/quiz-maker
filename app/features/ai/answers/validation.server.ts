import { z } from "zod";

export const aiAnswerSchema = z.object({
    data: z.object({ answers: z.array(z.string()), correct: z.number().nullable() })
})