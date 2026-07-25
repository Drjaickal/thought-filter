import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background transition-colors duration-300">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">
                <div>
                    <h3 className="text-2xl font-black text-foreground">
                        Thought
                        <span className="text-primary"> Filter</span>
                    </h3>

                    <p className="text-muted mt-3 max-w-md text-sm leading-7">
                        AI-powered communication intelligence platform that helps
                        professionals express themselves clearly and confidently.
                    </p>
                </div>

                <div className="flex flex-wrap gap-8 text-sm">
                    <Link
                        href="/dashboard"
                        className="text-muted hover:text-primary transition-colors"
                    >
                        Dashboard
                    </Link>

                    <a
                        href="https://github.com/Drjaickal/thought-filter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-primary transition-colors"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://ai.google.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-primary transition-colors"
                    >
                        Gemini AI
                    </a>
                </div>
            </div>

            <div className="border-t border-border">
                <div className="text-muted mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm md:flex-row">
                    <p>
                        © {new Date().getFullYear()} Thought Filter. All rights reserved.
                    </p>

                    <p>
                        Built with ❤️ using Next.js, Prisma, Clerk & Gemini AI.
                    </p>
                </div>
            </div>
        </footer>
    );
}