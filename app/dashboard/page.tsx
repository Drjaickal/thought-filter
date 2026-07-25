"use client";

import { useState } from "react";

export default function DashboardPage() {
    const [text, setText] = useState("");
    const [tone, setTone] = useState("PROFESSIONAL");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

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
        } catch (error) {
            console.error(error);
            alert(error instanceof Error ? error.message : "Unknown error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="mx-auto max-w-4xl p-8 space-y-6">
            <h1 className="text-3xl font-bold">
                Thought Filter
            </h1>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your thought..."
                className="h-40 w-full rounded-lg border p-4"
            />

            <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="rounded-lg border p-3"
            >
                <option value="PROFESSIONAL">Professional</option>
                <option value="CORPORATE">Corporate</option>
                <option value="FRIENDLY">Friendly</option>
                <option value="EXECUTIVE">Executive</option>
            </select>

            <button
                onClick={handleSubmit}
                disabled={loading}
                className="rounded-lg bg-blue-600 px-6 py-3 text-white disabled:opacity-50"
            >
                {loading ? "Rewriting..." : "Rewrite"}
            </button>

            {result && (
                <div className="rounded-lg border p-4">
                    <h2 className="mb-2 font-semibold">
                        AI Rewrite
                    </h2>

                    <p>{result}</p>
                </div>
            )}
        </main>
    );
}