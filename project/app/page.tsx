"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="container">
      <motion.section
        initial="initial"
        animate="animate"
        variants={stagger}
        className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20"
      >
        <motion.div
          variants={fadeIn}
          className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center"
        >
          <motion.h1
            variants={fadeIn}
            className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
          >
            Software Engineer
            <span className="block text-primary">Full-Stack Developer</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="max-w-[750px] text-lg text-muted-foreground sm:text-xl"
          >
            Building elegant solutions to complex problems. Passionate about creating
            scalable applications and delivering exceptional user experiences.
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeIn}
          className="flex flex-col gap-4 min-[400px]:flex-row"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/projects">
              <Button size="lg" className="gap-2">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}