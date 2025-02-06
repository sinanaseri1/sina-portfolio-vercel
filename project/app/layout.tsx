import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sina Naseri — Software Developer",
  description:
    "Official website of Sina Naseri, showcasing software engineering projects, skills, and achievements.",
  openGraph: {
    title: "Sina Naseri — Software Developer",
    description:
      "Official website of Sina Naseri, showcasing software engineering projects, skills, and achievements.",
    url: "https://sinanaseri.com",
    siteName: "Sina Naseri",
    images: [
      {
        url: "/meta/og-image.jpg", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "Sina Naseri Website Banner",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sina Naseri — Software Developer",
    description:
      "Official website of Sina Naseri, showcasing software engineering projects, skills, and achievements.",
    images: ["/meta/og-image.jpg"], // Replace with your actual Twitter share image path
  },
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
              <div className="container mx-auto px-4 py-8">{children}</div>
            </main>

            {/* Your footer at the bottom (full width by default) */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
