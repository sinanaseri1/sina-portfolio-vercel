import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="container flex flex-col items-center gap-4 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Developer &amp; Science Specialist
        </p>

        {/* No social or email links by design — the contact form is the only route in. */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link
            href="/projects"
            className="transition-colors hover:text-foreground"
          >
            Work
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>

        <p className="font-mono text-xs text-muted-foreground/70">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
