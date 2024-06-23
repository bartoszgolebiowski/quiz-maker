import OpenAI from "openai";
import { env } from "~/env";

export default new OpenAI({
    apiKey: env.OPEN_AI_API_KEY
});