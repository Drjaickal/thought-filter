"use client";

import { Brain, FileText, Sparkles } from "lucide-react";

type DashboardStatsProps = {
    totalThoughts: number;
    totalRewrites: number;
};

export default function DashboardStats({
    totalThoughts,
    totalRewrites,
}: DashboardStatsProps) {
    const stats = [
        {
            title: "Thoughts",
            value: totalThoughts,
            icon: FileText,
            color: "text-primary",
        },
        {
            title: "Rewrites",
            value: totalRewrites,
            icon: Sparkles,
            color: "text-primary",
        },
        {
            title: "AI Status",
            value: "Online",
            icon: Brain,
            color: "text-green-500 dark:text-green-400",
        },
    ];

    return (
        <section className="mx-auto mt-8 grid max-w-7xl gap-6 md:grid-cols-3">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <article
                        key={stat.title}
                        className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted">
                                    {stat.title}
                                </p>

                                <h3 className="mt-3 text-3xl font-black text-foreground">
                                    {stat.value}
                                </h3>
                            </div>

                            <div className="rounded-xl bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                                <Icon
                                    className={`h-7 w-7 transition-transform duration-300 group-hover:scale-110 ${stat.color}`}
                                />
                            </div>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}