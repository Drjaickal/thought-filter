"use client";

import { KeyboardEvent } from "react";
import { Loader2, Sparkles } from "lucide-react";

type RewriteFormProps = {
    text: string;
    tone: string;
    loading: boolean;
    onTextChange: (value: string) => void;
    onToneChange: (value: string) => void;
    onSubmit: () => void;
};

const MAX_CHARACTERS = 2000;

const tones = [
    { value: "PROFESSIONAL", label: "Professional" },
    { value: "CORPORATE", label: "Corporate" },
    { value: "FRIENDLY", label: "Friendly" },
    { value: "EXECUTIVE", label: "Executive" },
];

export default function RewriteForm({
    text,
    tone,
    loading,
    onTextChange,
    onToneChange,
    onSubmit,
}: RewriteFormProps) {
    function handleKeyDown(
        event: KeyboardEvent<HTMLTextAreaElement>
    ) {
        if (
            (event.ctrlKey || event.metaKey) &&
            event.key === "Enter" &&
            text.trim() &&
            !loading
        ) {
            event.preventDefault();
            onSubmit();
        }
    }

    return (
        <section className="mx-auto mt-8 max-w-7xl">
            <div className="glass rounded-3xl p-8 shadow-glow transition-all duration-300">
                <div className="mb-8">
                    <h2 className="text-3xl font-black text-foreground">
                        Rewrite Your Thought
                    </h2>

                    <p className="mt-2 text-muted">
                        Transform emotional or unclear thoughts into clear,
                        confident, and professional communication using AI.
                    </p>
                </div>

                <textarea
                    aria-label="Thought input"
                    value={text}
                    maxLength={MAX_CHARACTERS}
                    disabled={loading}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => onTextChange(e.target.value)}
                    placeholder="Describe your thought, email, message, or situation..."
                    className="input h-48 w-full resize-none rounded-2xl p-5 placeholder:text-muted disabled:opacity-60"
                />

                <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-muted">
                        Ctrl/Cmd + Enter to rewrite
                    </span>

                    <span
                        className={
                            text.length > MAX_CHARACTERS * 0.9
                                ? "font-medium text-primary"
                                : "text-muted"
                        }
                    >
                        {text.length}/{MAX_CHARACTERS}
                    </span>
                </div>

                <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                        <label
                            htmlFor="tone"
                            className="text-sm font-medium text-muted"
                        >
                            Tone
                        </label>

                        <select
                            id="tone"
                            aria-label="Select tone"
                            disabled={loading}
                            value={tone}
                            onChange={(e) => onToneChange(e.target.value)}
                            className="input rounded-xl px-4 py-3 disabled:opacity-60"
                        >
                            {tones.map((item) => (
                                <option
                                    key={item.value}
                                    value={item.value}
                                >
                                    {item.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        onClick={onSubmit}
                        disabled={loading || !text.trim()}
                        className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Rewriting...
                            </>
                        ) : (
                            <>
                                <Sparkles className="h-5 w-5" />
                                Rewrite Thought
                            </>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
}