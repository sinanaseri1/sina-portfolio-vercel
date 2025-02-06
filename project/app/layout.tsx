import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description:
    "Professional portfolio showcasing software engineering projects and expertise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* This wrapper ensures the page is at least full height */}
          <div className="relative min-h-screen flex flex-col">
            {/* Your navigation at the top (full width by default) */}
            <Navigation />

            {/* Main content area, centered horizontally */}
            <main className="grow">
              <div className="container mx-auto px-4 py-8">
                {children}
              </div>
            </main>

            {/* Your footer at the bottom (full width by default) */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
