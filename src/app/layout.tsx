import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import "./globals.css"
import { JsonLd } from "@/components/blocks"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "NutMag Labs | Custom AI Agents & AI Automation Studio",
    template: "%s | NutMag Labs",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "NutMag Labs | Custom AI Agents & AI Automation Studio",
    description:
      "Custom AI agents designed around your processes, connected to your systems and maintained by people who know your business.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: site.name,
  url: site.url,
  email: site.email,
  description:
    "NutMag Labs is an AI automation studio that designs, builds and maintains custom AI agents, automations and AI-powered websites, online stores and apps for small and mid-sized businesses worldwide.",
  areaServed: "Worldwide",
  knowsAbout: [
    "AI agents",
    "AI automation",
    "Workflow automation",
    "Shopify AI assistants",
    "AI-powered web apps",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <JsonLd data={orgJsonLd} />
      </body>
    </html>
  )
}
