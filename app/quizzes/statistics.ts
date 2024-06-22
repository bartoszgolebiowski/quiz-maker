import { calculateScore } from "./score";

const PERCENTAGE = 10;

export const convertStatistics = (results: ReturnType<typeof calculateScore>[]) => {
    const average = results.reduce((acc, result) => acc + result.correct, 0) / results.length
    const median = results[Math.floor(results.length / 2)].correct

    return {
        average: (average * PERCENTAGE).toFixed(2),
        median: (median * PERCENTAGE).toFixed(2),
    }
}

