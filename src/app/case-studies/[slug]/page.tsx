import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  Container,
  FaqGrid,
  JsonLd,
  PageHero,
  RelatedCta,
  StatCards,
  ToolBadges,
  breadcrumbJsonLd,
} from "@/components/blocks"
import { caseStudies, getCaseStudy } from "@/content/case-studies"
import { site } from "@/lib/site"

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = getCaseStudy(slug)
  if (!c) return {}
  const path = `/case-studies/${c.slug}`
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: path },
    openGraph: { type: "article", title: `${c.metaTitle} | NutMag Labs`, description: c.metaDescription, url: path },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getCaseStudy(slug)
  if (!c) notFound()
  const path = `/case-studies/${c.slug}`
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case studies", href: "/#work" }, { label: c.industry }]

  return (
    <article>
      <PageHero
        crumbs={crumbs}
        badges={
          <>
            <Badge variant="secondary">{c.industry}</Badge>
            <Badge variant="outline">{c.type}</Badge>
            <Badge variant="outline">
              {c.extraBadge === "Live in production" && <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />}
              {c.extraBadge}
            </Badge>
          </>
        }
        title={c.title}
        lead={c.lead}
      />

      <StatCards stats={c.stats} />

      <section className="border-b">
        <Container className="grid items-start gap-14 py-24 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold tracking-tight">The challenge</h2>
            {c.challenge.map((p) => (
              <p key={p} className="leading-relaxed text-muted-foreground">{p}</p>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold tracking-tight">{c.builtTitle}</h2>
            <ol className="flex flex-col">
              {c.built.map((b, i) => (
                <li key={b.h} className="flex gap-4 border-b py-3.5 last:border-b-0">
                  <span className="pt-0.5 font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[15px] leading-relaxed">
                    <strong className="font-semibold">{b.h}</strong> — {b.p}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-b bg-surface">
        <Container className="flex flex-col gap-10 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold tracking-tight">{c.detailTitle}</h2>
            <ToolBadges items={c.tools} />
          </div>
          <div className={c.details.length === 2 ? "grid gap-4 md:grid-cols-2" : "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"}>
            {c.details.map((d) => (
              <Card key={d.h} className="gap-2.5 px-6">
                <h3 className="font-semibold">{d.h}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{d.p}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <FaqGrid title="Questions about this project" items={c.faqs} />

      <RelatedCta title={c.ctaTitle} body={c.ctaBody} related={c.related} />

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: c.title,
            description: c.metaDescription,
            about: `${c.industry} — ${c.type}`,
            url: `${site.url}${path}`,
            author: { "@type": "Organization", name: site.name, url: site.url },
            publisher: { "@type": "Organization", name: site.name, url: site.url },
          },
          breadcrumbJsonLd(crumbs, path),
        ]}
      />
    </article>
  )
}
