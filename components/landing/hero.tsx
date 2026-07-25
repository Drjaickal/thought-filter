import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_45%)]" />

            <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6">

                <div className="mb-8 inline-flex w-fit items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">

                    ✨ AI Powered Communication Assistant

                </div>

                <h1 className="max-w-5xl text-6xl font-black leading-tight tracking-tight md:text-8xl">

                    Think
                    <span className="text-orange-500">
                        {" "}Emotionally.
                    </span>

                    <br />

                    Speak
                    <span className="text-orange-500">
                        {" "}Professionally.
                    </span>

                </h1>

                <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">

                    Thought Filter transforms emotional thoughts into
                    confident, respectful and professional communication
                    using Google's Gemini AI.

                </p>

                <div className="mt-12 flex flex-wrap gap-5">

                    <Link
                        href="/dashboard"
                        className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-600"
                    >
                        Start Free →
                    </Link>

                    <a
                        href="https://github.com"
                        target="_blank"
                        className="rounded-xl border border-zinc-700 px-8 py-4 text-lg transition hover:border-orange-500 hover:text-orange-400"
                    >
                        GitHub
                    </a>

                </div>

                <div className="mt-24 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur">

                    <div className="mb-4 flex items-center justify-between">

                        <span className="text-sm uppercase tracking-widest text-orange-400">

                            Live Preview

                        </span>

                        <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs text-green-400">

                            AI ONLINE

                        </span>

                    </div>

                    <div className="space-y-6">

                        <div>

                            <p className="mb-2 text-sm text-zinc-500">

                                Original Thought

                            </p>

                            <div className="rounded-xl border border-zinc-800 bg-black p-4 text-zinc-300">

                                My manager never listens to me.

                            </div>

                        </div>

                        <div>

                            <p className="mb-2 text-sm text-orange-400">

                                AI Rewrite

                            </p>

                            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-4 text-white">

                                I feel that my input and suggestions are not
                                being fully considered. I'd appreciate the
                                opportunity to discuss how we can improve our
                                communication and collaboration.

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}