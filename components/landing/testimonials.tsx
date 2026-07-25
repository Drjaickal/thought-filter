const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Engineering Manager",
        company: "TechCorp",
        quote:
            "Thought Filter has completely changed how I communicate during difficult conversations. The AI keeps my message professional without losing my intent.",
    },
    {
        name: "David Chen",
        role: "Product Manager",
        company: "Nova Labs",
        quote:
            "Instead of rewriting emails for 15 minutes, I now get polished communication in seconds.",
    },
    {
        name: "Emily Rodriguez",
        role: "HR Director",
        company: "PeopleFirst",
        quote:
            "A fantastic productivity tool for professionals who want to sound confident, respectful and clear.",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-[#09090B] py-28">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">

                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                        Testimonials
                    </span>

                    <h2 className="mt-4 text-5xl font-black text-white">
                        Loved by professionals.
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
                        Teams use Thought Filter to communicate more clearly,
                        reduce misunderstandings and save time.
                    </p>

                </div>

                <div className="grid gap-8 lg:grid-cols-3">

                    {testimonials.map((testimonial) => (

                        <div
                            key={testimonial.name}
                            className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]"
                        >

                            <div className="mb-6 flex text-orange-500 text-xl">

                                ★★★★★

                            </div>

                            <p className="leading-8 text-zinc-300">

                                "{testimonial.quote}"

                            </p>

                            <div className="mt-8 border-t border-zinc-800 pt-6">

                                <h3 className="font-bold text-white">

                                    {testimonial.name}

                                </h3>

                                <p className="mt-1 text-sm text-zinc-500">

                                    {testimonial.role}

                                </p>

                                <p className="text-sm text-orange-400">

                                    {testimonial.company}

                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}