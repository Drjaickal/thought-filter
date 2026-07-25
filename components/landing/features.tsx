const features = [
    {
        title: "AI-Powered Rewrite",
        description:
            "Transform emotional thoughts into professional, respectful communication using Gemini AI.",
        icon: "🤖",
    },
    {
        title: "Private & Secure",
        description:
            "Every rewrite belongs only to you. Authentication is handled securely with Clerk.",
        icon: "🔒",
    },
    {
        title: "Rewrite History",
        description:
            "Access, copy and manage all of your previous AI rewrites anytime.",
        icon: "📜",
    },
    {
        title: "Multiple Tones",
        description:
            "Professional, Corporate, Friendly and Executive communication styles.",
        icon: "✨",
    },
];

export default function Features() {
    return (
        <section className="border-t border-zinc-900 bg-[#09090B] py-28">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">

                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                        Features
                    </span>

                    <h2 className="mt-4 text-5xl font-black text-white">
                        Built for modern communication.
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
                        Thought Filter helps professionals communicate with
                        confidence without losing their original intent.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((feature) => (

                        <div
                            key={feature.title}
                            className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]"
                        >

                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-3xl">

                                {feature.icon}

                            </div>

                            <h3 className="mb-4 text-2xl font-bold text-white">

                                {feature.title}

                            </h3>

                            <p className="leading-8 text-zinc-400">

                                {feature.description}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}