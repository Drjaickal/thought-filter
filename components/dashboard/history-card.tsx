"use client";

import type { Thought } from "@/types/thought";

type HistoryCardProps = {
    thought: Thought;
    onCopy: (text: string) => void;
    onDelete: (id: string) => void;
};

export default function HistoryCard({
    thought,
    onCopy,
    onDelete,
}: HistoryCardProps) {
    const rewrite = thought.rewrites[0];

    if (!rewrite) return null;

    return (
        <article className="glass rounded-3xl p-6 transition-all duration-300 hover:shadow-glow hover:border-primary/40">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-foreground">
                        Thought Rewrite
                    </h3>

                    <p className="mt-1 text-sm text-muted">
                        {new Date(thought.createdAt).toLocaleString()}
                    </p>
                </div>

                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {rewrite.tone}
                </span>
            </div>

            <div className="space-y-6">
                <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                        Original Thought
                    </p>

                    <div className="rounded-2xl border border-border bg-background p-4">
                        <p className="whitespace-pre-wrap text-foreground">
                            {thought.originalText}
                        </p>
                    </div>
                </div>

                <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                        AI Rewrite
                    </p>

                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                        <p className="whitespace-pre-wrap text-foreground">
                            {rewrite.rewrittenText}
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {rewrite.intent && (
                        <span className="rounded-full bg-card px-3 py-1 text-xs text-muted">
                            🎯 {rewrite.intent}
                        </span>
                    )}

                    {rewrite.emotion && (
                        <span className="rounded-full bg-card px-3 py-1 text-xs text-muted">
                            ❤️ {rewrite.emotion}
                        </span>
                    )}

                    {rewrite.audience && (
                        <span className="rounded-full bg-card px-3 py-1 text-xs text-muted">
                            👥 {rewrite.audience}
                        </span>
                    )}

                    {rewrite.toxicity !== null && (
                        <span className="rounded-full bg-card px-3 py-1 text-xs text-muted">
                            ☣️ Toxicity: {rewrite.toxicity}
                        </span>
                    )}
                </div>

                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={() => onCopy(rewrite.rewrittenText)}
                        className="rounded-xl border border-border bg-card px-5 py-2 font-medium text-foreground transition-all hover:border-primary hover:text-primary"
                    >
                        📋 Copy
                    </button>

                    <button
                        onClick={() => onDelete(thought.id)}
                        className="rounded-xl bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
                    >
                        🗑 Delete
                    </button>
                </div>
            </div>
        </article>
    );
}