# NutMag Labs — website

The nutmaglabs.xyz website. Built with Next.js 16 (App Router), Tailwind CSS v4 and shadcn/ui (new-york style, dark theme).

## Run it locally

Needs Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy (Vercel, free)

1. Push this folder to a GitHub repo.
2. Go to vercel.com → **Add New → Project** → import the repo. No settings to change.
3. In the Vercel project, **Settings → Domains** → add `nutmaglabs.xyz` and follow the DNS instructions.

## Before you launch — fill these in

| What | Where |
|---|---|
| WhatsApp number (international format, digits only) | `src/lib/site.ts` → `whatsappNumber` |
| Real case study numbers | `src/content/case-studies.ts` → `cardMetric` and `stats` |
| Blog post dates (set to the day you publish) | `src/content/posts.ts` → `date` |
| Contact form email delivery | Environment variables below |

Until a WhatsApp number is set, every WhatsApp button links to the contact page.

### Contact form emails

The form posts to `/api/contact`. To receive submissions by email, create a free account at resend.com and add these environment variables in Vercel (**Settings → Environment Variables**):

```
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO_EMAIL=brrrypto@gmail.com
CONTACT_FROM_EMAIL=NutMag Labs <hello@nutmaglabs.xyz>   # optional, after verifying your domain in Resend
```

Without them the form still works, and submissions are written to the server logs.

## Where things live

```
src/
  app/
    page.tsx                         Home
    contact/                         Book a call page + form
    api/contact/route.ts             Form handler (emails via Resend)
    case-studies/[slug]/page.tsx     3 case studies
    ai-for-travel-agencies/          Industry page
    ai-for-shopify-stores/           Industry page
    solutions/sales-product-assistants/  Service page
    blog/                            Blog index + posts
    sitemap.ts, robots.ts            SEO
  content/                           All page copy — edit text here
    home.ts, case-studies.ts, landings.ts, posts.ts
    posts/*.md                       Blog post bodies (Markdown)
  components/
    ui/                              shadcn/ui components (from github.com/shadcn-ui/ui)
    blocks.tsx                       Shared page sections
    site-chrome.tsx                  Header, footer, logo
  lib/site.ts                        Site name, URL, email, WhatsApp
public/llms.txt                      Summary for AI search tools
```

## Adding a blog post

1. Add a Markdown file to `src/content/posts/your-slug.md`.
2. Add an entry to the `posts` list in `src/content/posts.ts` (slug, title, description, date).

It appears on `/blog`, gets its own page, and is added to the sitemap automatically.

## SEO included

- Unique title, description and canonical URL on every page
- Structured data: Organization, Service, Article, BlogPosting, FAQPage, BreadcrumbList
- `sitemap.xml`, `robots.txt` and `llms.txt`
- Every page is pre-rendered as static HTML

After launch, add the site to Google Search Console and submit `https://nutmaglabs.xyz/sitemap.xml`.
