"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/theme/theme-toggle";

type DashboardHeaderProps = {
    totalThoughts: number;
};

export default function DashboardHeader({
    totalThoughts,
}: DashboardHeaderProps) {
    return (
        <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl transition-colors duration-300">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <Link
                        href="/"
                        className="text-2xl font-black tracking-tight text-foreground"
                    >
                        Thought
                        <span className="text-primary"> Filter</span>
                    </Link>

                    <div className="bg-border hidden h-8 w-px md:block" />

                    <div className="hidden md:block">
                        <h1 className="text-lg font-semibold text-foreground">
                            Dashboard
                        </h1>

                        <p className="text-muted text-sm">
                            {totalThoughts} saved thought
                            {totalThoughts !== 1 ? "s" : ""}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    <Link
                        href="/"
                        className="border-border text-muted hover:border-primary hover:text-primary hidden rounded-lg border px-4 py-2 text-sm transition md:block"
                    >
                        Home
                    </Link>

                    <Link
                        href="/dashboard"
                        className="bg-primary text-primary-foreground hover:opacity-90 hidden rounded-lg px-4 py-2 text-sm font-medium transition md:block"
                    >
                        New Rewrite
                    </Link>

                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox:
                                    "h-10 w-10 ring-2 ring-primary/30 transition-all",
                            },
                        }}
                    />
                </div>
            </div>
        </header>
    );
}