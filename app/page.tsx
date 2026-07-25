import CTA from "@/components/landing/cta";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import Pricing from "@/components/landing/pricing";
import Testimonials from "@/components/landing/testimonials";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white">

      {/* Navbar */}

      <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-[#09090B]/80 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="text-2xl font-black tracking-tight"
          >
            Thought
            <span className="text-orange-500">
              Filter
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">

            <a
              href="#features"
              className="transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="transition hover:text-white"
            >
              How It Works
            </a>

            <a
              href="#pricing"
              className="transition hover:text-white"
            >
              Pricing
            </a>

          </nav>

          <div className="flex items-center gap-3">

            <Link
              href="/sign-in"
              className="hidden rounded-lg border border-zinc-700 px-4 py-2 text-sm transition hover:border-orange-500 hover:text-orange-400 md:block"
            >
              Sign In
            </Link>

            <Link
              href="/dashboard"
              className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Get Started
            </Link>

          </div>

        </div>

      </header>

      {/* Hero */}

      <Hero />

      {/* Features */}

      <section id="features">
        <Features />
      </section>

      {/* How It Works */}

      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Testimonials */}

      <Testimonials />

      {/* Pricing */}

      <section id="pricing">
        <Pricing />
      </section>

      {/* CTA */}

      <CTA />

      {/* Footer */}

      <Footer />

    </main>
  );
}