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
        <section className="bg-background py-28 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em]">
                        Testimonials
                    </span>

                    <h2 className="mt-4 text-5xl font-black text-foreground">
                        Loved by professionals.
                    </h2>

                    <p className="text-muted mx-auto mt-6 max-w-2xl text-lg leading-8">
                        Teams use Thought Filter to communicate more clearly, reduce
                        misunderstandings and save time.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="
                glass
                rounded-3xl
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-primary
                hover:shadow-glow
              "
                        >
                            <div className="text-primary mb-6 text-xl">
                                ★★★★★
                            </div>

                            <p className="text-foreground leading-8">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            <div className="border-border mt-8 border-t pt-6">
                                <h3 className="font-bold text-foreground">
                                    {testimonial.name}
                                </h3>

                                <p className="text-muted mt-1 text-sm">
                                    {testimonial.role}
                                </p>

                                <p className="text-primary text-sm font-medium">
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