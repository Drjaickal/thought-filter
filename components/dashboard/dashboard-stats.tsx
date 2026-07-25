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
            color: "text-blue-400",
        },
        {
            title: "Rewrites",
            value: totalRewrites,
            icon: Sparkles,
            color: "text-orange-400",
        },
        {
            title: "AI Status",
            value: "Online",
            icon: Brain,
            color: "text-green-400",
        },
    ];

    return (
        <section className="mx-auto mt-8 grid max-w-7xl gap-6 md:grid-cols-3">

            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={stat.title}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition duration-300 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
                    >
                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-zinc-500">
                                    {stat.title}
                                </p>

                                <h3 className="mt-3 text-3xl font-black text-white">
                                    {stat.value}
                                </h3>

                            </div>

                            <div className="rounded-xl bg-zinc-800 p-4">
                                <Icon className={`h-7 w-7 ${stat.color}`} />
                            </div>

                        </div>

                    </div>
                );
            })}

        </section>
    );
}