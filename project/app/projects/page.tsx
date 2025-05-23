import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Website Template For a Fitness App",
    description:
      "Developed a responsive and user-friendly website for a client's fitness app. Built with a focus on performance, modern UI, and seamless user experience.",
    image: "pulsefit.png",
    technologies: [
      "JavaScript",
      "HTML5",
      "Tailwind CSS",
      "Next.js",
    ],
    demoUrl: "https://pulse-power-site.vercel.app/",
    githubUrl: "",
  },
  {
    title: "Social Media Site",
    description:
      "ChitChat is a real-time messaging application built with Next.js and Socket.IO that enables users to connect, search for friends, and engage in private or group chats. It features a responsive interface with dark mode, account management, and instant notifications for a seamless communication experience.",
    image: "chitchat.png",
    technologies: [
      "JavaScript",
      "HTML5",
      "Tailwind CSS",
      "Next.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    demoUrl: "https://capable-swan-50b68e.netlify.app/login",
    githubUrl: "https://github.com/sinanaseri1/chitchat-backend",
  },
  {
    title: "Social Media Site",
    description:
      "a social website using Next.js and Tailwind CSS, displaying social media posts (aka “social cards”)",
    image:
      "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ibb.co%2FySfvmkT%2Fmobile-Hand.png",
    technologies: ["JavaScript", "HTML5", "Tailwind CSS", "Next.js"],
    demoUrl: "https://week5project.vercel.app/",
    githubUrl: "https://github.com/sinanaseri1/week5project",
  },

  {
    title: "Revenge of a Samurai",
    description:
      "An immersive JavaScript game that follows a samurai's journey through feudal Japan. Features include dynamic combat mechanics, character progression, and authentic Japanese art style.",
    image: "samurai.png",
    technologies: ["JavaScript", "HTML5", "Tailwind CSS"],
    demoUrl: "https://sinanaseri1.github.io/week3-project/",
    githubUrl: "https://github.com/sinanaseri1/week3-project",
  },
  {
    title: "Quiz Website",
    description:
      "An interactive quiz platform with real-time scoring, multiple categories, and a responsive design. Supports both multiple choice and true/false questions.",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800&h=400",
    technologies: ["Tailwind CSS", "HTML5"],
    demoUrl: "https://sinanaseri1.github.io/week2-project/",
    githubUrl: "https://github.com/sinanaseri1/week2-project",
  },
  {
    title: "Table Tennis Hobby Site",
    description:
      "A comprehensive resource for table tennis enthusiasts featuring training tips, equipment reviews, and tournament schedules.",
    image:
      "https://images.unsplash.com/photo-1611251135345-18c56206b863?auto=format&fit=crop&q=80&w=800&h=400",
    technologies: ["HTML", "Tailwind CSS"],
    demoUrl: "https://sinanaseri1.github.io/week1-project/",
    githubUrl: "https://github.com/sinanaseri1/week1-project",
  },
  {
    title: "Weather Forecast App",
    description:
      "A sleek weather application providing real-time forecasts, hourly updates, and detailed weather information using the OpenWeather API.",
    image:
      "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&q=80&w=800&h=400",
    technologies: ["Next.js", "OpenWeather API"],
    demoUrl: "https://weather-app-six-kappa-71.vercel.app/",
    githubUrl: "https://github.com/hali-27/Weather-App",
  },
];

function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
}: (typeof projects)[0]) {
  return (
    <Card className="overflow-hidden flex flex-col">
      {/* Image container with overflow hidden */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            <Button asChild variant="default" className="flex-1">
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Globe className="h-4 w-4" />
                Live Demo
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="h-4 w-4" />
                Source Code
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function Projects() {
  return (
    <div className="container py-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground">
              A collection of my recent work and personal projects. Each project
              demonstrates different aspects of my technical expertise and
              problem-solving abilities.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
