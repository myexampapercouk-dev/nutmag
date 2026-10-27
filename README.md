# NutMag Labs — website

The nutmaglabs.xyz website. Built with Next.js 16 (App Router), Tailwind CSS v4 and shadcn/ui (new-york style, dark theme).

## Run it locally

Needs Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build the static site

The site is a static export: no server needed.

```bash
npm run build
```

This writes plain HTML, CSS and JS to `out/`. Upload the contents of `out/` to any static host (Netlify, Cloudflare Pages, GitHub Pages, Vercel, cPanel, S3…).

Pages are emitted as `contact.html`, `blog/ai-chatbot-vs-ai-agent.html` and so on. Netlify, Cloudflare Pages, Vercel and GitHub Pages serve these at `/contact` automatically. On Apache/cPanel, add this to `.htaccess` so clean URLs work:

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]
ErrorDocument 404 /404.html
```

## Before you launch — fill these in

| What | Where |
|---|---|
| WhatsApp number (international format, digits only) | `src/lib/site.ts` → `whatsappNumber` |
| Real case study numbers | `src/content/case-studies.ts` → `cardMetric` and `stats` |
| Blog post dates (set to the day you publish) | `src/content/posts.ts` → `date` |
| Contact form email delivery | `NEXT_PUBLIC_WEB3FORMS_KEY`, see below |

Until a WhatsApp number is set, every WhatsApp button links to the contact page.

### Contact form emails

The form sends submissions through [Web3Forms](https://web3forms.com) (free), since a static site has no server of its own.

1. Go to web3forms.com, enter the email address that should receive submissions, and copy the access key it sends you.
2. Create `.env.local` in this folder (or set the variable in your host's build settings):

   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key
   ```

3. Rebuild with `npm run build`.

The key is baked into the page at build time and is meant to be public. Until it is set, the form shows an error with your email address as a fallback.

## Where things live

```
src/
  app/
    page.tsx                         Home
    contact/                         Book a call page + form (sends via Web3Forms)
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
