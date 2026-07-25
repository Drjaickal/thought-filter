"use client";

type RewriteFormProps = {
    text: string;
    tone: string;
    loading: boolean;
    onTextChange: (value: string) => void;
    onToneChange: (value: string) => void;
    onSubmit: () => void;
};

const tones = [
    {
        value: "PROFESSIONAL",
        label: "Professional",
    },
    {
        value: "CORPORATE",
        label: "Corporate",
    },
    {
        value: "FRIENDLY",
        label: "Friendly",
    },
    {
        value: "EXECUTIVE",
        label: "Executive",
    },
];

export default function RewriteForm({
    text,
    tone,
    loading,
    onTextChange,
    onToneChange,
    onSubmit,
}: RewriteFormProps) {
    return (
        <section className="mx-auto mt-8 max-w-7xl">

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-lg">

                <div className="mb-8">

                    <h2 className="text-3xl font-black text-white">
                        Rewrite Your Thought
                    </h2>

                    <p className="mt-2 text-zinc-400">
                        Transform emotional or unclear thoughts into
                        confident, professional communication using AI.
                    </p>

                </div>

                <textarea
                    value={text}
                    onChange={(e) => onTextChange(e.target.value)}
                    placeholder="Type your thought here..."
                    className="h-48 w-full resize-none rounded-2xl border border-zinc-700 bg-[#09090B] p-5 text-white placeholder:text-zinc-500 outline-none transition focus:border-orange-500"
                />

                <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <div className="flex items-center gap-3">

                        <label className="text-sm font-medium text-zinc-400">
                            Tone
                        </label>

                        <select
                            value={tone}
                            onChange={(e) => onToneChange(e.target.value)}
                            className="rounded-xl border border-zinc-700 bg-[#09090B] px-4 py-3 text-white outline-none transition focus:border-orange-500"
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
                        className="rounded-xl bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "Rewriting..." : "✨ Rewrite Thought"}
                    </button>

                </div>

            </div>

        </section>
    );
}