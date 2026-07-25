import Link from "next/link";

const plans = [
    {
        name: "Free",
        price: "₹0",
        description: "Perfect for getting started.",
        features: [
            "AI Thought Rewrite",
            "Rewrite History",
            "Copy to Clipboard",
            "Delete History",
            "Professional Tones",
        ],
        button: "Start Free",
        featured: false,
    },
    {
        name: "Pro",
        price: "Coming Soon",
        description: "Built for professionals & teams.",
        features: [
            "Unlimited Rewrites",
            "Priority AI Responses",
            "Premium Rewrite Modes",
            "Team Workspace",
            "Analytics Dashboard",
            "Export History",
            "API Access",
        ],
        button: "Coming Soon",
        featured: true,
    },
];

export default function Pricing() {
    return (
        <section className="bg-background py-28 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em]">
                        Pricing
                    </span>

                    <h2 className="mt-4 text-5xl font-black text-foreground">
                        Simple pricing.
                    </h2>

                    <p className="text-muted mx-auto mt-6 max-w-2xl text-lg">
                        Start free today. Upgrade when you need more power.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`glass rounded-3xl p-10 transition-all duration-300 hover:-translate-y-2 ${plan.featured
                                    ? "border-primary shadow-glow"
                                    : "hover:border-primary hover:shadow-glow"
                                }`}
                        >
                            {plan.featured && (
                                <span className="bg-primary text-primary-foreground mb-6 inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide">
                                    Coming Soon
                                </span>
                            )}

                            <h3 className="text-3xl font-black text-foreground">
                                {plan.name}
                            </h3>

                            <div className="text-primary mt-6 text-5xl font-black">
                                {plan.price}
                            </div>

                            <p className="text-muted mt-4">{plan.description}</p>

                            <ul className="mt-10 space-y-4">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="text-foreground flex items-center gap-3"
                                    >
                                        <span className="text-primary font-bold">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12">
                                {plan.featured ? (
                                    <button
                                        disabled
                                        className="bg-muted text-muted-foreground w-full cursor-not-allowed rounded-xl py-4 font-semibold"
                                    >
                                        {plan.button}
                                    </button>
                                ) : (
                                    <Link
                                        href="/dashboard"
                                        className="bg-primary text-primary-foreground hover:opacity-90 block w-full rounded-xl py-4 text-center font-semibold transition"
                                    >
                                        {plan.button}
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}