import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/providers/theme-provider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://thought-filter.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "Thought Filter",

  title: {
    default: "Thought Filter",
    template: "%s | Thought Filter",
  },

  description:
    "Rewrite emotional thoughts into clear, confident, and professional communication using Google's Gemini AI.",

  keywords: [
    "AI",
    "Gemini AI",
    "Thought Filter",
    "AI communication",
    "message rewriter",
    "email rewriting",
    "professional communication",
    "communication assistant",
    "AI productivity",
    "text rewriting",
  ],

  authors: [
    {
      name: "Thought Filter",
    },
  ],

  creator: "Thought Filter",

  publisher: "Thought Filter",

  category: "technology",

  alternates: {
    canonical: "/",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Thought Filter",

    title: "Thought Filter",

    description:
      "Rewrite emotional thoughts into professional communication using AI.",

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Thought Filter",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Thought Filter",

    description:
      "AI-powered communication assistant that rewrites emotional thoughts into better messages.",

    images: ["/twitter-image"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Thought Filter",
  },
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
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            {children}

            <Toaster
              position="top-right"
              richColors
              closeButton
              expand={false}
              duration={3000}
              theme="system"
            />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}