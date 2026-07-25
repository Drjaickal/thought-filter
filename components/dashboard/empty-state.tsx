"use client";

import { Sparkles } from "lucide-react";

type EmptyStateProps = {
    title?: string;
    description?: string;
};

export default function EmptyState({
    title = "No rewrites yet",
    description = "Write your first thought and let AI transform it into professional communication.",
}: EmptyStateProps) {
    return (
        <section className="rounded-3xl border border-dashed border-zinc-700 bg-zinc-900/60 px-8 py-16 text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/10">

                <Sparkles className="h-10 w-10 text-orange-500" />

            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">
                {title}
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-zinc-400 leading-7">
                {description}
            </p>

            <div className="mt-10 flex justify-center">

                <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 px-6 py-3 text-sm font-medium text-orange-400">

                    ✨ Your AI-generated rewrites will appear here.

                </div>

            </div>

        </section>
    );
}