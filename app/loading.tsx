import { Loader2, Sparkles } from "lucide-react";

export default function Loading() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-6">
            <div className="flex flex-col items-center gap-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10">
                    <Sparkles className="h-10 w-10 text-primary" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-foreground">
                        Thought Filter
                    </h1>

                    <p className="text-muted">
                        Preparing your experience...
                    </p>
                </div>

                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        </main>
    );
}