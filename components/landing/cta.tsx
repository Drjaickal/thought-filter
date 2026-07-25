import Link from "next/link";

export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-[#09090B] py-28">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15),transparent_60%)]" />

            <div className="relative mx-auto max-w-5xl px-6">

                <div className="rounded-[32px] border border-orange-500/20 bg-zinc-900/70 p-12 text-center backdrop-blur">

                    <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
                        🚀 Start communicating better today
                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">

                        Your next message
                        <br />

                        deserves a better first impression.

                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">

                        Rewrite emotional, awkward and unprofessional thoughts
                        into confident communication using Gemini AI.

                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-5">

                        <Link
                            href="/dashboard"
                            className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(249,115,22,0.35)]"
                        >
                            Start Free →
                        </Link>

                        <a
                            href="https://github.com/Drjaickal/thought-filter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-zinc-700 px-8 py-4 text-lg text-white transition hover:border-orange-500 hover:text-orange-400"
                        >
                            View Source
                        </a>

                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-zinc-500">

                        <span>✅ Free Forever MVP</span>

                        <span>⚡ Powered by Gemini AI</span>

                        <span>🔒 Secure Authentication</span>

                    </div>

                </div>

            </div>

        </section>
    );
}