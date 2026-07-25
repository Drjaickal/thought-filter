export type Rewrite = {
    id: string;
    rewrittenText: string;
    tone: string;
    intent: string | null;
    emotion: string | null;
    audience: string | null;
    toxicity: number | null;
    createdAt: string;
};

export type Thought = {
    id: string;
    originalText: string;
    createdAt: string;
    rewrites: Rewrite[];
};