import type { Metadata } from "next";
import ThemeScript from "@/components/ThemeScript";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import CustomCursor from "@/components/CustomCursor";
import ProgressBar from "@/components/ProgressBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Technology for Business Growth`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Technology for Business Growth`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Technology for Business Growth`,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Marks JS availability before first paint — animation CSS only hides
            content under html.js, so no-JS visitors and crawlers see everything. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <ThemeScript />
        <JsonLd />
      </head>
      <body>
        <Preloader />
        <SmoothScroll />
        <CursorGlow />
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
