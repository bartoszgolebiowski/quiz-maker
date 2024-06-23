
import { acceptSuggestion, appendAnswer, appendQuestion, appendSuggestions, changeQuestionOrder, deleteAnswer, deleteQuestion, deleteSuggestion, reducer, updateAnswer, updateCorrectAnswer, updateQuestionText, updateQuizDescription, updateQuizTitle } from '../reducer';
import { describe, it, expect } from 'vitest';

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
                suggestions: null,
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
                suggestions: null,
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
                suggestions: null,
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
                suggestions: null,
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
                suggestions: null,
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
                suggestions: null,
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
                suggestions: null,
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
                suggestions: null,
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
                suggestions: null,
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
                suggestions: null,
            }
            const result = reducer(initialState, updateQuizDescription("updated description"))
            expect(result.description).toEqual("updated description")
        })
    })

    describe('APPEND_SUGGESTIONS', () => {
        it('should append suggetsions', () => {
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
                suggestions: null,
                title: "",
                description: "",
            }
            const input = { answers: ['answer 0'], correct: 0, no: 0 }
            const result = reducer(initialState, appendSuggestions(input))
            expect(result.suggestions).toEqual(input)
        })
    })

    describe('ACCEPT_SUGGESTION', () => {
        it('should accept suggestion and update correct answer', () => {
            const initialState = {
                data: [{
                    correct: 0,
                    no: 0,
                    question: "no 0",
                    answers: {
                        0: "no 0",
                    },
                }],
                suggestions: {
                    answers: ['answer 0'],
                    correct: 0,
                    no: 0,
                },
                title: "",
                description: "",
            }
            const result = reducer(initialState, acceptSuggestion(0))
            expect(result.data).toHaveLength(1)
            expect(result.data[0].no).toEqual(0)
            expect(result.data[0].answers).toEqual({ 0: "no 0", 1: "answer 0" })
            expect(result.data[0].correct).toEqual(1)
            expect(result.suggestions).toEqual(null)
        })

        it('should accept suggestion and do not update correct answer if suggestion.correct is null', () => {
            const initialState = {
                data: [{
                    correct: 1,
                    no: 0,
                    question: "no 0",
                    answers: {
                        0: "no 0",
                        1: "no 1",
                    },
                }],
                suggestions: {
                    answers: ['answer 0'],
                    correct: null,
                    no: 0,
                },
                title: "",
                description: "",
            }
            const result = reducer(initialState, acceptSuggestion(0))
            expect(result.data).toHaveLength(1)
            expect(result.data[0].no).toEqual(0)
            expect(result.data[0].answers).toEqual({ 0: "no 0", 1: "no 1", 2: "answer 0" })
            expect(result.data[0].correct).toEqual(1)
            expect(result.suggestions).toEqual(null)
        })

        it('should skip accepting suggestion when index is out of snope', () => {
            const initialState = {
                data: [{
                    correct: 1,
                    no: 0,
                    question: "no 0",
                    answers: {
                        0: "no 0",
                        1: "no 1",
                    },
                }],
                suggestions: {
                    answers: ['answer 0'],
                    correct: 2,
                    no: 0,
                },
                title: "",
                description: "",
            }
            const result = reducer(initialState, acceptSuggestion(5))
            expect(result.data).toEqual(initialState.data)
            expect(result.suggestions).toEqual(initialState.suggestions)
        })

        it('should accept suggestion and update it accordingly and update answers, when index is after correct', () => {
            const initialState = {
                data: [{
                    correct: 1,
                    no: 0,
                    question: "no 0",
                    answers: {
                        0: "no 0",
                        1: "no 1",
                    },
                }, {
                    correct: 0,
                    no: 1,
                    question: "test 0",
                    answers: {
                        0: "test 0",
                        1: "test 1",
                    },
                }],
                suggestions: {
                    answers: ['answer 0', 'answer 1', 'answer 2'],
                    correct: 0,
                    no: 0,
                },
                title: "",
                description: "",
            }
            const result = reducer(initialState, acceptSuggestion(2))
            expect(result.data).toHaveLength(2)
            expect(result.data[0].no).toEqual(0)
            expect(result.data[1].no).toEqual(1)
            expect(result.data[0].answers).toEqual({ 0: "no 0", 1: "no 1", 2: "answer 2" })
            expect(result.data[1].answers).toEqual({ 0: "test 0", 1: "test 1" })
            expect(result.data[0].correct).toEqual(1)
            expect(result.data[1].correct).toEqual(0)
            expect(result.suggestions).toEqual({
                answers: ['answer 0', 'answer 1'],
                correct: 0,
                no: 0,
            })
        })

        it('should accept suggestion and update it accordingly and update answers when index is correct value', () => {
            const initialState = {
                data: [{
                    correct: 1,
                    no: 0,
                    question: "no 0",
                    answers: {
                        0: "no 0",
                        1: "no 1",
                    },
                }, {
                    correct: 0,
                    no: 1,
                    question: "test 0",
                    answers: {
                        0: "test 0",
                        1: "test 1",
                    },
                }],
                suggestions: {
                    answers: ['answer 0', 'answer 1', 'answer 2'],
                    correct: 1,
                    no: 0,
                },
                title: "",
                description: "",
            }
            const result = reducer(initialState, acceptSuggestion(1))
            expect(result.data).toHaveLength(2)
            expect(result.data[0].no).toEqual(0)
            expect(result.data[1].no).toEqual(1)
            expect(result.data[0].answers).toEqual({ 0: "no 0", 1: "no 1", 2: "answer 1" })
            expect(result.data[1].answers).toEqual({ 0: "test 0", 1: "test 1" })
            expect(result.data[0].correct).toEqual(2)
            expect(result.data[1].correct).toEqual(0)
            expect(result.suggestions).toEqual({
                answers: ['answer 0', 'answer 2'],
                correct: null,
                no: 0,
            })
        })

        it('should accept suggestion and update it accordingly and update answers when index is before correct', () => {
            const initialState = {
                data: [{
                    correct: 1,
                    no: 0,
                    question: "no 0",
                    answers: {
                        0: "no 0",
                        1: "no 1",
                    },
                }, {
                    correct: 0,
                    no: 1,
                    question: "test 0",
                    answers: {
                        0: "test 0",
                        1: "test 1",
                    },
                }],
                suggestions: {
                    answers: ['answer 0', 'answer 1', 'answer 2'],
                    correct: 2,
                    no: 0,
                },
                title: "",
                description: "",
            }
            const result = reducer(initialState, acceptSuggestion(0))
            expect(result.data).toHaveLength(2)
            expect(result.data[0].no).toEqual(0)
            expect(result.data[1].no).toEqual(1)
            expect(result.data[0].answers).toEqual({ 0: "no 0", 1: "no 1", 2: "answer 0" })
            expect(result.data[1].answers).toEqual({ 0: "test 0", 1: "test 1" })
            expect(result.data[0].correct).toEqual(1)
            expect(result.data[1].correct).toEqual(0)
            expect(result.suggestions).toEqual({
                answers: ['answer 1', 'answer 2'],
                correct: 1,
                no: 0,
            })
        })

        it('should not set correct after second accept suggestion', () => {
            const initialState = {
                data: [{
                    correct: null,
                    no: 0,
                    question: "no 0",
                    answers: {

                    },
                },],
                suggestions: {
                    "answers": [
                        "1804-1805",
                        "1814-1815",
                        "1823-1824",
                        "1799-1800",
                        "1830-1831"
                    ],
                    "correct": 1,
                    "no": 0
                },
                title: "",
                description: "",
            }
            let result = reducer(initialState, acceptSuggestion(0)) // 1804-1805
            expect(result.data[0].answers).toEqual({ 0: "1804-1805" })
            expect(result.data[0].correct).toEqual(null)
            expect(result.suggestions?.answers).toEqual(["1814-1815", "1823-1824", "1799-1800", "1830-1831"])
            result = reducer(result, acceptSuggestion(3)) //"1830-1831"
            expect(result.data[0].answers).toEqual({ 0: "1804-1805", 1: "1830-1831" })
            expect(result.data[0].correct).toEqual(null)
            expect(result.suggestions?.answers).toEqual(["1814-1815", "1823-1824", "1799-1800"])
            result = reducer(result, acceptSuggestion(2)) // "1799-1800"
            expect(result.data[0].answers).toEqual({ 0: "1804-1805", 1: "1830-1831", 2: "1799-1800" })
            expect(result.data[0].correct).toEqual(null)
            expect(result.suggestions?.answers).toEqual(["1814-1815", "1823-1824"])
            result = reducer(result, acceptSuggestion(1)) // "1823-1824"
            expect(result.data[0].answers).toEqual({ 0: "1804-1805", 1: "1830-1831", 2: "1799-1800", 3: "1823-1824" })
            expect(result.data[0].correct).toEqual(null)
            expect(result.suggestions?.answers).toEqual(["1814-1815"])
            result = reducer(result, acceptSuggestion(0)) // "1814-1815"
            expect(result.data[0].answers).toEqual({ 0: "1804-1805", 1: "1830-1831", 2: "1799-1800", 3: "1823-1824", 4: "1814-1815" })
            expect(result.data[0].correct).toEqual(4)
        })
    })

    describe('DELETE_SUGGESTION', () => {
        it("should do nothing when suggestion is null", () => {
            const initialState = {
                data: [{
                    correct: 0,
                    no: 0,
                    question: "no 0",
                    answers: {
                        0: "no 0",
                    },
                }],
                suggestions: null,
                title: "",
                description: "",
            }
            const result = reducer(initialState, deleteSuggestion(0))
            expect(result.data).toHaveLength(initialState.data.length)
            expect(result.data[0].no).toEqual(initialState.data[0].no)
            expect(result.data[0].answers).toEqual(initialState.data[0].answers)
            expect(result.data[0].correct).toEqual(initialState.data[0].correct)
            expect(result.suggestions).toEqual(null)

        })
        it("should delete suggestion and when no more suggestion available set suggestions to null", () => {
            const initialState = {
                data: [{
                    correct: 0,
                    no: 0,
                    question: "no 0",
                    answers: {
                        0: "no 0",
                    },
                }],
                suggestions: {
                    answers: ['answer 0'],
                    correct: 0,
                    no: 0,
                },
                title: "",
                description: "",
            }
            const result = reducer(initialState, deleteSuggestion(0))
            expect(result.data).toHaveLength(initialState.data.length)
            expect(result.data[0].no).toEqual(initialState.data[0].no)
            expect(result.data[0].answers).toEqual(initialState.data[0].answers)
            expect(result.data[0].correct).toEqual(initialState.data[0].correct)
            expect(result.suggestions).toEqual(null)
        })

        it("should delete suggestion and do update correct value when index is after correct", () => {
            const initialState = {
                data: [{
                    correct: 1,
                    no: 0,
                    question: "no 0",
                    answers: {
                        0: "no 0",
                        1: "no 1",
                    },
                }, {
                    correct: 0,
                    no: 1,
                    question: "test 0",
                    answers: {
                        0: "test 0",
                        1: "test 1",
                    },
                }],
                suggestions: {
                    answers: ['answer 0', 'answer 1', 'answer 2'],
                    correct: 0,
                    no: 0,
                },
                title: "",
                description: "",
            }
            const result = reducer(initialState, deleteSuggestion(2))
            expect(result.data).toHaveLength(initialState.data.length)
            expect(result.data[0].no).toEqual(initialState.data[0].no)
            expect(result.data[0].answers).toEqual(initialState.data[0].answers)
            expect(result.data[0].correct).toEqual(initialState.data[0].correct)
            expect(result.suggestions).toEqual({
                answers: ['answer 0', 'answer 1'],
                correct: 0,
                no: 0,
            })
        })
        it("should delete suggestion and set correct to null when index is correct value", () => {
            const initialState = {
                data: [{
                    correct: 1,
                    no: 0,
                    question: "no 0",
                    answers: {
                        0: "no 0",
                        1: "no 1",
                    },
                }, {
                    correct: 0,
                    no: 1,
                    question: "test 0",
                    answers: {
                        0: "test 0",
                        1: "test 1",
                    },
                }],
                suggestions: {
                    answers: ['answer 0', 'answer 1', 'answer 2'],
                    correct: 1,
                    no: 0,
                },
                title: "",
                description: "",
            }
            const result = reducer(initialState, deleteSuggestion(1))
            expect(result.data).toHaveLength(initialState.data.length)
            expect(result.data[0].no).toEqual(initialState.data[0].no)
            expect(result.data[0].answers).toEqual(initialState.data[0].answers)
            expect(result.data[0].correct).toEqual(initialState.data[0].correct)
            expect(result.suggestions).toEqual({
                answers: ['answer 0', 'answer 2'],
                correct: null,
                no: 0,
            })
        })
        it("should delete suggestion and do not update correct value when index is before correct", () => {
            const initialState = {
                data: [{
                    correct: 1,
                    no: 0,
                    question: "no 0",
                    answers: {
                        0: "no 0",
                        1: "no 1",
                    },
                }, {
                    correct: 0,
                    no: 1,
                    question: "test 0",
                    answers: {
                        0: "test 0",
                        1: "test 1",
                    },
                }],
                suggestions: {
                    answers: ['answer 0', 'answer 1', 'answer 2'],
                    correct: 2,
                    no: 0,
                },
                title: "",
                description: "",
            }
            const result = reducer(initialState, deleteSuggestion(0))
            expect(result.data).toHaveLength(initialState.data.length)
            expect(result.data[0].no).toEqual(initialState.data[0].no)
            expect(result.data[0].answers).toEqual(initialState.data[0].answers)
            expect(result.data[0].correct).toEqual(initialState.data[0].correct)
            expect(result.suggestions).toEqual({
                answers: ['answer 1', 'answer 2'],
                correct: 1,
                no: 0,
            })
        })
    })
})