import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    title: "Building Scalable Web Applications with Next.js",
    description: "Learn how to leverage Next.js features to build performant and scalable web applications. We'll cover SSR, ISR, and other optimization techniques.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=400",
    date: "2024-03-15",
    readTime: "8 min read",
    categories: ["Next.js", "Web Development", "Performance"],
    slug: "building-scalable-web-applications",
  },
  {
    title: "Advanced TypeScript Patterns for React Applications",
    description: "Explore advanced TypeScript patterns and best practices for building type-safe React applications. From generic components to custom type utilities.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&h=400",
    date: "2024-03-10",
    readTime: "10 min read",
    categories: ["TypeScript", "React", "Best Practices"],
    slug: "advanced-typescript-patterns",
  },
  {
    title: "Implementing CI/CD Pipelines for Modern Web Apps",
    description: "A comprehensive guide to setting up continuous integration and deployment pipelines for web applications using GitHub Actions and Vercel.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800&h=400",
    date: "2024-03-05",
    readTime: "12 min read",
    categories: ["DevOps", "CI/CD", "GitHub Actions"],
    slug: "implementing-cicd-pipelines",
  },
];

function BlogCard({
  title,
  description,
  image,
  date,
  readTime,
  categories,
  slug,
}: (typeof posts)[0]) {
  return (
    <Card className="overflow-hidden group">
      <Link href={`/blog/${slug}`}>
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
          <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h2>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <time dateTime={date}>
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-primary font-medium">
            Read More <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </Card>
  );
}

export default function Blog() {
  return (
    <div className="container py-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Technical articles, tutorials, and insights about software development,
              web technologies, and best practices.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}