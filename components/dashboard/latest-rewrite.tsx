"use client";

import { Copy, Sparkles } from "lucide-react";

type LatestRewriteProps = {
    rewrite: string;
    onCopy: (text: string) => void;
};

export default function LatestRewrite({
    rewrite,
    onCopy,
}: LatestRewriteProps) {
    if (!rewrite) return null;

    return (
        <section className="mx-auto mt-8 max-w-7xl">

            <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-zinc-900 p-8 shadow-[0_0_40px_rgba(249,115,22,0.12)]">

                <div className="mb-6 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <div className="rounded-xl bg-orange-500/20 p-3">

                            <Sparkles className="h-6 w-6 text-orange-500" />

                        </div>

                        <div>

                            <h2 className="text-2xl font-bold text-white">
                                Latest Rewrite
                            </h2>

                            <p className="text-sm text-zinc-400">
                                Your most recent AI-generated response
                            </p>

                        </div>

                    </div>

                    <button
                        onClick={() => onCopy(rewrite)}
                        className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:border-orange-500 hover:bg-zinc-800"
                    >
                        <Copy className="h-4 w-4" />
                        Copy
                    </button>

                </div>

                <div className="rounded-2xl border border-orange-500/20 bg-[#09090B] p-6">

                    <p className="whitespace-pre-wrap leading-8 text-zinc-200">
                        {rewrite}
                    </p>

                </div>

            </div>

        </section>
    );
}