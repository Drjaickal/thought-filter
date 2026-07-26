"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

import type { Thought } from "@/types/thought";

const DEFAULT_TONE = "PROFESSIONAL";

export function useThoughts() {
    const [text, setText] = useState("");
    const [tone, setTone] = useState(DEFAULT_TONE);

    // AI request loading
    const [loading, setLoading] = useState(false);

    // History loading
    const [historyLoading, setHistoryLoading] = useState(true);

    const [result, setResult] = useState("");
    const [thoughts, setThoughts] = useState<Thought[]>([]);

    const loadHistory = useCallback(async () => {
        try {
            setHistoryLoading(true);

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
            toast.error("Failed to load history.");
        } finally {
            setHistoryLoading(false);
        }
    }, []);

    useEffect(() => {
        const init = async () => {
            await loadHistory();
        };

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

            toast.success("Thought rewritten successfully!");

            await loadHistory();
        } catch (error) {
            console.error(error);

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Unknown error."
            );
        } finally {
            setLoading(false);
        }
    }, [text, tone, loading, loadHistory]);

    const handleDelete = useCallback(async (id: string) => {
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

            toast.success("Thought deleted successfully.");
        } catch (error) {
            console.error(error);

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Delete failed."
            );
        }
    }, []);

    const copy = useCallback(async (value: string) => {
        try {
            await navigator.clipboard.writeText(value);
            toast.success("Copied to clipboard!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to copy.");
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
        historyLoading,

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