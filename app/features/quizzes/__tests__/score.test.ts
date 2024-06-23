import { describe, it, expect } from 'vitest';
import { calculateScore } from '../score';
import { quizContentSchema } from '~/templates/validation';

describe('calculateScore', () => {
    it('should calculate the score based on the provided answers', () => {
        const questions = {
            data: [
                { no: 1, correct: 0 },
                { no: 2, correct: 2 },
                { no: 3, correct: 3 },
                { no: 4, correct: 2 },
                { no: 5, correct: 1 },
            ],
        } as unknown as ReturnType<typeof quizContentSchema.parse>;
        const answers = { "1": "0", "2": "2", "3": "3", "4": "3", "5": "1" };

        const result = calculateScore(questions, answers);

        expect(result).toEqual({
            total: 5,
            correct: 4,
            incorrect: 1,
            score: 80,
        });
    });
});