import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/ThemeToggle"; // <---- NEW

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
          <div className="relative min-h-screen flex flex-col">
            {/* Fixed theme toggle in top-right */}
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            <Navigation />
            <main className="grow">
              <div className="container mx-auto px-4 py-8">{children}</div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
