import { Button } from "@/components/ui/button";
import { ArrowRight, Boxes, Gauge, Radio, Sparkles } from "lucide-react";
import Link from "next/link";

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Socket.IO",
  "AWS",
  "Java",
];

const highlights = [
  {
    icon: Boxes,
    title: "Full-stack delivery",
    body: "From schema design and API surface through to the last pixel of the interface.",
  },
  {
    icon: Radio,
    title: "Real-time systems",
    body: "Socket-driven messaging, presence and notifications that stay responsive under load.",
  },
  {
    icon: Gauge,
    title: "Performance minded",
    body: "Static rendering, tight bundles and layouts that hold up on a mid-range phone.",
  },
];

export default function Home() {
  return (
    <div>
      {/* ---------------------------------------------------------------- hero */}
      <section className="relative isolate overflow-hidden">
        <div className="aurora-field absolute inset-0 -z-10" aria-hidden="true" />
        <div className="grid-field absolute inset-0 -z-10" aria-hidden="true" />

        <div className="container flex flex-col items-center gap-7 py-24 text-center md:py-32 lg:py-40">
          <span
            className="inline-flex animate-fade-up items-center gap-2 rounded-full border bg-background/70 px-3.5 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Open to freelance &amp; collaboration
          </span>

          <h1
            className="max-w-4xl animate-fade-up text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Full-stack developer with a{" "}
            <span className="bg-gradient-to-br from-primary via-primary to-cyan-500 bg-clip-text text-transparent">
              scientist&rsquo;s
            </span>{" "}
            approach to building software.
          </h1>

          <p
            className="max-w-2xl animate-fade-up text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            A physics background turned into a long-standing habit of breaking
            hard problems into testable parts — then shipping the interface that
            makes them feel simple.
          </p>

          <div
            className="flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "240ms" }}
          >
            <Button asChild size="lg" className="group h-12 gap-2 rounded-full px-6">
              <Link href="/projects">
                View selected work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 gap-2 rounded-full px-6"
            >
              <Link href="/contact">
                <Sparkles className="h-4 w-4" />
                Start a conversation
              </Link>
            </Button>
          </div>
        </div>

        {/* Scrolling stack marquee */}
        <div className="relative overflow-hidden border-y bg-background/50 py-4 backdrop-blur">
          <div
            className="flex w-max animate-marquee gap-3 pr-3 hover:[animation-play-state:paused] motion-reduce:animate-none"
            aria-hidden="true"
          >
            {[...stack, ...stack].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="whitespace-nowrap rounded-full border bg-card px-4 py-1.5 font-mono text-xs text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
          <span className="sr-only">Core stack: {stack.join(", ")}.</span>
        </div>
      </section>

      {/* ------------------------------------------------------------ highlights */}
      <section className="container py-20 md:py-28">
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, body }, index) => (
            <article
              key={title}
              className="tile tile-interactive animate-fade-up p-7"
              style={{ animationDelay: `${320 + index * 80}ms` }}
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="mb-2 text-lg font-semibold tracking-tight">
                {title}
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------------- cta */}
      <section className="container pb-8">
        <div className="tile relative overflow-hidden px-8 py-14 text-center md:px-16 md:py-20">
          <div className="aurora-field absolute inset-0 opacity-80" aria-hidden="true" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Have something you want built?
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Send the details through the contact form and you&rsquo;ll get a
              considered reply, not a template.
            </p>
            <Button asChild size="lg" className="group h-12 gap-2 rounded-full px-6">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
