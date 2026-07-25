"use client";

export default function DashboardPage() {
  async function handleClick() {
    const response = await fetch("/api/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        originalText: "My manager never listens to me.",
        tone: "PROFESSIONAL",
      }),
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Test Gemini
      </button>
    </div>
  );
}