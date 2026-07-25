const steps = [
    {
        number: "01",
        title: "Write Your Thought",
        description:
            "Type exactly what you're thinking. No need to filter your emotions.",
        emoji: "✍️",
    },
    {
        number: "02",
        title: "AI Understands Context",
        description:
            "Gemini AI analyzes your intent, emotion and communication style before rewriting.",
        emoji: "🧠",
    },
    {
        number: "03",
        title: "Receive Professional Rewrite",
        description:
            "Get a respectful, confident and professional version while preserving your original message.",
        emoji: "✨",
    },
    {
        number: "04",
        title: "Copy & Send",
        description:
            "Copy the rewritten message with one click and send it anywhere.",
        emoji: "🚀",
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-background py-28 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-20 text-center">
                    <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em]">
                        How It Works
                    </span>

                    <h2 className="mt-4 text-5xl font-black text-foreground">
                        Four simple steps.
                    </h2>

                    <p className="text-muted mx-auto mt-6 max-w-3xl text-lg leading-8">
                        Thought Filter helps you communicate clearly in seconds without
                        changing your original intent.
                    </p>
                </div>

                <div className="relative">
                    <div
                        className="
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-primary
              via-primary/40
              to-transparent
              lg:block
            "
                    />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className={`flex flex-col gap-8 lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="flex-1">
                                    <div
                                        className="
                      glass
                      rounded-3xl
                      p-8
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-primary
                      hover:shadow-glow
                    "
                                    >
                                        <div className="mb-6 flex items-center justify-between">
                                            <div
                                                className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          bg-primary/10
                          text-3xl
                        "
                                            >
                                                {step.emoji}
                                            </div>

                                            <span className="text-5xl font-black text-muted">
                                                {step.number}
                                            </span>
                                        </div>

                                        <h3 className="mb-4 text-3xl font-bold text-foreground">
                                            {step.title}
                                        </h3>

                                        <p className="text-muted leading-8">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="hidden flex-1 lg:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}