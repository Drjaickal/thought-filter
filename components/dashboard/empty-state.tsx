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
        <section className="glass rounded-3xl border-2 border-dashed border-border px-8 py-16 text-center transition-all duration-300">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-10 w-10 text-primary" />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-foreground">
                {title}
            </h3>

            <p className="text-muted mx-auto mt-4 max-w-lg leading-7">
                {description}
            </p>

            <div className="mt-10 flex justify-center">
                <div className="rounded-xl border border-primary/20 bg-primary/10 px-6 py-3 text-sm font-medium text-primary">
                    ✨ Your AI-generated rewrites will appear here.
                </div>
            </div>
        </section>
    );
}