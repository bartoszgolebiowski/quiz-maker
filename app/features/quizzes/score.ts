import { z } from "zod";
import { quizContentSchema } from "~/templates/validation";

const PERCENTAGE = 100;

export const calculateScore = (questions: z.infer<typeof quizContentSchema>, answers: Record<string, string>) => {
    let score = 0
    for (const [key, value] of Object.entries(answers)) {
        const question = questions.data.find((question) => question.no === parseInt(key))
        if (!question) throw new Error(`Question ${key} not found`)
        if (question.correct === parseInt(value)) {
            score++
        }
    }
    return {
        total: questions.data.length,
        correct: score,
        incorrect: questions.data.length - score,
        score: score / questions.data.length * PERCENTAGE
    }
}