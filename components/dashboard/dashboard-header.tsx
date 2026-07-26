"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Home, PenSquare } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";

type DashboardHeaderProps = {
    totalThoughts: number;
};

export default function DashboardHeader({
    totalThoughts,
}: DashboardHeaderProps) {
    return (
        <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl transition-colors">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <Link
                        href="/"
                        className="group text-2xl font-black tracking-tight"
                        aria-label="Thought Filter Home"
                    >
                        <span className="text-foreground transition-colors group-hover:text-primary">
                            Thought
                        </span>
                        <span className="text-primary"> Filter</span>
                    </Link>

                    <div className="hidden h-8 w-px bg-border md:block" />

                    <div className="hidden md:block">
                        <h1 className="text-lg font-semibold text-foreground">
                            Dashboard
                        </h1>

                        <p className="text-sm text-muted">
                            {totalThoughts} saved thought
                            {totalThoughts !== 1 ? "s" : ""}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    <Link
                        href="/"
                        className="hidden items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted transition-all hover:border-primary hover:text-primary md:inline-flex"
                    >
                        <Home className="h-4 w-4" />
                        Home
                    </Link>

                    <Link
                        href="/dashboard"
                        className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] md:inline-flex"
                    >
                        <PenSquare className="h-4 w-4" />
                        New Rewrite
                    </Link>

                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox:
                                    "h-10 w-10 ring-2 ring-primary/30 transition-all hover:ring-primary/60",
                            },
                        }}
                    />
                </div>
            </div>
        </header>
    );
}