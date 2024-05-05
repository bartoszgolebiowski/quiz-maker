
import { describe, expect, it } from 'vitest';
import { appendAnswer, appendQuestion, changeQuestionOrder, deleteAnswer, deleteQuestion, reducer, updateAnswer, updateCorrectAnswer, updateQuestionText, updateQuizDescription, updateQuizTitle } from '../reducer';

const objectSize = <T extends object>(obj: T) => {
    return Object.keys(obj).length
}

describe('reducer', () => {
    describe('APPEND_QUESTION', () => {
        it('should append question to the end of the list 2', () => {
            const initialState = {
                data: [{
                    correct: 0,
                    no: 0,
                    question: "",
                    answers: {},
                }],
                title: "",
                description: "",
            }
            const result = reducer(initialState, appendQuestion())
            expect(result.data).toHaveLength(2)
            expect(result.data[1].no).toEqual(1)
            expect(result.data[1].correct).toEqual(null)
            expect(result.data[1].question).toEqual("")
            expect(result.data[1].answers).toEqual({})
        })
    });

    describe('DELETE_QUESTION', () => {
        it('should delete question by no', () => {
            const initialState = {
                data: [{
                    correct: 0,
                    no: 0,
                    question: "",
                    answers: {},
                }, {
                    correct: 0,
                    no: 1,
                    question: "",
                    answers: {},
                }],
                title: "",
                description: "",
            }
            const result = reducer(initialState, deleteQuestion(1))
            expect(result.data).toHaveLength(1)
            expect(result.data[0].no).toEqual(0)
        })

        it('should update no of questions after delete', () => {
            const initialState = {
                data: [{
                    correct: 0,
                    no: 0,
                    question: "",
                    answers: {},
                }, {
                    correct: 0,
                    no: 1,
                    question: "",
                    answers: {},
                },
                {
                    correct: 0,
                    no: 2,
                    question: "",
                    answers: {},
                },
                {
                    correct: 0,
                    no: 3,
                    question: "",
                    answers: {},
                },
                {
                    correct: 0,
                    no: 4,
                    question: "",
                    answers: {},
                }],
                suggestions: null,
                title: "",
                description: "",
            }
            const result = reducer(initialState, deleteQuestion(1))
            expect(result.data).toHaveLength(4)
            expect(result.data[0].no).toEqual(0)
            expect(result.data[1].no).toEqual(1)
            expect(result.data[2].no).toEqual(2)
            expect(result.data[3].no).toEqual(3)
        })
    })

    describe('CHANGE_QUESTION_ORDER', () => {
        it('should change question order', () => {
            const initialState = {
                data: [{
                    correct: 0,
                    no: 0,
                    question: "no 0",
                    answers: {},
                }, {
                    correct: 0,
                    no: 1,
                    question: "no 1",
                    answers: {},
                }],
                suggestions: null,
                title: "",
                description: "",
            }
            const result = reducer(initialState, changeQuestionOrder(
                0,
                1,
            ))
            expect(result.data).toHaveLength(2)
            expect(result.data[0].question).toEqual('no 1')
            expect(result.data[1].question).toEqual('no 0')
        })
    })

    describe('UPDATE_QUESTION_TEXT', () => {
        it('should update question text', () => {
            const initialState = {
                data: [{
                    correct: 0,
                    no: 0,
                    question: "no 0",
                    answers: {},
                }, {
                    correct: 0,
                    no: 1,
                    question: "no 1",
                    answers: {},
                }],
                suggestions: null,
                title: "",
                description: "",
            }
            const result = reducer(initialState, updateQuestionText(
                1,
                'updated no 1',
            ))
            expect(result.data).toHaveLength(2)
            expect(result.data[0].question).toEqual('no 0')
            expect(result.data[1].question).toEqual('updated no 1')
        })
    })

    describe('APPEND_ANSWER', () => {
        it('should append answer to the end of the list', () => {
            const initialState = {
                data: [{
                    correct: 0,
                    no: 0,
                    question: "no 0",
                    answers: {},
                }, {
                    correct: 0,
                    no: 1,
                    question: "no 1",
                    answers: {},
                }],
                title: "",
                description: "",
            }
            const result = reducer(initialState, appendAnswer(1))
            expect(result.data).toHaveLength(2)
            expect(objectSize(result.data[0].answers)).toBe(0)
            expect(objectSize(result.data[1].answers)).toBe(1)
        })

    })

    describe('DELETE_ANSWER', () => {
        it('should delete answer by index', () => {
            const initialState = {
                data: [{
                    correct: 0,
                    no: 0,
                    question: "no 0",
                    answers: {},
                }, {
                    correct: 0,
                    no: 1,
                    question: "no 1",
                    answers: {
                        0: "answer 0",
                    } as Record<number, string>
                }],
                title: "",
                description: "",
            }
            const result = reducer(initialState, deleteAnswer(1, 0))
            expect(result.data).toHaveLength(2)
            expect(objectSize(result.data[0].answers)).toBe(0)
            expect(objectSize(result.data[1].answers)).toBe(0)
        })

        it('should update no of answers after delete', () => {
            const initialState = {
                data: [{
                    correct: 0,
                    no: 0,
                    question: "no 0",
                    answers: {},
                }, {
                    correct: 0,
                    no: 1,
                    question: "no 1",
                    answers: {
                        0: "answer 0",
                        1: "answer 1",
                        2: "answer 2",
                        3: "answer 3",
                        4: "answer 4",
                    } as Record<number, string>
                }],
                title: "",
                description: "",
            }
            const result = reducer(initialState, deleteAnswer(1, 3))
            expect(result.data).toHaveLength(2)
            expect(objectSize(result.data[0].answers)).toBe(0)
            expect(objectSize(result.data[1].answers)).toBe(4)
            expect(result.data[1].answers[0]).toEqual("answer 0")
            expect(result.data[1].answers[1]).toEqual("answer 1")
            expect(result.data[1].answers[2]).toEqual("answer 2")
            expect(result.data[1].answers[3]).toEqual("answer 4")
        })

        it('should remove correct value when answer is deleted', () => {
            const initialState = {
                data: [{
                    correct: 2,
                    no: 0,
                    question: "no 0",
                    answers: {
                        0: "answer 0",
                        1: "answer 1",
                        2: "answer 2",
                        3: "answer 3",
                        4: "answer 4",
                    } as Record<number, string>
                }],
                title: "",
                description: "",
            }
            const result = reducer(initialState, deleteAnswer(0, 2))
            expect(result.data).toHaveLength(1)
            expect(objectSize(result.data[0].answers)).toBe(4)
            expect(result.data[0].answers[0]).toEqual("answer 0")
            expect(result.data[0].answers[1]).toEqual("answer 1")
            expect(result.data[0].answers[2]).toEqual("answer 3")
            expect(result.data[0].answers[3]).toEqual("answer 4")
            expect(result.data[0].correct).toEqual(null)
        })
    })

    describe('UPDATE_ANSWER', () => {
        it('should update answer text', () => {
            const initialState = {
                data: [{
                    correct: 0,
                    no: 0,
                    question: "no 0",
                    answers: {},
                }, {
                    correct: 0,
                    no: 1,
                    question: "no 1",
                    answers: {
                        0: "answer 0",
                    } as Record<number, string>
                }],
                title: "",
                description: "",
            }
            const result = reducer(initialState, updateAnswer(1, 0, "updated answer 0"))
            expect(result.data).toHaveLength(2)
            expect(objectSize(result.data[0].answers)).toBe(0)
            expect(objectSize(result.data[1].answers)).toBe(1)
            expect(result.data[1].answers[0]).toEqual("updated answer 0")
        })
    })

    describe('UPDATE_CORRECT_ANSWER', () => {
        it('should update correct answer', () => {
            const initialState = {
                data: [{
                    correct: 0,
                    no: 0,
                    question: "no 0",
                    answers: {},
                }, {
                    correct: 0,
                    no: 1,
                    question: "no 1",
                    answers: {
                        0: "answer 0",
                    } as Record<number, string>
                }],
                title: "",
                description: "",
            }
            const result = reducer(initialState, updateCorrectAnswer(1, 0))
            expect(result.data).toHaveLength(2)
            expect(objectSize(result.data[0].answers)).toBe(0)
            expect(objectSize(result.data[1].answers)).toBe(1)
            expect(result.data[1].correct).toEqual(0)
        })
    })

    describe('UPDATE_QUIZ_TITLE', () => {
        it('should update quiz title', () => {
            const initialState = {
                data: [],
                title: "",
                description: "",
            }
            const result = reducer(initialState, updateQuizTitle("updated title"))
            expect(result.title).toEqual("updated title")
        })
    })

    describe('UPDATE_QUIZ_DESCRIPTION', () => {
        it('should update quiz description', () => {
            const initialState = {
                data: [],
                title: "",
                description: "",
            }
            const result = reducer(initialState, updateQuizDescription("updated description"))
            expect(result.description).toEqual("updated description")
        })
    })
})