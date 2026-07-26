"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import type { Thought } from "@/types/thought";

import { Copy, Trash2 } from "lucide-react";

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
        <article className="glass rounded-3xl border border-border p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-glow">
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
                        <p className="whitespace-pre-wrap break-words text-foreground">
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
                        type="button"
                        onClick={() => onCopy(rewrite.rewrittenText)}
                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2 font-medium text-foreground transition-all duration-200 hover:border-primary hover:text-primary active:scale-95"
                        aria-label="Copy rewritten text"
                    >
                        <Copy className="h-4 w-4" />
                        Copy
                    </button>

                    <AlertDialog>
                        <AlertDialogTrigger
                            render={
                                <Button
                                    variant="destructive"
                                    className="rounded-xl"
                                />
                            }
                        >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                        </AlertDialogTrigger>

                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Delete this thought?
                                </AlertDialogTitle>

                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently remove
                                    the thought and its rewrite history.
                                </AlertDialogDescription>
                            </AlertDialogHeader>

                            <AlertDialogFooter>
                                <AlertDialogCancel>
                                    Cancel
                                </AlertDialogCancel>

                                <AlertDialogAction
                                    variant="destructive"
                                    onClick={() => onDelete(thought.id)}
                                >
                                    Delete
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
        </article>
    );
}