"use client";

import { useEffect, useState } from "react";

type Rewrite = {
    id: string;
    rewrittenText: string;
    tone: string;
    intent: string | null;
    emotion: string | null;
    audience: string | null;
    toxicity: number | null;
    createdAt: string;
};

type Thought = {
    id: string;
    originalText: string;
    createdAt: string;
    rewrites: Rewrite[];
};

export default function DashboardPage() {
    const [text, setText] = useState("");
    const [tone, setTone] = useState("PROFESSIONAL");
    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState("");
    const [thoughts, setThoughts] = useState<Thought[]>([]);

    async function loadHistory() {
        try {
            const response = await fetch("/api/thoughts");

            if (!response.ok) {
                throw new Error("Failed to load history");
            }

            const data = await response.json();

            setThoughts(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadHistory();
    }, []);

    async function handleSubmit() {
        if (!text.trim()) return;

        try {
            setLoading(true);

            const response = await fetch("/api/thoughts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    originalText: text,
                    tone,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error ?? "Something went wrong");
            }

            setResult(data.rewrite.rewrittenText);

            setText("");

            await loadHistory();
        } catch (error) {
            console.error(error);

            alert(
                error instanceof Error
                    ? error.message
                    : "Unknown error"
            );
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(id: string) {
        const ok = window.confirm(
            "Delete this thought permanently?"
        );

        if (!ok) return;

        try {
            const response = await fetch(`/api/thoughts/${id}`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error);
            }

            setThoughts((prev) =>
                prev.filter((t) => t.id !== id)
            );
        } catch (error) {
            console.error(error);

            alert(
                error instanceof Error
                    ? error.message
                    : "Delete failed"
            );
        }
    }

    async function copy(text: string) {
        await navigator.clipboard.writeText(text);

        alert("Copied!");
    }

    return (
        <main className="mx-auto max-w-5xl p-8 space-y-8">

            <h1 className="text-4xl font-bold">
                Thought Filter
            </h1>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your thought..."
                className="h-40 w-full rounded-xl border p-4"
            />

            <div className="flex gap-4">

                <select
                    value={tone}
                    onChange={(e) =>
                        setTone(e.target.value)
                    }
                    className="rounded-lg border p-3"
                >
                    <option value="PROFESSIONAL">
                        Professional
                    </option>

                    <option value="CORPORATE">
                        Corporate
                    </option>

                    <option value="FRIENDLY">
                        Friendly
                    </option>

                    <option value="EXECUTIVE">
                        Executive
                    </option>
                </select>

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="rounded-lg bg-blue-600 px-6 py-3 text-white"
                >
                    {loading
                        ? "Rewriting..."
                        : "Rewrite"}
                </button>

            </div>

            {result && (

                <div className="rounded-xl border p-5">

                    <h2 className="mb-3 text-xl font-semibold">
                        Latest Rewrite
                    </h2>

                    <p>{result}</p>

                </div>

            )}

            <section className="space-y-5">

                <h2 className="text-3xl font-bold">
                    History
                </h2>

                {thoughts
                    .filter((t) => t.rewrites.length > 0)
                    .map((thought) => {

                        const rewrite =
                            thought.rewrites[0];

                        return (

                            <div
                                key={thought.id}
                                className="rounded-xl border p-5 shadow"
                            >

                                <p className="text-sm text-gray-500 mb-1">
                                    Original
                                </p>

                                <p className="mb-4">
                                    {thought.originalText}
                                </p>

                                <p className="text-sm text-gray-500 mb-1">
                                    Rewrite
                                </p>

                                <p className="mb-4">
                                    {rewrite.rewrittenText}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">

                                    <span className="rounded bg-gray-100 px-3 py-1 text-sm text-black">
                                        {rewrite.tone}
                                    </span>

                                    {rewrite.intent && (
                                        <span className="rounded bg-gray-100 px-3 py-1 text-sm text-black">
                                            {rewrite.intent}
                                        </span>
                                    )}

                                    {rewrite.emotion && (
                                        <span className="rounded bg-gray-100 px-3 py-1 text-sm text-black">
                                            {rewrite.emotion}
                                        </span>
                                    )}

                                    {rewrite.audience && (
                                        <span className="rounded bg-gray-100 px-3 py-1 text-sm text-black">
                                            {rewrite.audience}
                                        </span>
                                    )}

                                </div>

                                <div className="flex gap-3">

                                    <button
                                        onClick={() =>
                                            copy(
                                                rewrite.rewrittenText
                                            )
                                        }
                                        className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800"                                    >
                                        📋 Copy
                                    </button>

                                    <button
                                        onClick={() =>
                                            handleDelete(
                                                thought.id
                                            )
                                        }
                                        className="rounded-lg bg-red-600 px-4 py-2 text-white"
                                    >
                                        🗑 Delete
                                    </button>

                                </div>

                            </div>

                        );
                    })}

                {thoughts.filter(
                    (t) => t.rewrites.length > 0
                ).length === 0 && (
                        <div className="rounded-xl border p-8 text-center text-gray-500">
                            No rewrites yet.
                        </div>
                    )}

            </section>

        </main>
    );
}