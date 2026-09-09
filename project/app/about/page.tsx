import { Badge } from "@/components/ui/badge";
import { Cloud, Database, GitBranch, Code2, Workflow } from "lucide-react";
import Image from "next/image";

const skillGroups = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Java",
      "Spring Boot",
      "C#",
      ".NET",
      "Dart",
      "Flutter",
      "MATLAB",
      "Tailwind CSS",
      "HTML5",
    ],
    span: "sm:col-span-2",
  },
  {
    title: "Data & Persistence",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "SQL"],
    span: "",
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    items: ["AWS EC2", "AWS S3", "AWS RDS", "Vercel", "Render", "Kubernetes"],
    span: "",
  },
  {
    title: "Tooling",
    icon: GitBranch,
    items: ["Git", "CI/CD", "JUnit", "Jest", "Docker"],
    span: "",
  },
  {
    title: "Ways of Working",
    icon: Workflow,
    items: [
      "Agile",
      "Test-Driven Development",
      "Code review",
      "Pair programming",
    ],
    span: "",
  },
];

const principles = [
  {
    heading: "Start from the constraint",
    body: "A grounding in the physical sciences leaves you with one reflex: find what actually limits the system before touching anything else. It applies just as well to a slow query as to a mechanics problem.",
  },
  {
    heading: "Make it legible",
    body: "Code is read far more often than it is written, and the same is true of an interface. Both should explain themselves without a footnote.",
  },
  {
    heading: "Ship, then measure",
    body: "Small releases with real feedback beat long stretches of speculative building. Test coverage and instrumentation are what make that safe.",
  },
];

export default function About() {
  return (
    <div>
      <section className="relative isolate overflow-hidden border-b">
        <div className="aurora-field absolute inset-0 -z-10" aria-hidden="true" />

        <div className="container flex flex-col items-start gap-10 py-20 md:flex-row md:items-center md:py-28">
          <div
            className="animate-fade-up shrink-0"
            style={{ animationDelay: "0ms" }}
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl border md:h-40 md:w-40">
              <Image
                src="/avatar.svg"
                alt=""
                fill
                priority
                sizes="160px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-2xl space-y-5">
            <p
              className="animate-fade-up font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
              style={{ animationDelay: "80ms" }}
            >
              About
            </p>
            <h1
              className="animate-fade-up text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
              style={{ animationDelay: "140ms" }}
            >
              Developer &amp; Science Specialist
            </h1>
            <p
              className="animate-fade-up text-pretty text-lg leading-relaxed text-muted-foreground"
              style={{ animationDelay: "200ms" }}
            >
              Full-stack developer with a foundational background in the physical
              sciences and analytical modelling.
            </p>
            <p
              className="animate-fade-up text-pretty text-lg leading-relaxed text-muted-foreground"
              style={{ animationDelay: "260ms" }}
            >
              Specialising in modern web ecosystems, component-driven interfaces,
              and scalable backend architecture. My approach prioritises clean
              system design, type safety, and maintainable codebases across
              TypeScript, React, and server-side runtimes.
            </p>
            <p
              className="animate-fade-up text-pretty text-lg leading-relaxed text-muted-foreground"
              style={{ animationDelay: "320ms" }}
            >
              Outside of engineering, my focus centres on competitive athletics,
              continuous technical learning, and exploring complex systems.
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- principles */}
      <section className="container py-20 md:py-24">
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map(({ heading, body }, index) => (
            <article
              key={heading}
              className="tile animate-fade-up p-7"
              style={{ animationDelay: `${400 + index * 80}ms` }}
            >
              <span className="mb-4 block font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mb-2 text-lg font-semibold tracking-tight">
                {heading}
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="container">
        <hr className="hairline" />
      </div>

      {/* ------------------------------------------------------------- skills */}
      <section className="container py-20 md:py-24">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Toolkit
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Technical expertise
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, items, span }) => (
            <div
              key={title}
              className={`tile tile-interactive p-6 ${span}`}
            >
              <div className="mb-4 flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="font-semibold tracking-tight">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="rounded-md font-mono text-[11px] font-normal"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
