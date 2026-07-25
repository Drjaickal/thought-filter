import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#09090B] px-6 text-white">
            <div className="text-center">
                <h1 className="text-8xl font-black text-orange-500">
                    404
                </h1>

                <h2 className="mt-6 text-3xl font-bold">
                    Page Not Found
                </h2>

                <p className="mt-4 text-zinc-400">
                    {"We're sorry, this page doesn't exist."}
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-600"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}