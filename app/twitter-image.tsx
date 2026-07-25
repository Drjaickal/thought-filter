import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
    width: 1200,
    height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
                        fontSize: 70,
                        fontWeight: 800,
                    }}
                >
                    Thought
                    <span style={{ color: "#F97316" }}> Filter</span>
                </div>

                <div
                    style={{
                        marginTop: 24,
                        fontSize: 30,
                        color: "#A1A1AA",
                    }}
                >
                    AI Communication Intelligence
                </div>
            </div>
        ),
        size
    );
}