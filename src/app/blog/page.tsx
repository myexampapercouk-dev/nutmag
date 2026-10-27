import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Container, Eyebrow } from "@/components/blocks"
import { formatDate, posts } from "@/content/posts"

export const metadata: Metadata = {
  title: "Blog: Practical AI for Growing Businesses",
  description:
    "Plain-English guides on AI agents, automation and AI-powered stores for small and mid-sized businesses, plus stories from our own builds.",
  alternates: { canonical: "/blog" },
}

export default function BlogIndex() {
  return (
    <Container className="flex flex-col gap-12 py-20">
      <div className="flex max-w-2xl flex-col gap-4">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="text-4xl font-semibold tracking-tighter md:text-6xl">Practical AI for growing businesses</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Plain-English guides on AI agents and automation, and stories from the systems we build.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.slug} className="group relative justify-between gap-5 px-6 transition-colors hover:border-white/20 hover:bg-accent/40">
            <div className="flex flex-col gap-3">
              <time dateTime={p.date} className="text-sm text-muted-foreground">{formatDate(p.date)}</time>
              <h2 className="text-lg leading-snug font-semibold">
                <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0">{p.title}</Link>
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium">
              Read article <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Card>
        ))}
      </div>
    </Container>
  )
}
