"use client";

import { Copy, Sparkles } from "lucide-react";

type LatestRewriteProps = {
    result: string;
    onCopy: (text: string) => void;
};

export default function LatestRewrite({
    result,
    onCopy,
}: LatestRewriteProps) {
    if (!result) return null;

    return (
        <section className="mx-auto mt-8 max-w-7xl">
            <div className="glass rounded-3xl p-8 shadow-glow transition-all duration-300">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-primary/10 p-3">
                            <Sparkles className="h-6 w-6 text-primary" />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-foreground">
                                Latest Rewrite
                            </h2>

                            <p className="text-sm text-muted">
                                Your most recent AI-generated response
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        aria-label="Copy rewritten text"
                        onClick={() => onCopy(result)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary/5 hover:text-primary active:scale-95"
                    >
                        <Copy className="h-4 w-4" />
                        Copy
                    </button>
                </div>

                <div className="rounded-2xl border border-border bg-background p-6">
                    <p className="whitespace-pre-wrap break-words text-foreground leading-8">
                        {result}
                    </p>
                </div>
            </div>
        </section>
    );
}