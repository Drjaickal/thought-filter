import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    return (
        <main className="flex min-h-screen items-center justify-center">
            <h1 className="text-3xl font-bold">
                Welcome to your Dashboard 🚀
            </h1>
        </main>
    );
}