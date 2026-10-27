import { readFileSync } from "node:fs"
import path from "node:path"

export type Post = {
  slug: string
  title: string
  metaTitle: string
  description: string
  date: string // ISO date — set to the day you publish
  cta: { title: string; body: string }
}

export const posts: Post[] = [
  {
    slug: "jewellery-store-ai-assistant-shopify",
    title: "How we built an AI assistant that answers 3,000+ jewellery questions a month",
    metaTitle: "Jewellery Store AI Assistant: How We Built It on Shopify",
    description:
      "How NutMag Labs built a Shopify AI assistant for a jewellery retailer that answers 3,000+ customer questions a month from live stock and hands buyers to staff.",
    date: "2026-12-07",
    cta: {
      title: "Run an online store?",
      body: "NutMag Labs builds AI assistants that know your products as well as your best salesperson. Book a free discovery call and we'll build a working demo on your own store.",
    },
  },
  {
    slug: "ai-chatbot-vs-ai-agent",
    title: "AI chatbot vs AI agent: what's the difference?",
    metaTitle: "AI Chatbot vs AI Agent: What's the Difference?",
    description:
      "A chatbot answers questions; an AI agent does the work. See the difference with real examples and how to choose the right one for your business.",
    date: "2026-11-16",
    cta: {
      title: "Not sure which you need?",
      body: "NutMag Labs builds custom AI agents for small and mid-sized businesses. Tell us about one process on a free discovery call and we'll come back with a working demo.",
    },
  },
  {
    slug: "ai-chatbot-cost-small-business",
    title: "How much does an AI chatbot cost for a small business?",
    metaTitle: "How Much Does an AI Chatbot Cost? A Small Business Guide",
    description:
      "What really drives the cost of an AI chatbot for a small business: off-the-shelf vs custom, integrations, running costs and how to get a fixed quote.",
    date: "2026-11-02",
    cta: {
      title: "Want a real number for your business?",
      body: "Book a free discovery call, get a free working demo on your own problem, and receive a fixed quote.",
    },
  },
]

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}

export function getPostBody(slug: string) {
  return readFileSync(path.join(process.cwd(), "src/content/posts", `${slug}.md`), "utf8")
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
}
