import { ImageResponse } from "next/og";

export const runtime = "edge";

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
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#09090B",
                    color: "white",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        fontSize: 80,
                        fontWeight: 800,
                    }}
                >
                    Thought
                    <span style={{ color: "#F97316" }}> Filter</span>
                </div>

                <div
                    style={{
                        marginTop: 30,
                        fontSize: 34,
                        color: "#A1A1AA",
                    }}
                >
                    Rewrite your thoughts with AI
                </div>
            </div>
        ),
        size
    );
}