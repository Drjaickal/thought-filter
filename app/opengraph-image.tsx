import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Thought Filter";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
                        "linear-gradient(135deg, #0f172a 0%, #111827 45%, #10b981 100%)",
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
                        color: "#d1d5db",
                    }}
                >
                    Rewrite emotional thoughts into clear, confident, and professional
                    communication with AI.
                </div>
            </div>
        ),
        size
    );
}