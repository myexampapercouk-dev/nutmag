import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container, JsonLd, breadcrumbJsonLd } from "@/components/blocks"
import { formatDate, getPost, getPostBody, posts } from "@/content/posts"
import { site } from "@/lib/site"

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = getPost(slug)
  if (!p) return {}
  return {
    title: { absolute: `${p.metaTitle} | NutMag Labs` },
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.metaTitle, description: p.description, url: `/blog/${p.slug}`, publishedTime: p.date },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getPost(slug)
  if (!p) notFound()
  const body = getPostBody(slug)
  const path = `/blog/${p.slug}`

  return (
    <article>
      <Container className="max-w-3xl py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:text-foreground">← All articles</Link>
        </nav>
        <header className="mb-10 flex flex-col gap-4 border-b pb-10">
          <time dateTime={p.date} className="text-sm text-muted-foreground">{formatDate(p.date)} · NutMag Labs</time>
          <h1 className="text-4xl font-semibold tracking-tighter text-balance md:text-5xl md:leading-[1.06]">{p.title}</h1>
        </header>
        <div className="prose-nm">
          <Markdown remarkPlugins={[remarkGfm]}>{body}</Markdown>
        </div>
        <Card className="mt-14 gap-4 px-8 py-8">
          <h2 className="text-2xl font-semibold tracking-tight">{p.cta.title}</h2>
          <p className="leading-relaxed text-muted-foreground">{p.cta.body}</p>
          <div>
            <Button asChild size="lg">
              <Link href="/contact">Book a free call</Link>
            </Button>
          </div>
        </Card>
      </Container>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: p.metaTitle,
            description: p.description,
            datePublished: p.date,
            url: `${site.url}${path}`,
            author: { "@type": "Organization", name: site.name, url: site.url },
            publisher: { "@type": "Organization", name: site.name, url: site.url },
          },
          breadcrumbJsonLd([{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: p.title }], path),
        ]}
      />
    </article>
  )
}
