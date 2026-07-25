import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thought-filter.vercel.app"),

  title: {
    default: "Thought Filter",
    template: "%s | Thought Filter",
  },

  description:
    "Rewrite your thoughts into clear, confident, and emotionally intelligent messages with AI. Improve communication instantly using Thought Filter.",

  keywords: [
    "AI",
    "Thought Filter",
    "AI communication",
    "AI rewriting",
    "Gemini AI",
    "message rewriter",
    "professional communication",
    "email rewriting",
    "text improvement",
    "communication intelligence",
  ],

  authors: [
    {
      name: "Thought Filter",
    },
  ],

  creator: "Thought Filter",

  publisher: "Thought Filter",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Thought Filter",
    description:
      "Rewrite your thoughts into clear, confident, and emotionally intelligent messages using AI.",
    url: "https://thought-filter.vercel.app",
    siteName: "Thought Filter",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Thought Filter",
    description:
      "AI-powered communication intelligence that rewrites your thoughts into better messages.",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}