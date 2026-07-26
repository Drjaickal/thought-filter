"use client";

import { Skeleton } from "@/components/ui/skeleton";
import type { Thought } from "@/types/thought";

import EmptyState from "./empty-state";
import HistoryCard from "./history-card";

type HistoryListProps = {
    thoughts: Thought[];
    loading: boolean;
    onCopy: (text: string) => void;
    onDelete: (id: string) => void;
};

export default function HistoryList({
    thoughts,
    loading,
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
                    <h2 className="text-3xl font-black text-foreground">
                        Rewrite History
                    </h2>

                    <p className="mt-2 text-muted">
                        View, copy or delete your previous AI rewrites.
                    </p>
                </div>

                <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    {loading
                        ? "Loading..."
                        : `${history.length} ${history.length === 1 ? "Rewrite" : "Rewrites"
                        }`}
                </span>
            </div>

            {loading ? (
                <div className="space-y-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="glass rounded-3xl p-6"
                        >
                            <Skeleton className="h-5 w-1/3" />
                            <Skeleton className="mt-4 h-4 w-full" />
                            <Skeleton className="mt-2 h-4 w-5/6" />
                            <Skeleton className="mt-6 h-10 w-40" />
                        </div>
                    ))}
                </div>
            ) : history.length === 0 ? (
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