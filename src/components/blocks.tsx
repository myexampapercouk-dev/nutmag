import Link from "next/link"
import { ArrowRightIcon, CheckIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site"

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6", className)} {...props} />
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-[13px] text-brand">{children}</span>
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  id,
  side = false,
}: {
  eyebrow?: string
  title: React.ReactNode
  intro?: React.ReactNode
  id?: string
  side?: boolean
}) {
  if (side) {
    return (
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex max-w-xl flex-col gap-3.5">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 id={id} className="text-3xl font-semibold tracking-tight text-balance md:text-5xl md:leading-[1.08]">
            {title}
          </h2>
        </div>
        {intro && <p className="max-w-md leading-relaxed text-muted-foreground">{intro}</p>}
      </div>
    )
  }
  return (
    <div className="flex max-w-2xl flex-col gap-3.5">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-balance md:text-5xl md:leading-[1.08]">
        {title}
      </h2>
      {intro && <p className="text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  )
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}

export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5">
      <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
      <span>{children}</span>
    </li>
  )
}

export type Crumb = { label: string; href?: string }

export function PageHero({
  crumbs,
  badges,
  title,
  lead,
  actions,
}: {
  crumbs: Crumb[]
  badges?: React.ReactNode
  title: string
  lead: string
  actions?: React.ReactNode
}) {
  return (
    <section className="dot-grid border-b">
      <Container className="flex flex-col gap-7 pt-12 pb-20">
        <Breadcrumb>
          <BreadcrumbList>
            {crumbs.map((c, i) => (
              <span key={c.label} className="contents">
                <BreadcrumbItem>
                  {c.href ? (
                    <BreadcrumbLink asChild>
                      <Link href={c.href}>{c.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{c.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {i < crumbs.length - 1 && <BreadcrumbSeparator />}
              </span>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        {badges && <div className="flex flex-wrap gap-2">{badges}</div>}
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tighter text-balance sm:text-5xl lg:text-6xl lg:leading-[1.04]">
          {title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
        {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
      </Container>
    </section>
  )
}

export function breadcrumbJsonLd(crumbs: Crumb[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.url}${c.href ?? path}`.replace(/\/#.*$/, "/"),
    })),
  }
}

export type Stat = { value: string; label: string }

export function StatCards({ stats }: { stats: Stat[] }) {
  return (
    <section aria-label="Results" className="border-b">
      <Container className="grid gap-4 py-14 sm:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.label} className="gap-1.5 px-7">
            <span className="font-mono text-4xl font-medium tracking-tighter text-brand">{s.value}</span>
            <span className="text-sm text-muted-foreground">{s.label}</span>
          </Card>
        ))}
      </Container>
    </section>
  )
}

export type QA = { q: string; a: string }

export function faqJsonLd(items: QA[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  }
}

export function FaqGrid({ title, items, id = "faq-title" }: { title: string; items: QA[]; id?: string }) {
  return (
    <section aria-labelledby={id} className="border-b">
      <Container className="flex flex-col gap-8 py-24">
        <h2 id={id} className="text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        <div className="grid gap-x-16 gap-y-7 md:grid-cols-2">
          {items.map((i) => (
            <div key={i.q} className="flex flex-col gap-2">
              <h3 className="font-semibold">{i.q}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{i.a}</p>
            </div>
          ))}
        </div>
      </Container>
      <JsonLd data={faqJsonLd(items)} />
    </section>
  )
}

export function RelatedCta({
  title,
  body,
  related,
}: {
  title: string
  body: string
  related: { href: string; label: string }[]
}) {
  return (
    <section>
      <Container className="grid gap-6 py-24 md:grid-cols-2">
        <Card className="justify-between gap-4 px-9 py-9">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="leading-relaxed text-muted-foreground">{body}</p>
          <div>
            <Button asChild size="lg">
              <Link href="/contact">Book a free call</Link>
            </Button>
          </div>
        </Card>
        <Card className="gap-0 overflow-hidden py-0">
          <span className="px-5 pt-5 pb-2 text-sm text-muted-foreground">Related</span>
          <nav aria-label="Related pages" className="flex flex-col">
            {related.map((r, i) => (
              <Link
                key={r.href + r.label}
                href={r.href}
                className={cn(
                  "flex items-center justify-between gap-3 px-5 py-4.5 font-medium transition-colors hover:bg-accent/60",
                  i > 0 && "border-t",
                )}
              >
                {r.label}
                <ArrowRightIcon className="size-4 text-muted-foreground" aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </Card>
      </Container>
    </section>
  )
}

export function CtaBand({ title, sub, body }: { title: string; sub?: string; body: string }) {
  return (
    <section>
      <Container className="py-24">
        <Card className="dot-grid grid items-center gap-8 px-8 py-10 md:grid-cols-2 md:px-14 md:py-14">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              {title}
              {sub && (
                <>
                  <br />
                  <span className="text-muted-foreground">{sub}</span>
                </>
              )}
            </h2>
            <p className="leading-relaxed text-muted-foreground">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button asChild size="lg">
              <Link href="/contact">
                Book a free discovery call
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  )
}

export function ToolBadges({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t}>
          <Badge variant="outline" className="px-3 py-1.5 text-[13px]">
            {t}
          </Badge>
        </li>
      ))}
    </ul>
  )
}
