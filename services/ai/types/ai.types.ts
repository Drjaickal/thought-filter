import { RewriteTone } from "@prisma/client";

export interface RewriteRequest {
    text: string;
    tone: RewriteTone;
}

export interface RewriteResult {
    rewrittenText: string;
    intent: string;
    emotion: string;
    audience: string;
    toxicity: number;

    model: string;
    promptVersion: string;
}