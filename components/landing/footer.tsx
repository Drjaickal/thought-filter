import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-[#09090B]">

            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">

                <div>

                    <h3 className="text-2xl font-black text-white">

                        Thought
                        <span className="text-orange-500">
                            {" "}Filter
                        </span>

                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-7 text-zinc-500">

                        AI-powered communication intelligence platform
                        that helps professionals express themselves
                        clearly and confidently.

                    </p>

                </div>

                <div className="flex flex-wrap gap-8 text-sm">

                    <Link
                        href="/dashboard"
                        className="text-zinc-400 transition hover:text-orange-400"
                    >
                        Dashboard
                    </Link>

                    <a
                        href="https://github.com/Drjaickal/thought-filter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition hover:text-orange-400"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://ai.google.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition hover:text-orange-400"
                    >
                        Gemini AI
                    </a>

                </div>

            </div>

            <div className="border-t border-zinc-800">

                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-zinc-600 md:flex-row">

                    <p>
                        © {new Date().getFullYear()} Thought Filter.
                        All rights reserved.
                    </p>

                    <p>
                        Built with ❤️ using Next.js, Prisma,
                        Clerk & Gemini AI.
                    </p>

                </div>

            </div>

        </footer>
    );
}