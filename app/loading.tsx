export default function Loading() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#09090B]">
            <div className="flex flex-col items-center gap-6">
                <div className="h-14 w-14 animate-spin rounded-full border-4 border-zinc-700 border-t-orange-500" />

                <h2 className="text-xl font-semibold text-white">
                    Loading...
                </h2>

                <p className="text-zinc-400">
                    Preparing your experience.
                </p>
            </div>
        </main>
    );
}