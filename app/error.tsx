"use client";

import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    console.error(error);

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#09090B] px-6 text-white">
            <div className="max-w-md text-center">
                <h1 className="text-4xl font-bold">
                    Something went wrong
                </h1>

                <p className="mt-4 text-zinc-400">
                    An unexpected error occurred while loading this page.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <button
                        onClick={reset}
                        className="rounded-xl bg-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-600"
                    >
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-orange-500"
                    >
                        Home
                    </Link>
                </div>
            </div>
        </main>
    );
}