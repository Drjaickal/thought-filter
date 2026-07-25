import { RewriteResult } from "./types/ai.types";

export function parseGeminiResponse(text: string): RewriteResult {
    const cleaned = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    let parsed: unknown;

    try {
        parsed = JSON.parse(cleaned);
    } catch {
        throw new Error("Gemini returned invalid JSON.");
    }

    if (
        !parsed ||
        typeof parsed !== "object" ||
        !("rewrittenText" in parsed) ||
        !("intent" in parsed) ||
        !("emotion" in parsed) ||
        !("audience" in parsed) ||
        !("toxicity" in parsed)
    ) {
        throw new Error("Gemini response is missing required fields.");
    }

    return parsed as RewriteResult;
}