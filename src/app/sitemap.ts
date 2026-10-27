import type { MetadataRoute } from "next"

import { caseStudies } from "@/content/case-studies"
import { posts } from "@/content/posts"
import { site } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/contact", priority: 0.9 },
    { path: "/solutions/sales-product-assistants", priority: 0.8 },
    { path: "/ai-for-shopify-stores", priority: 0.8 },
    { path: "/ai-for-travel-agencies", priority: 0.8 },
    { path: "/blog", priority: 0.6 },
  ]
  return [
    ...pages.map((p) => ({ url: `${site.url}${p.path}`, changeFrequency: "monthly" as const, priority: p.priority })),
    ...caseStudies.map((c) => ({ url: `${site.url}/case-studies/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.6 })),
  ]
}
