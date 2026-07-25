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
        <section className="border-t border-border bg-background py-28 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em]">
                        Features
                    </span>

                    <h2 className="mt-4 text-5xl font-black text-foreground">
                        Built for modern communication.
                    </h2>

                    <p className="text-muted mx-auto mt-6 max-w-2xl text-lg leading-8">
                        Thought Filter helps professionals communicate with confidence
                        without losing their original intent.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="
                glass
                group
                rounded-3xl
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-primary
                hover:shadow-glow
              "
                        >
                            <div
                                className="
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary/10
                  text-3xl
                "
                            >
                                {feature.icon}
                            </div>

                            <h3 className="mb-4 text-2xl font-bold text-foreground">
                                {feature.title}
                            </h3>

                            <p className="text-muted leading-8">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}