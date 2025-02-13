"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Subscript as Javascript,
  Database,
  Cloud,
  GitBranch,
  Code2,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = {
  programming: [
    "Java",
    "MATLAB",
    "JavaScript",
    "Node.js",
    "Next.js",
    "ReactJS",
    "JSX",
    "Tailwind CSS",
    "TypeScript",
    "C#",
    ".NET",
    "Dart",
    "HTML5",
  ],
  database: ["MySQL", "MongoDB", "SQL", "Excel"],
  cloud: ["AWS EC2", "AWS S3", "AWS RDS", "Render", "Supabase"],
  methodologies: ["Agile", "Test-Driven Development (TDD)"],
  tools: ["Spring Boot", "Kubernetes", "JUnit", "CI/CD", "Git", "Flutter"],
};


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const SkillSection = ({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: string[];
  icon: React.ElementType;
}) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={fadeIn}
  >
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="h-5 w-5" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item} variant="secondary">
            {item}
          </Badge>
        ))}
      </div>
    </Card>
  </motion.div>
);

export default function About() {
  return (
    <div className="container py-12">
      <div className="max-w-[850px] mx-auto">
        <div className="space-y-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden">
              <Image
                src="sinaheadshot.jpg"
                alt="Profile picture"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                About Me
              </h1>
              <p className="text-lg text-muted-foreground">
                I'm a software developer with a background in Physics from the
                University of Nottingham, where I first discovered my love for
                coding with MATLAB and Java. Over time, I moved into full-stack
                development, working with JavaScript, Next.js, Node.js, and
                MongoDB to build scalable web applications. I enjoy using modern
                tools like Firebase, Supabase, and Tailwind CSS to bring
                creative ideas to life. I even earned a regional table tennis
                championship title—a testament to the discipline and strategic
                thinking that I still apply to my work. When I'm not coding,
                you'll likely find me either at the gym or practicing table
                tennis in my spare time, always striving for balance between
                mind and body.
              </p>
            </div>
          </motion.div>

          <Separator className="my-8" />

          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-2xl font-semibold tracking-tight"
          >
            Technical Expertise
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2">
            <SkillSection
              title="Programming Languages & Frameworks"
              items={skills.programming}
              icon={Code2}
            />
            <SkillSection
              title="Database Management"
              items={skills.database}
              icon={Database}
            />
            <SkillSection
              title="Cloud Services"
              items={skills.cloud}
              icon={Cloud}
            />
            <SkillSection
              title="Development Tools"
              items={skills.tools}
              icon={GitBranch}
            />
            <SkillSection
              title="Development Methodologies"
              items={skills.methodologies}
              icon={Javascript}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
