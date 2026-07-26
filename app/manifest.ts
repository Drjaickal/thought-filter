import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Thought Filter",
        short_name: "Thought Filter",
        description:
            "Rewrite emotional thoughts into clear, confident, and professional communication using AI.",

        start_url: "/",
        scope: "/",

        display: "standalone",

        background_color: "#ffffff",
        theme_color: "#10b981",

        orientation: "portrait",

        lang: "en",

        categories: ["productivity", "business", "utilities"],

        icons: [
            {
                src: "/icon-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    };
}