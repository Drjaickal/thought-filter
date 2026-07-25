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
        <section className="bg-[#09090B] py-28">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">

                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                        Pricing
                    </span>

                    <h2 className="mt-4 text-5xl font-black text-white">
                        Simple pricing.
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
                        Start free today. Upgrade when you need more power.
                    </p>

                </div>

                <div className="grid gap-8 lg:grid-cols-2">

                    {plans.map((plan) => (

                        <div
                            key={plan.name}
                            className={`rounded-3xl border p-10 transition duration-300 ${plan.featured
                                    ? "border-orange-500 bg-gradient-to-b from-orange-500/10 to-zinc-900 shadow-[0_0_60px_rgba(249,115,22,0.15)]"
                                    : "border-zinc-800 bg-zinc-900/60"
                                }`}
                        >

                            {plan.featured && (

                                <span className="mb-6 inline-flex rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">

                                    Coming Soon

                                </span>

                            )}

                            <h3 className="text-3xl font-black text-white">

                                {plan.name}

                            </h3>

                            <div className="mt-6 text-5xl font-black text-orange-500">

                                {plan.price}

                            </div>

                            <p className="mt-4 text-zinc-400">

                                {plan.description}

                            </p>

                            <ul className="mt-10 space-y-4">

                                {plan.features.map((feature) => (

                                    <li
                                        key={feature}
                                        className="flex items-center gap-3 text-zinc-300"
                                    >

                                        <span className="text-orange-500">

                                            ✓

                                        </span>

                                        {feature}

                                    </li>

                                ))}

                            </ul>

                            <div className="mt-12">

                                {plan.featured ? (

                                    <button
                                        disabled
                                        className="w-full cursor-not-allowed rounded-xl bg-zinc-800 py-4 font-semibold text-zinc-400"
                                    >

                                        {plan.button}

                                    </button>

                                ) : (

                                    <Link
                                        href="/dashboard"
                                        className="block w-full rounded-xl bg-orange-500 py-4 text-center font-semibold text-white transition hover:bg-orange-600"
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