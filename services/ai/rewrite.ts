import { RewriteRequest, RewriteResult } from "./types/ai.types";
import { REWRITE_PROMPT } from "./prompts/rewrite.prompt";
import { gemini } from "./providers/gemini";
import { parseGeminiResponse } from "./parser";

/**
 * Updated model.
 * Older "gemini-2.5-flash" is unavailable for new projects.
 */
const MODEL = "gemini-3.5-flash-lite";

const PROMPT_VERSION = "v1";

export async function rewriteText(
    request: RewriteRequest
): Promise<RewriteResult> {
    const prompt = `
${REWRITE_PROMPT}

Tone:
${request.tone}

Message:
${request.text}
`;

    const response = await gemini.models.generateContent({
        model: MODEL,
        contents: prompt,
    });

    const text = response.text;

    if (!text) {
        throw new Error("Gemini returned an empty response.");
    }

    const parsed = parseGeminiResponse(text);

    return {
        rewrittenText: parsed.rewrittenText,
        intent: parsed.intent,
        emotion: parsed.emotion,
        audience: parsed.audience,
        toxicity: parsed.toxicity,
        model: MODEL,
        promptVersion: PROMPT_VERSION,
    };
}