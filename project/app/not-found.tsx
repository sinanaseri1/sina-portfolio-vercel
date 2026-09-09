import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
        404
      </p>
      <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="max-w-md text-pretty text-lg text-muted-foreground">
        The link may be out of date, or the page has since been removed.
      </p>
      <Button asChild size="lg" className="group h-12 gap-2 rounded-full px-6">
        <Link href="/">
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to home
        </Link>
      </Button>
    </div>
  );
}
