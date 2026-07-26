"use client";

import { AlertTriangle } from "lucide-react";

type ErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function Error({
    error,
    reset,
}: ErrorProps) {
    console.error(error);

    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-6">
            <div className="glass w-full max-w-lg rounded-3xl p-10 text-center shadow-glow">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
                    <AlertTriangle className="h-10 w-10 text-destructive" />
                </div>

                <h1 className="text-3xl font-bold text-foreground">
                    Something went wrong
                </h1>

                <p className="mt-4 text-muted">
                    An unexpected error occurred while loading this page.
                    Please try again.
                </p>

                <button
                    onClick={reset}
                    className="btn-primary mt-8"
                >
                    Try Again
                </button>
            </div>
        </main>
    );
}