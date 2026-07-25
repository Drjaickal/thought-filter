"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

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
        <button
            type="button"
            aria-label="Toggle theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-glow backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-primary active:scale-95"
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
        </button>
    );
}