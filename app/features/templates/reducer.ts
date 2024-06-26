import { produce } from "immer";
import { useReducer } from "react";
import { z } from "zod";
import { quizContentSchema } from "./validation";

export type State = {
    data: z.infer<typeof quizContentSchema>['data']
    suggestions: {
        answers: string[],
        correct: number | null;
        no: number
    } | null,
    title: string,
    description: string,
}

type Action =
    | ReturnType<typeof appendQuestion>
    | ReturnType<typeof deleteQuestion>
    | ReturnType<typeof changeQuestionOrder>
    | ReturnType<typeof updateQuestionText>
    | ReturnType<typeof appendAnswer>
    | ReturnType<typeof deleteAnswer>
    | ReturnType<typeof updateAnswer>
    | ReturnType<typeof updateCorrectAnswer>
    | ReturnType<typeof updateQuizTitle>
    | ReturnType<typeof updateQuizDescription>
    | ReturnType<typeof appendSuggestions>
    | ReturnType<typeof acceptSuggestion>
    | ReturnType<typeof deleteSuggestion>

export const initialState: State = {
    data: [],
    suggestions: null,
    title: "",
    description: "",
}

export const appendQuestion = () => ({
    type: "APPEND_QUESTION" as const,
})

export const deleteQuestion = (no: number) => ({
    type: "DELETE_QUESTION" as const,
    payload: {
        no,
    },
})

export const changeQuestionOrder = (from: number, to: number) => ({
    type: "CHANGE_QUESTION_ORDER" as const,
    payload: {
        from,
        to,
    },
})

export const updateQuestionText = (no: number, text: string) => ({
    type: "UPDATE_QUESTION_TEXT" as const,
    payload: {
        no,
        text,
    },
})

export const appendAnswer = (no: number) => ({
    type: "APPEND_ANSWER" as const,
    payload: {
        no,
    },
})

export const deleteAnswer = (no: number, index: number) => ({
    type: "DELETE_ANSWER" as const,
    payload: {
        no,
        index,
    },
})

export const updateAnswer = (no: number, index: number, text: string) => ({
    type: "UPDATE_ANSWER" as const,
    payload: {
        no,
        index,
        text,
    },
})

export const updateCorrectAnswer = (no: number, index: number) => ({
    type: "UPDATE_CORRECT_ANSWER" as const,
    payload: {
        no,
        index,
    },
})

export const updateQuizTitle = (title: string) => ({
    type: "UPDATE_QUIZ_TITLE" as const,
    payload: {
        title,
    },
})

export const updateQuizDescription = (description: string) => ({
    type: "UPDATE_QUIZ_DESCRIPTION" as const,
    payload: {
        description,
    },
})

export const appendSuggestions = (suggestions: State['suggestions']) => ({
    type: "APPEND_SUGGESTIONS" as const,
    payload: {
        suggestions,
    },
})

export const acceptSuggestion = (index: number) => ({
    type: "ACCEPT_SUGGESTION" as const,
    payload: {
        index,
    },
})

export const deleteSuggestion = (index: number) => ({
    type: "DELETE_SUGGESTION" as const,
    payload: {
        index,
    },
})

export const reducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case "APPEND_QUESTION": {
            return produce(state, draft => {
                draft.data.push({
                    correct: null,
                    no: draft.data.length,
                    question: "",
                    answers: {},
                })
            })
        }
        case "DELETE_QUESTION": {
            return produce(state, draft => {
                draft.data = draft.data.filter(question => question.no !== action.payload.no)
                draft.data.forEach((question, index) => {
                    question.no = index
                })
            })

        }
        case "CHANGE_QUESTION_ORDER": {
            return produce(state, draft => {
                const { from, to } = action.payload
                const question = draft.data[from]
                draft.data.splice(from, 1)
                draft.data.splice(to, 0, question)
                draft.data.forEach((question, index) => {
                    question.no = index
                })
            })
        }
        case "UPDATE_QUESTION_TEXT": {
            return produce(state, draft => {
                const { no, text } = action.payload
                draft.data[no].question = text
            })
        }
        case "APPEND_ANSWER": {
            return produce(state, draft => {
                const { no } = action.payload
                draft.data[no].answers[Object.keys(draft.data[no].answers).length] = ""
            })
        }
        case "DELETE_ANSWER": {
            return produce(state, draft => {
                const { no, index } = action.payload
                delete draft.data[no].answers[index]
                if (draft.data[no].correct === index) {
                    draft.data[no].correct = null
                }
                const newAnswers = {} as Record<number, string>
                Object.keys(draft.data[no].answers).forEach((key, index) => {
                    newAnswers[index] = draft.data[no].answers[Number(key)]
                })
                draft.data[no].answers = newAnswers
            })
        }
        case "UPDATE_ANSWER": {
            return produce(state, draft => {
                const { no, index, text } = action.payload
                draft.data[no].answers[index] = text
            })
        }
        case "UPDATE_CORRECT_ANSWER": {
            return produce(state, draft => {
                const { no, index } = action.payload
                draft.data[no].correct = index
            })
        }
        case "UPDATE_QUIZ_TITLE": {
            return produce(state, draft => {
                draft.title = action.payload.title
            })
        }
        case "UPDATE_QUIZ_DESCRIPTION": {
            return produce(state, draft => {
                draft.description = action.payload.description
            })
        }
        case "APPEND_SUGGESTIONS": {
            return produce(state, draft => {
                draft.suggestions = action.payload.suggestions
            })
        }
        case "ACCEPT_SUGGESTION": {
            return produce(state, draft => {
                const { index } = action.payload
                if (!draft.suggestions) {
                    return
                }
                const questionIndex = draft.data.findIndex(question => question.no === draft.suggestions?.no)
                if (questionIndex === -1) {
                    return
                }

                const answerIndexInQuestion = Object.keys(draft.data[questionIndex].answers).length
                draft.data[questionIndex].answers[answerIndexInQuestion] = draft.suggestions.answers[index]
                if (index === draft.suggestions.correct) {
                    draft.data[questionIndex].correct = answerIndexInQuestion
                    draft.suggestions.correct = null
                }

                draft.suggestions.answers.splice(index, 1)
                if (!draft.suggestions.answers.length) {
                    draft.suggestions = null
                    return;
                }

                if (!draft.suggestions.correct) {
                    return
                }

                if (index < draft.suggestions.correct) {
                    --draft.suggestions.correct;
                }
            })
        }
        case "DELETE_SUGGESTION": {
            return produce(state, draft => {
                const { index } = action.payload
                if (!draft.suggestions) {
                    return
                }

                draft.suggestions.answers.splice(index, 1)
                if (!draft.suggestions.answers.length) {
                    draft.suggestions = null
                    return;
                }

                if (!draft.suggestions.correct) {
                    return
                }

                if (index < draft.suggestions.correct) {
                    --draft.suggestions.correct;
                    return
                }

                if (index === draft.suggestions.correct) {
                    draft.suggestions.correct = null
                    return
                }

            })
        }
        default: {
            return state
        }
    }
}

export const useManualWizardReducer = (inital = initialState) => {
    const [state, dispatch] = useReducer(reducer, inital);

    return {
        state,
        appendQuestion:
            () => dispatch(appendQuestion()),
        deleteQuestion:
            (index: number) => dispatch(deleteQuestion(index)),
        changeQuestionOrder:
            (index: number, newIndex: number) =>
                dispatch(changeQuestionOrder(index, newIndex)),
        updateQuestionText:
            (questionIndex: number, text: string) =>
                dispatch(updateQuestionText(questionIndex, text)),
        appendAnswer:
            (questionIndex: number) => dispatch(appendAnswer(questionIndex)),
        deleteAnswer: (questionIndex: number, answerIndex: number) =>
            dispatch(deleteAnswer(questionIndex, answerIndex)),
        updateAnswer: (
            questionIndex: number,
            answerIndex: number,
            text: string
        ) => dispatch(updateAnswer(questionIndex, answerIndex, text)),
        updateCorrectAnswer: (questionIndex: number, answerIndex: number) =>
            dispatch(updateCorrectAnswer(questionIndex, answerIndex)),
        appendSuggestions: (suggestions: State['suggestions']) =>
            dispatch(appendSuggestions(suggestions)),
        acceptSuggestion: (index: number) =>
            dispatch(acceptSuggestion(index)),
        deleteSuggestion: (index: number) =>
            dispatch(deleteSuggestion(index)),
        updateQuizMetaData: (key: 'title' | 'description', value: string) => {
            if (key === 'title') {
                dispatch(updateQuizTitle(value))
                return
            }
            if (key === 'description') {
                dispatch(updateQuizDescription(value))
                return
            }
            throw new Error('Invalid key')
        }
    };
}