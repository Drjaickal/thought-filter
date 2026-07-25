import Link from "next/link";

export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-background py-28 transition-colors duration-300">
            <div className="absolute inset-0 pointer-events-none opacity-80">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--glass),transparent_60%)]" />
            </div>

            <div className="relative mx-auto max-w-5xl px-6">
                <div className="glass rounded-[32px] p-12 text-center">
                    <span className="bg-primary/10 text-primary border-border inline-flex rounded-full border px-4 py-2 text-sm font-medium">
                        🚀 Start communicating better today
                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-tight text-foreground md:text-6xl">
                        Your next message
                        <br />
                        deserves a better first impression.
                    </h2>

                    <p className="text-muted mx-auto mt-8 max-w-2xl text-lg leading-8">
                        Rewrite emotional, awkward and unprofessional thoughts into
                        confident communication using Gemini AI.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-5">
                        <Link
                            href="/dashboard"
                            className="bg-primary text-primary-foreground rounded-xl px-8 py-4 text-lg font-semibold transition hover:opacity-90 hover:shadow-glow"
                        >
                            Start Free →
                        </Link>

                        <a
                            href="https://github.com/Drjaickal/thought-filter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-border text-foreground rounded-xl border px-8 py-4 text-lg transition hover:border-primary hover:text-primary"
                        >
                            View Source
                        </a>
                    </div>

                    <div className="text-muted mt-10 flex flex-wrap justify-center gap-8 text-sm">
                        <span>✅ Free Forever MVP</span>
                        <span>⚡ Powered by Gemini AI</span>
                        <span>🔒 Secure Authentication</span>
                    </div>
                </div>
            </div>
        </section>
    );
}