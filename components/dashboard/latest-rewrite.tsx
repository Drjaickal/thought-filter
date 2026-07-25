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
                <div className="mb-6 flex items-center justify-between">
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
                        onClick={() => onCopy(result)}
                        className="
              border-border
              bg-card
              text-foreground
              hover:border-primary
              flex
              items-center
              gap-2
              rounded-xl
              border
              px-4
              py-2
              text-sm
              font-medium
              transition-all
            "
                    >
                        <Copy className="h-4 w-4" />
                        Copy
                    </button>
                </div>

                <div className="border-border bg-background rounded-2xl border p-6">
                    <p className="text-foreground whitespace-pre-wrap leading-8">
                        {result}
                    </p>
                </div>
            </div>
        </section>
    );
}