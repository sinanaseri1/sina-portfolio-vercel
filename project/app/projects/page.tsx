import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  /** Local screenshot in /public. Omitted projects fall back to a generated cover. */
  image?: string;
  technologies: string[];
  year: string;
  /** Feature the project across two columns in the bento grid. */
  featured?: boolean;
};

// Outbound links (source repositories and hosted demos) are intentionally
// omitted: the account handles behind them identify the author.
const projects: Project[] = [
  {
    id: "chitchat",
    title: "ChitChat — Real-time Messaging",
    summary: "Socket-driven chat with presence, search and group threads.",
    description:
      "A real-time messaging application built with Next.js and Socket.IO. Users can find contacts, hold private or group conversations, and manage their account. Includes instant delivery and notification handling, a full dark mode, and a layout that adapts from phone to desktop.",
    image: "/chitchat.png",
    technologies: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
    ],
    year: "2024",
    featured: true,
  },
  {
    id: "pulsefit",
    title: "Fitness App Marketing Site",
    summary: "A responsive product site built to a client brief.",
    description:
      "A marketing site for a fitness application, built for a client with an emphasis on load performance and a modern, high-contrast visual language. Fully responsive with an animated feature walkthrough.",
    image: "/pulsefit.png",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "HTML5"],
    year: "2024",
  },
  {
    id: "samurai",
    title: "Revenge of a Samurai",
    summary: "A browser game with combat mechanics and progression.",
    description:
      "An action game written in vanilla JavaScript on the Canvas API. Features frame-based combat, enemy AI, character progression and a hand-built pixel-art world.",
    image: "/samurai.png",
    technologies: ["JavaScript", "Canvas API", "HTML5", "Tailwind CSS"],
    year: "2023",
  },
  {
    id: "social-feed",
    title: "Social Card Feed",
    summary: "A component-driven feed interface.",
    description:
      "A social feed built with Next.js and Tailwind CSS, exploring reusable card composition, responsive masonry layout and skeleton loading states.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    year: "2023",
  },
  {
    id: "quiz",
    title: "Quiz Platform",
    summary: "Timed quizzes with live scoring across categories.",
    description:
      "An interactive quiz platform supporting multiple-choice and true/false formats, with real-time scoring, category selection and a results breakdown.",
    technologies: ["JavaScript", "Tailwind CSS", "HTML5"],
    year: "2023",
  },
  {
    id: "weather",
    title: "Weather Forecast App",
    summary: "Location forecasts against a third-party weather API.",
    description:
      "A weather client consuming the OpenWeather API, with current conditions, hourly and multi-day forecasts, geolocation lookup and cached responses to stay inside rate limits.",
    technologies: ["Next.js", "OpenWeather API", "Tailwind CSS"],
    year: "2023",
  },
];

/**
 * Decorative cover for projects without a screenshot. Purely visual — the
 * title is already rendered as a heading below, so this is hidden from
 * assistive technology rather than repeating it.
 */
function ProjectCover({ id }: { id: string }) {
  const gradients: Record<string, string> = {
    "social-feed": "from-violet-500 via-indigo-500 to-sky-400",
    quiz: "from-amber-400 via-orange-500 to-rose-500",
    weather: "from-sky-400 via-cyan-500 to-teal-400",
  };

  return (
    <div
      aria-hidden="true"
      className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${
        gradients[id] ?? "from-slate-500 via-slate-600 to-slate-800"
      }`}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.28) 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
        }}
      />
      <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/25 blur-2xl" />
      <div className="absolute -bottom-16 -left-8 h-40 w-40 rounded-full bg-black/20 blur-2xl" />
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { title, summary, description, image, technologies, year, featured } =
    project;

  return (
    <Card
      className={`tile tile-interactive group flex animate-fade-up flex-col p-0 ${
        featured ? "lg:col-span-2" : ""
      }`}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div
        className={`relative w-full overflow-hidden border-b bg-muted ${
          featured ? "h-56 lg:h-72" : "h-48"
        }`}
      >
        {image ? (
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            fill
            // The featured card sits above the fold and is the LCP element.
            priority={featured}
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <ProjectCover id={project.id} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h2 className="text-balance text-xl font-semibold tracking-tight">
            {title}
          </h2>
          <span className="mt-1 shrink-0 font-mono text-xs text-muted-foreground">
            {year}
          </span>
        </div>

        <p className="mb-2 font-medium text-foreground/80">{summary}</p>
        <p className="mb-6 flex-1 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="rounded-md font-mono text-[11px] font-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default function Projects() {
  return (
    <div>
      <section className="relative isolate overflow-hidden border-b">
        <div className="aurora-field absolute inset-0 -z-10" aria-hidden="true" />
        <div className="container max-w-3xl space-y-4 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Selected work
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Things I&rsquo;ve designed, built and shipped.
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            A cross-section of recent projects — client work, real-time
            applications and a few things built purely because they were
            interesting. Each one is described in full below; source links are
            available on request.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
