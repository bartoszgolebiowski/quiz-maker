import { z } from "zod";
import { reducer } from "./reducer";

export const quizContentSingleElementValidationSchema = z
    .object({
        no: z.number().nonnegative(),
        answers: z.record(z.coerce.number(), z.string()),
        correct: z.number().nonnegative().nullable(),
        question: z.string().min(1, "Question cannot be empty"),
    })
    .refine(
        (data) => {
            if (data.correct === null) return false;
            const correctAnswer = data.answers[data.correct];
            return correctAnswer !== undefined;
        },
        {
            message: "Correct answer must be selected",
            path: ["correct"],
        }
    )
    .refine(
        (data) => {
            const answers = Object.values(data.answers);
            return answers.length >= 2;
        },
        {
            message: "At least 2 answers must be provided",
            path: ["answers"],
        }
    )
    .refine(
        (data) => {
            const answers = Object.values(data.answers);
            return answers.every((answer) => answer.length > 0);
        },
        {
            message: "All answers must be filled",
            path: ["answers"],
        }
    );

export const isValid = (data: Parameters<typeof reducer>[0]) => {
    if (!data) {
        return false;
    }
    if (data.title === "") {
        return false;
    }
    if (data.data.length === 0) {
        return false
    }

    for (let i = 0; i < data.data.length; i++) {
        const result = quizContentSingleElementValidationSchema.safeParse(data.data[i]);
        if (!result.success) {
            return false;
        }
    }
    return true;
}

export const quizContentSingleElementSchema = z.object({
    no: z.number().nonnegative(),
    answers: z.record(z.coerce.number(), z.string()),
    correct: z.number().nonnegative().nullable(),
    question: z.string().min(1, { message: 'Question must be at least 1 character long' }).max(255, { message: 'Question must be at most 255 characters long' }),
})


export const quizContentSchema = z.object({
    data: z.array(quizContentSingleElementSchema)
})

const templateSingleElementSchema = z.object({
    userId: z.string(),
    id: z.string(),
    version: z.string(),
    title: z.string(),
    description: z.string(),
})

export const templateListSchema = z.array(templateSingleElementSchema)

export const templateEditDetailsSchema = z.object({
    title: z.string(),
    description: z.string(),
    data: z.object({ data: z.array(quizContentSingleElementSchema) }),
})