"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

type DashboardHeaderProps = {
    totalThoughts: number;
};

export default function DashboardHeader({
    totalThoughts,
}: DashboardHeaderProps) {
    return (
        <header className="sticky top-0 z-40 border-b border-zinc-800 bg-[#09090B]/90 backdrop-blur-xl">

            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                <div className="flex items-center gap-4">

                    <Link
                        href="/"
                        className="text-2xl font-black tracking-tight text-white"
                    >
                        Thought
                        <span className="text-orange-500">
                            {" "}Filter
                        </span>
                    </Link>

                    <div className="hidden h-8 w-px bg-zinc-700 md:block" />

                    <div className="hidden md:block">

                        <h1 className="text-lg font-semibold text-white">
                            Dashboard
                        </h1>

                        <p className="text-sm text-zinc-400">
                            {totalThoughts} saved thought{totalThoughts !== 1 ? "s" : ""}
                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-4">

                    <Link
                        href="/"
                        className="hidden rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-orange-500 hover:text-orange-400 md:block"
                    >
                        Home
                    </Link>

                    <Link
                        href="/dashboard"
                        className="hidden rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600 md:block"
                    >
                        New Rewrite
                    </Link>

                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox:
                                    "h-10 w-10 ring-2 ring-orange-500/30",
                            },
                        }}
                    />

                </div>

            </div>

        </header>
    );
}