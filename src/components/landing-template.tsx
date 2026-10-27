import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Container,
  CtaBand,
  Eyebrow,
  FaqGrid,
  JsonLd,
  PageHero,
  ToolBadges,
  breadcrumbJsonLd,
} from "@/components/blocks"
import type { Landing } from "@/content/landings"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function landingMetadata(l: Landing): Metadata {
  return {
    title: l.metaTitle,
    description: l.metaDescription,
    alternates: { canonical: l.path },
    openGraph: { title: `${l.metaTitle} | NutMag Labs`, description: l.metaDescription, url: l.path },
  }
}

export function LandingTemplate({ l }: { l: Landing }) {
  return (
    <>
      <PageHero
        crumbs={l.crumbs}
        badges={<Badge variant="outline" className="bg-background">{l.badge}</Badge>}
        title={l.title}
        lead={l.lead}
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/contact">
                {l.primaryCta}
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={l.secondaryCta.href}>{l.secondaryCta.label}</Link>
            </Button>
          </>
        }
      />

      <section aria-labelledby="features-title" className="border-b">
        <Container className="flex flex-col gap-10 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="features-title" className="max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-5xl md:leading-[1.08]">
              {l.featuresTitle}
            </h2>
            <p className="max-w-md leading-relaxed text-muted-foreground">{l.featuresIntro}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {l.features.map((f) => (
              <Card key={f.h} className="gap-2.5 px-6 transition-colors hover:border-white/20 hover:bg-accent/40">
                <h3 className="text-lg font-semibold">
                  {f.href ? <Link href={f.href} className="hover:underline hover:underline-offset-4">{f.h}</Link> : f.h}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.p}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="proof-title" className="border-b bg-surface">
        <Container className="grid items-center gap-10 py-24 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Eyebrow>Case study</Eyebrow>
            <h2 id="proof-title" className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              {l.proof.title}
            </h2>
            <p className="leading-relaxed text-muted-foreground">{l.proof.body}</p>
            <div>
              <Button asChild variant="outline" size="lg">
                <Link href={l.proof.href}>Read the case study</Link>
              </Button>
            </div>
          </div>
          <Card className="gap-1.5 px-8 py-8">
            <span className="font-mono text-6xl font-medium tracking-tighter text-brand">{l.proof.metric}</span>
            <span className="text-muted-foreground">{l.proof.metricLabel}</span>
          </Card>
        </Container>
      </section>

      {l.integrations && (
        <section aria-labelledby="int-title" className="border-b">
          <Container className="grid items-center gap-10 py-20 lg:grid-cols-2">
            <div className="flex flex-col gap-3">
              <h2 id="int-title" className="text-3xl font-semibold tracking-tight">{l.integrationsTitle}</h2>
              <p className="leading-relaxed text-muted-foreground">{l.integrationsBody}</p>
            </div>
            <ToolBadges items={l.integrations} />
          </Container>
        </section>
      )}

      {l.steps && (
        <section aria-labelledby="steps-title" className="border-b">
          <Container className="flex flex-col gap-10 py-24">
            <h2 id="steps-title" className="text-3xl font-semibold tracking-tight md:text-4xl">How it works</h2>
            <ol className="grid gap-4 md:grid-cols-3">
              {l.steps.map((s) => (
                <li key={s.h}>
                  <Card className={cn("h-full gap-2.5 px-6", s.highlight && "border-brand ring-1 ring-brand")}>
                    <span className={cn("font-mono text-[13px]", s.highlight ? "text-brand" : "text-muted-foreground")}>{s.label}</span>
                    <h3 className="text-lg font-semibold">{s.h}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{s.p}</p>
                  </Card>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      <FaqGrid title={l.faqTitle} items={l.faqs} />

      <CtaBand title={l.ctaTitle} body={l.ctaBody} />

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: l.serviceType,
            name: l.metaTitle,
            description: l.metaDescription,
            url: `${site.url}${l.path}`,
            areaServed: "Worldwide",
            provider: { "@type": "Organization", name: site.name, url: site.url },
          },
          breadcrumbJsonLd(l.crumbs, l.path),
        ]}
      />
    </>
  )
}
