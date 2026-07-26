"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

function useMounted() {
    return useSyncExternalStore(
        () => () => { },
        () => true,
        () => false
    );
}

export function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme();

    const mounted = useMounted();

    if (!mounted) {
        return (
            <div className="h-10 w-10 rounded-full border border-border bg-card" />
        );
    }

    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const isDark = currentTheme === "dark";

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger
                    render={
                        <button
                            type="button"
                            aria-label="Toggle theme"
                            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-glow backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-primary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        />
                    }
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                >
                    <Sun
                        className={`absolute h-5 w-5 text-primary transition-all duration-300 ${isDark
                                ? "rotate-90 scale-0 opacity-0"
                                : "rotate-0 scale-100 opacity-100"
                            }`}
                    />

                    <Moon
                        className={`absolute h-5 w-5 text-primary transition-all duration-300 ${isDark
                                ? "rotate-0 scale-100 opacity-100"
                                : "-rotate-90 scale-0 opacity-0"
                            }`}
                    />
                </TooltipTrigger>

                <TooltipContent>
                    {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}