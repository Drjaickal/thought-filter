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
        <article className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 transition duration-300 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">

            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h3 className="text-lg font-bold text-white">
                        Thought Rewrite
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                        {new Date(thought.createdAt).toLocaleString()}
                    </p>

                </div>

                <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-400">
                    {rewrite.tone}
                </span>

            </div>

            <div className="space-y-6">

                <div>

                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        Original Thought
                    </p>

                    <div className="rounded-2xl border border-zinc-800 bg-[#09090B] p-4">

                        <p className="whitespace-pre-wrap text-zinc-300">
                            {thought.originalText}
                        </p>

                    </div>

                </div>

                <div>

                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-orange-400">
                        AI Rewrite
                    </p>

                    <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4">

                        <p className="whitespace-pre-wrap text-white">
                            {rewrite.rewrittenText}
                        </p>

                    </div>

                </div>

                <div className="flex flex-wrap gap-2">

                    {rewrite.intent && (
                        <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                            🎯 {rewrite.intent}
                        </span>
                    )}

                    {rewrite.emotion && (
                        <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                            ❤️ {rewrite.emotion}
                        </span>
                    )}

                    {rewrite.audience && (
                        <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                            👥 {rewrite.audience}
                        </span>
                    )}

                    {rewrite.toxicity !== null && (
                        <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                            ☣️ Toxicity: {rewrite.toxicity}
                        </span>
                    )}

                </div>

                <div className="flex flex-wrap gap-3">

                    <button
                        onClick={() => onCopy(rewrite.rewrittenText)}
                        className="rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-2 font-medium text-white transition hover:border-orange-500 hover:bg-zinc-700"
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