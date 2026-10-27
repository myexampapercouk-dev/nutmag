import Link from "next/link"
import { MenuIcon, MessageCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { mainNav, site, whatsappHref } from "@/lib/site"

export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="var(--brand)" />
      <path
        d="M9.5 22.5V9.5l13 13V9.5"
        fill="none"
        stroke="var(--brand-foreground)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex items-center gap-2.5" aria-label="NutMag Labs home">
          <Logo />
          <span className="font-semibold tracking-tight">NutMag Labs</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <a href={whatsappHref()}>
              <MessageCircleIcon />
              WhatsApp
            </a>
          </Button>
          <Button asChild>
            <Link href="/contact">Book a free call</Link>
          </Button>
          <details className="relative lg:hidden">
            <summary
              className="flex size-9 cursor-pointer list-none items-center justify-center rounded-md border [&::-webkit-details-marker]:hidden"
              aria-label="Open menu"
            >
              <MenuIcon className="size-4" />
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 mt-2 flex w-56 flex-col rounded-lg border bg-popover p-2 shadow-lg"
            >
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}

const footerCols = [
  {
    title: "Solutions",
    links: [
      { href: "/solutions/sales-product-assistants", label: "Sales & product assistants" },
      { href: "/#solutions", label: "Customer journey automation" },
      { href: "/#solutions", label: "Back-office & compliance" },
      { href: "/#solutions", label: "Custom AI apps & platforms" },
      { href: "/#build", label: "AI-powered websites & stores" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "/ai-for-shopify-stores", label: "AI for Shopify stores" },
      { href: "/ai-for-travel-agencies", label: "AI for travel agencies" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#work", label: "Case studies" },
      { href: "/#how", label: "How it works" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-14 pb-10">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex max-w-xs flex-col gap-3.5">
            <div className="flex items-center gap-2.5">
              <Logo size={24} />
              <span className="font-semibold">NutMag Labs</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              An AI automation studio building custom AI agents and AI-powered websites, stores and apps.
              Working with clients worldwide.
            </p>
          </div>
          <div className="flex flex-wrap gap-14">
            {footerCols.map((col) => (
              <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3">
                <span className="text-sm font-medium">{col.title}</span>
                {col.links.map((l) => (
                  <Link key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {l.label}
                  </Link>
                ))}
              </nav>
            ))}
            <nav aria-label="Get in touch" className="flex flex-col gap-3">
              <span className="text-sm font-medium">Get in touch</span>
              <a href={whatsappHref()} className="text-sm text-muted-foreground hover:text-foreground">
                WhatsApp
              </a>
              <a href={`mailto:${site.email}`} className="text-sm text-muted-foreground hover:text-foreground">
                {site.email}
              </a>
            </nav>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t pt-6 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} NutMag Labs</span>
          <span>nutmaglabs.xyz</span>
        </div>
      </div>
    </footer>
  )
}
