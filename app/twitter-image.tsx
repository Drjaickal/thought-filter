import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Thought Filter";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background:
                        "linear-gradient(135deg, #111827 0%, #1f2937 45%, #f97316 100%)",
                    color: "white",
                    padding: "64px",
                }}
            >
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 800,
                        marginBottom: 24,
                    }}
                >
                    Thought Filter
                </div>

                <div
                    style={{
                        fontSize: 34,
                        textAlign: "center",
                        maxWidth: 900,
                        lineHeight: 1.4,
                        color: "#e5e7eb",
                    }}
                >
                    AI-powered communication assistant that transforms emotional thoughts
                    into clear, confident, and professional messages.
                </div>
            </div>
        ),
        size
    );
}