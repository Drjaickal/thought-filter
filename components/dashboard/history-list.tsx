"use client";

import type { Thought } from "@/types/thought";

import EmptyState from "./empty-state";
import HistoryCard from "./history-card";

type HistoryListProps = {
    thoughts: Thought[];
    onCopy: (text: string) => void;
    onDelete: (id: string) => void;
};

export default function HistoryList({
    thoughts,
    onCopy,
    onDelete,
}: HistoryListProps) {
    const history = thoughts.filter(
        (thought) => thought.rewrites.length > 0
    );

    return (
        <section className="mx-auto mt-10 max-w-7xl">

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <h2 className="text-3xl font-black text-white">
                        Rewrite History
                    </h2>

                    <p className="mt-2 text-zinc-400">
                        View, copy or delete your previous AI rewrites.
                    </p>

                </div>

                <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
                    {history.length}{" "}
                    {history.length === 1 ? "Rewrite" : "Rewrites"}
                </span>

            </div>

            {history.length === 0 ? (
                <EmptyState />
            ) : (
                <div className="space-y-6">

                    {history.map((thought) => (
                        <HistoryCard
                            key={thought.id}
                            thought={thought}
                            onCopy={onCopy}
                            onDelete={onDelete}
                        />
                    ))}

                </div>
            )}

        </section>
    );
}