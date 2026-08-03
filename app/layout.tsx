import type { Metadata } from "next";
import ThemeScript from "@/components/ThemeScript";
import CustomCursor from "@/components/CustomCursor";
import ProgressBar from "@/components/ProgressBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ftechworks — Technology for Business Growth",
  description:
    "Ftechworks builds high-performance backends, full-stack web apps, cross-platform mobile apps and AI-powered products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <ThemeScript />
      </head>
      <body>
        <CustomCursor />
        <ProgressBar />
        <WhatsAppFloat />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
