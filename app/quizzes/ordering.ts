import { z } from "zod"
import { quizContentSchema } from "~/templates/validation"

export const sortQuestions = (questions: z.infer<typeof quizContentSchema>) => {
    return {
        data: questions.data.sort(() =>
            Math.random() > 0.5 ? 1 : -1
        )
    }
}

