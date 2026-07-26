import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-6">
            <div className="glass w-full max-w-xl rounded-3xl p-10 text-center shadow-glow">
                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                    <SearchX className="h-12 w-12 text-primary" />
                </div>

                <h1 className="text-7xl font-black text-primary">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold text-foreground">
                    Page Not Found
                </h2>

                <p className="mt-4 text-muted">
                    {"The page you're looking for doesn't exist, has been moved, or the URL may be incorrect."}
                </p>

                <Link
                    href="/"
                    className="btn-primary mt-8 inline-flex items-center gap-2"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>
            </div>
        </main>
    );
}