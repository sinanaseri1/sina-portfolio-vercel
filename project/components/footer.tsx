import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center gap-4 py-8 md:flex-row md:justify-between">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with Next.js and Tailwind CSS. Deployed on Vercel.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/sinanaseri1" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/sina-n-a78409143/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="mailto:naseri.sina@hotmail.com">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}