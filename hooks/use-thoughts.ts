"use client";

import { useCallback, useEffect, useState } from "react";

import type { Thought } from "@/types/thought";

const DEFAULT_TONE = "PROFESSIONAL";

export function useThoughts() {
    const [text, setText] = useState("");
    const [tone, setTone] = useState(DEFAULT_TONE);
    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState("");
    const [thoughts, setThoughts] = useState<Thought[]>([]);

    const loadHistory = useCallback(async () => {
        try {
            const response = await fetch("/api/thoughts", {
                cache: "no-store",
            });

            if (!response.ok) {
                throw new Error("Failed to load history.");
            }

            const data: Thought[] = await response.json();

            setThoughts(data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        async function init() {
            await loadHistory();
        }

        void init();
    }, [loadHistory]);

    const handleSubmit = useCallback(async () => {
        const originalText = text.trim();

        if (!originalText || loading) {
            return;
        }

        try {
            setLoading(true);

            const response = await fetch("/api/thoughts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    originalText,
                    tone,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error ?? "Something went wrong."
                );
            }

            setResult(data.rewrite.rewrittenText);

            setText("");

            await loadHistory();
        } catch (error) {
            console.error(error);

            alert(
                error instanceof Error
                    ? error.message
                    : "Unknown error."
            );
        } finally {
            setLoading(false);
        }
    }, [text, tone, loading, loadHistory]);

    const handleDelete = useCallback(async (id: string) => {
        const confirmed = window.confirm(
            "Delete this thought permanently?"
        );

        if (!confirmed) {
            return;
        }

        try {
            const response = await fetch(`/api/thoughts/${id}`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error ?? "Delete failed."
                );
            }

            setThoughts((prev) =>
                prev.filter((thought) => thought.id !== id)
            );
        } catch (error) {
            console.error(error);

            alert(
                error instanceof Error
                    ? error.message
                    : "Delete failed."
            );
        }
    }, []);

    const copy = useCallback(async (value: string) => {
        try {
            await navigator.clipboard.writeText(value);
            alert("Copied!");
        } catch (error) {
            console.error(error);
            alert("Failed to copy.");
        }
    }, []);

    const totalThoughts = thoughts.length;

    const totalRewrites = thoughts.reduce(
        (count, thought) => count + thought.rewrites.length,
        0
    );

    return {
        text,
        setText,

        tone,
        setTone,

        loading,

        result,

        thoughts,

        totalThoughts,

        totalRewrites,

        loadHistory,

        handleSubmit,

        handleDelete,

        copy,
    };
}