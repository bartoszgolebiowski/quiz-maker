import { calculateScore } from "./score";

export const convertStatistics = (results: ReturnType<typeof calculateScore>[]) => {
    if (results.length === 0) return { average: 0, median: 0 }

    const average = results.reduce((acc, result) => acc + result.score, 0) / results.length
    const median = results.sort((a, b) => a.score - b.score)[Math.floor(results.length / 2)].score

    return {
        average: average.toFixed(2),
        median: median.toFixed(2),
    }
}

