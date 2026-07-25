import { RewriteResult } from "./types/ai.types";

export function parseGeminiResponse(text: string): RewriteResult {
    const cleaned = text
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

    let parsed: unknown;

    try {
        parsed = JSON.parse(cleaned);
    } catch {
        // Fallback: extract first JSON object if Gemini adds extra text
        const match = cleaned.match(/\{[\s\S]*\}/);

        if (!match) {
            throw new Error("Gemini returned invalid JSON.");
        }

        try {
            parsed = JSON.parse(match[0]);
        } catch {
            throw new Error("Gemini returned invalid JSON.");
        }
    }

    if (!parsed || typeof parsed !== "object") {
        throw new Error("Gemini response is invalid.");
    }

    const data = parsed as Partial<RewriteResult>;

    if (
        !data.rewrittenText ||
        !data.intent ||
        !data.emotion ||
        !data.audience ||
        typeof data.toxicity !== "number"
    ) {
        throw new Error("Gemini response is missing required fields.");
    }

    return {
        rewrittenText: data.rewrittenText,
        intent: data.intent,
        emotion: data.emotion,
        audience: data.audience,
        toxicity: data.toxicity,
        model: data.model ?? "gemini-3.5-flash-lite",
        promptVersion: data.promptVersion ?? "v1",
    };
}