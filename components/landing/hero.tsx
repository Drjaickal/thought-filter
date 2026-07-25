import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-80">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--glass),transparent_45%)]" />
            </div>

            <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6">
                <div className="inline-flex w-fit items-center rounded-full border border-primary/30 bg-card px-4 py-2 text-sm text-primary">
                    ✨ AI Powered Communication Assistant
                </div>

                <h1 className="mt-8 max-w-5xl text-6xl font-black leading-tight tracking-tight text-foreground md:text-8xl">
                    Think
                    <span className="text-primary">
                        {" Don't let emotions..."}
                    </span>

                    <br />

                    Speak
                    <span className="text-primary">
                        {" Professionally."}
                    </span>
                </h1>

                <p className="mt-8 max-w-3xl text-xl leading-9 text-muted">
                    Thought Filter transforms emotional thoughts into
                    confident, respectful and professional communication
                    using Google&apos;s Gemini AI.
                </p>

                <div className="mt-12 flex flex-wrap gap-5">
                    <Link
                        href="/dashboard"
                        className="rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                        Start Free →
                    </Link>

                    <a
                        href="https://github.com/Drjaickal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-border px-8 py-4 text-lg text-foreground transition hover:border-primary hover:text-primary"
                    >
                        GitHub
                    </a>
                </div>

                <div className="glass mt-24 rounded-3xl border border-border p-8 backdrop-blur">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-primary text-sm uppercase tracking-widest">
                            Live Preview
                        </span>

                        <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs text-green-400">
                            AI ONLINE
                        </span>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <p className="mb-2 text-sm text-muted">
                                Original Thought
                            </p>

                            <div className="rounded-xl border border-border bg-background p-4 text-foreground">
                                My manager never listens to me.
                            </div>
                        </div>

                        <div>
                            <p className="text-primary mb-2 text-sm">
                                AI Rewrite
                            </p>

                            <div className="rounded-xl border border-border bg-card p-4 text-foreground">
                                I feel that my input and suggestions are not
                                being fully considered. I&apos;d appreciate the
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