"use client";

import DashboardHeader from "@/components/dashboard/dashboard-header";
import DashboardStats from "@/components/dashboard/dashboard-stats";
import HistoryList from "@/components/dashboard/history-list";
import LatestRewrite from "@/components/dashboard/latest-rewrite";
import RewriteForm from "@/components/dashboard/rewrite-form";

import { useThoughts } from "@/hooks/use-thoughts";

export default function DashboardPage() {
    const {
        text,
        setText,
        tone,
        setTone,
        loading,
        historyLoading,
        result,
        thoughts,
        totalThoughts,
        totalRewrites,
        handleSubmit,
        handleDelete,
        copy,
    } = useThoughts();

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6 py-10">
                <DashboardHeader totalThoughts={totalThoughts} />

                <DashboardStats
                    totalThoughts={totalThoughts}
                    totalRewrites={totalRewrites}
                />

                <RewriteForm
                    text={text}
                    tone={tone}
                    loading={loading}
                    onTextChange={setText}
                    onToneChange={setTone}
                    onSubmit={handleSubmit}
                />

                <LatestRewrite
                    result={result}
                    onCopy={copy}
                />

                <HistoryList
                    thoughts={thoughts}
                    loading={historyLoading}
                    onCopy={copy}
                    onDelete={handleDelete}
                />
            </div>
        </main>
    );
}