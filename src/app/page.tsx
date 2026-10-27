import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRightIcon,
  BotIcon,
  Building2Icon,
  BriefcaseIcon,
  CheckIcon,
  ClockIcon,
  CreditCardIcon,
  GitBranchIcon,
  GlobeIcon,
  HeartPulseIcon,
  Link2Icon,
  MessageCircleIcon,
  PlaneIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SmartphoneIcon,
  TruckIcon,
  UserCheckIcon,
  UsersIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckItem, Container, CtaBand, JsonLd, SectionHeader, ToolBadges, faqJsonLd } from "@/components/blocks"
import { FaqAccordion } from "@/components/home/faq-accordion"
import { SolutionsTabs } from "@/components/home/solutions-tabs"
import { caseStudies } from "@/content/case-studies"
import { homeFaqs, solutions } from "@/content/home"
import { whatsappHref } from "@/lib/site"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

const heroSteps = [
  { text: "Customer asks for a gold necklace for a wedding, within budget", tag: "Website chat", state: "done" },
  { text: "Live inventory searched by metal, style and price", tag: "Shopify", state: "done" },
  { text: "Current prices and stock confirmed", tag: "Shopify", state: "done" },
  { text: "Matching pieces shown with photos and details", tag: "Catalogue", state: "done" },
  { text: "Ready to buy — staff alerted with the chat summary", tag: "WhatsApp to staff", state: "live" },
] as const

const industries = [
  { icon: Building2Icon, title: "Real estate", body: "Leads from portals and ads qualified, logged in your CRM and booked for site visits — with brokers alerted to the serious buyers." },
  { icon: HeartPulseIcon, title: "Clinics & dental practices", body: "Keep the schedule full — bookings, reschedules and reminders run automatically, with calls triaged to the right person." },
  { icon: ShoppingCartIcon, title: "E-commerce & D2C", body: "Returns, refunds and order issues resolved against your live store data, within approval limits you set.", href: "/ai-for-shopify-stores" },
  { icon: BriefcaseIcon, title: "Accounting & legal firms", body: "Client documents collected, data extracted and checked, and first-pass summaries drafted for review." },
  { icon: PlaneIcon, title: "Travel agencies", body: "Trip requests turned into priced itineraries, with bookings, documents, payments and on-trip support handled in one flow.", href: "/ai-for-travel-agencies" },
  { icon: TruckIcon, title: "Logistics & distribution", body: "Invoices and POs read, matched and posted to your accounting software, with mismatches flagged before month-end." },
]

const approach = [
  { icon: GitBranchIcon, title: "Follows your rules", body: "Set up around how your business works — your prices, priorities, limits and exceptions. Not a generic template." },
  { icon: Link2Icon, title: "Connected to your software", body: "Reads and updates your CRM, accounting, calendar and inbox directly through secure API integrations. No copy-paste, no manual syncing." },
  { icon: UserCheckIcon, title: "You stay in control", body: "Anything sensitive needs your approval, every action is recorded, and your team can take over any conversation instantly." },
  { icon: ShieldCheckIcon, title: "Tested before launch, checked after", body: "We test it on your real past cases before it goes live, then monitor and improve it every month." },
]

const steps = [
  { n: "01", badge: "Free", title: "Discovery call", body: "30 minutes. You walk us through the process that costs you the most, the systems involved and what success looks like.", time: "Day 0 · 30 min" },
  { n: "02", badge: "Free", title: "Demo on your problem", body: "We build a working prototype on your real example and show it to you live. Then you get a fixed quote — no hourly billing.", time: "Within ~1 week", highlight: true },
  { n: "03", badge: "Fixed price", title: "Build & launch", body: "We integrate with your systems, test against your real cases, train your team and go live in stages.", time: "2–5 weeks" },
  { n: "04", badge: "Optional", title: "Care plan", body: "We host, monitor and keep improving your agents each month. Or take the handover and run them yourself.", time: "Monthly · cancel anytime" },
]

const workingWithUs = [
  { icon: ClockIcon, title: "Your time zone", body: "We schedule calls in your business hours and reply the same day." },
  { icon: ShieldCheckIcon, title: "NDA & full ownership", body: "We sign an NDA before you share anything. The code, prompts and accounts are yours." },
  { icon: CreditCardIcon, title: "Easy, secure payments", body: "Pay by card via Stripe, Wise or bank transfer. Milestone-based, in your currency." },
  { icon: UsersIcon, title: "The people you meet build it", body: "A two-person studio. You work directly with the people who design and build your product, with no account managers and no hand-offs." },
]

const tools = ["WhatsApp Business", "HubSpot", "Zoho", "Salesforce", "Shopify", "WooCommerce", "QuickBooks", "Xero", "Tally", "Freshdesk", "Google Workspace", "Microsoft 365", "Slack"]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section aria-labelledby="hero-title" className="dot-grid border-b">
        <Container className="grid items-center gap-14 py-20 md:py-28 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-7">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-background">AI automation studio for growing businesses</Badge>
              <Badge variant="outline" className="bg-background">
                <span className="pulse-dot size-1.5 rounded-full bg-brand" aria-hidden="true" />
                Taking new projects
              </Badge>
            </div>
            <h1 id="hero-title" className="text-5xl leading-[1.02] font-semibold tracking-tighter text-balance sm:text-6xl lg:text-7xl">
              Your operations, on autopilot.{" "}
              <span className="text-muted-foreground">Built around how you actually work.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              AI agents designed around your processes, connected to your systems and maintained by people who know your business.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book a free discovery call
                  <ArrowRightIcon />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={whatsappHref()}>
                  <MessageCircleIcon />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {["Free demo on your problem", "Fixed quote, no surprises", "You own everything"].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <CheckIcon className="size-3.5 text-brand" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <figure className="flex flex-col gap-3.5">
            <Card
              role="img"
              aria-label="Client example: a website AI agent for a jewellery retailer that searches live Shopify inventory, shows prices and photos, and hands ready-to-buy customers to staff on WhatsApp"
              className="gap-0 overflow-hidden py-0 shadow-2xl shadow-black/60"
            >
              <div className="flex items-center justify-between gap-3 border-b px-5 py-4">
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="text-xs text-muted-foreground">Client build</span>
                  <span className="font-semibold">Jewellery retailer · Website AI agent</span>
                </div>
                <Badge variant="secondary">
                  <span className="pulse-dot size-1.5 rounded-full bg-brand" aria-hidden="true" />
                  Live in production
                </Badge>
              </div>
              <ol className="flex flex-col px-5 py-3">
                {heroSteps.map((s) => (
                  <li key={s.text} className="flex items-center gap-3 border-b border-dashed py-2.5 last:border-b-0">
                    {s.state === "done" ? (
                      <span className="flex size-5.5 shrink-0 items-center justify-center rounded-full bg-secondary">
                        <CheckIcon className="size-3" strokeWidth={3} aria-hidden="true" />
                      </span>
                    ) : (
                      <span className="pulse-dot size-5.5 shrink-0 rounded-full border-2 border-brand" aria-hidden="true" />
                    )}
                    <span className="flex-1 text-sm">{s.text}</span>
                    {s.state === "done" ? (
                      <Badge variant="outline" className="text-muted-foreground">{s.tag}</Badge>
                    ) : (
                      <Badge className="bg-brand text-brand-foreground">{s.tag}</Badge>
                    )}
                  </li>
                ))}
              </ol>
              <div className="px-5 pb-4">
                <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-[86%] rounded-full bg-brand" />
                </div>
              </div>
              <dl className="grid grid-cols-3 border-t">
                {[
                  ["Inventory", "Live sync"],
                  ["Pricing", "Always current"],
                  ["Available", "24 / 7"],
                ].map(([k, v], i) => (
                  <div key={k} className={i < 2 ? "border-r px-5 py-3.5" : "px-5 py-3.5"}>
                    <dt className="text-xs text-muted-foreground">{k}</dt>
                    <dd className="mt-1 font-mono text-[15px]">{v}</dd>
                  </div>
                ))}
              </dl>
            </Card>
            <figcaption className="text-sm text-muted-foreground">
              A website AI agent we built and maintain for a jewellery retailer.
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* 01 SOLUTIONS */}
      <section id="solutions" aria-labelledby="solutions-title" className="scroll-mt-16 border-b">
        <Container className="flex flex-col gap-12 py-28">
          <SectionHeader
            id="solutions-title"
            eyebrow="01 — Solutions"
            title="AI workflow automation for entire processes, not single tasks."
            intro="We map how work moves through your business, then build AI agents that run it end to end — across your tools, with your team in control."
          />
          <SolutionsTabs solutions={solutions} />
        </Container>
      </section>

      {/* 02 WHAT WE BUILD */}
      <section id="build" aria-labelledby="build-title" className="scroll-mt-16 border-b">
        <Container className="flex flex-col gap-12 py-28">
          <SectionHeader
            side
            id="build-title"
            eyebrow="02 — What we build"
            title="AI-native, from the first line of code."
            intro="We build the whole product around your AI, so it's designed in from day one, not bolted on later."
          />
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="gap-0 overflow-hidden border-brand py-0 ring-1 ring-brand md:col-span-3 md:grid md:grid-cols-2">
              <div className="flex flex-col gap-4 border-b p-9 md:border-r md:border-b-0">
                <span className="flex size-11 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                  <BotIcon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-semibold tracking-tight">AI agents &amp; automation</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Our core work. Custom AI agents that answer, decide and act inside your business — connected to your tools and kept in check by your team.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["AI agents", "Workflow automation", "Custom AI apps"].map((t) => (
                    <Badge key={t} variant="outline" className="text-muted-foreground">{t}</Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center gap-5 p-9">
                <ul className="flex flex-col gap-3.5 text-[15px] text-foreground/85">
                  <CheckItem>Sales and product assistants on live data</CheckItem>
                  <CheckItem>Customer journeys automated end to end</CheckItem>
                  <CheckItem>Back-office paperwork and compliance checks</CheckItem>
                  <CheckItem>Full AI platforms for customers, staff and partners</CheckItem>
                </ul>
                <Link href="#solutions" className="text-sm font-medium underline underline-offset-4">
                  See AI solutions
                </Link>
              </div>
            </Card>
            {[
              { icon: GlobeIcon, title: "AI-powered websites", body: "Business websites with AI assistants, lead capture and automation built in — fast, mobile-friendly and set up for SEO.", tags: ["AI assistants", "Lead capture", "SEO"] },
              { icon: ShoppingBagIcon, title: "AI-ready online stores", body: "Shopify and WooCommerce stores with product assistants, order automation and support that runs on live store data.", tags: ["Shopify", "WooCommerce", "Product assistants"], href: "/ai-for-shopify-stores" },
              { icon: SmartphoneIcon, title: "Apps with AI inside", body: "Custom web and mobile apps with logins, dashboards and payments, and AI doing the work behind the scenes.", tags: ["Web apps", "Mobile apps"] },
            ].map((c) => (
              <Card key={c.title} className="gap-3.5 px-6 transition-colors hover:border-white/20 hover:bg-accent/40">
                <span className="flex size-10 items-center justify-center rounded-lg border bg-background text-brand">
                  <c.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold">
                  {c.href ? <Link href={c.href}>{c.title}</Link> : c.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <Badge key={t} variant="outline" className="text-muted-foreground">{t}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">Also: hosting, SEO, speed and ongoing support for everything we build.</p>
        </Container>
      </section>

      {/* 03 WHO WE ARE */}
      <section aria-labelledby="who-title" className="border-b">
        <Container className="flex flex-col gap-10 py-24">
          <SectionHeader
            id="who-title"
            eyebrow="03 — Who we are"
            title="Building websites and apps since 2020. Now we build AI into them."
          />
          <div className="flex max-w-3xl flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
            <p>NutMag Labs is a two-person studio. For years we built websites, online stores and apps for small businesses, clinics and retailers.</p>
            <p>Our clients kept asking for one more thing: AI that could actually do work inside their business. So we started building it, and NutMag Labs is the result.</p>
            <p className="text-foreground">That background is why our AI comes with a real product around it — proper apps, dashboards and integrations, not just a chat window.</p>
          </div>
          <h3 className="mt-4 text-sm font-medium text-muted-foreground">Working with us</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workingWithUs.map((w) => (
              <div key={w.title} className="flex flex-col gap-3 border-t pt-6">
                <w.icon className="size-5 text-brand" aria-hidden="true" />
                <h4 className="font-semibold">{w.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 04 INDUSTRIES */}
      <section id="industries" aria-labelledby="industries-title" className="scroll-mt-16 border-b bg-surface">
        <Container className="flex flex-col gap-12 py-28">
          <SectionHeader
            side
            id="industries-title"
            eyebrow="04 — Industries"
            title="AI automation built for your industry."
            intro="Different industries, same bottleneck: skilled people stuck doing repetitive work."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Card key={ind.title} className="gap-3.5 px-6 transition-colors hover:border-white/20 hover:bg-accent/40">
                <span className="flex size-10 items-center justify-center rounded-lg border bg-background text-brand">
                  <ind.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold">
                  {ind.href ? (
                    <Link href={ind.href} className="hover:underline hover:underline-offset-4">{ind.title}</Link>
                  ) : (
                    ind.title
                  )}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 05 APPROACH */}
      <section aria-labelledby="approach-title" className="border-b">
        <Container className="grid items-start gap-14 py-28 lg:grid-cols-2">
          <SectionHeader
            id="approach-title"
            eyebrow="05 — Our approach"
            title="Why our AI agents don't break."
            intro="Anyone can make an AI demo look good. What makes it work every day is the setup around it: your rules, solid connections to your software, people in control and regular checks."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {approach.map((a) => (
              <Card key={a.title} className="gap-3 px-6">
                <a.icon className="size-5 text-brand" aria-hidden="true" />
                <h3 className="font-semibold">{a.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 06 HOW IT WORKS */}
      <section id="how" aria-labelledby="how-title" className="scroll-mt-16 border-b bg-surface">
        <Container className="flex flex-col gap-14 py-28">
          <SectionHeader
            id="how-title"
            eyebrow="06 — How it works"
            title="No pitch decks. A working demo on your problem."
            intro="You tell us what's slowing your business down. We come back with it already solved, in a demo. You decide after you've seen it work."
          />
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n}>
                <Card className={s.highlight ? "h-full gap-4 border-brand px-7 ring-1 ring-brand" : "h-full gap-4 px-7"}>
                  <div className="flex items-center justify-between gap-2">
                    <span className={s.highlight ? "font-mono text-[13px] text-brand" : "font-mono text-[13px] text-muted-foreground"}>
                      STEP {s.n}
                    </span>
                    {s.highlight ? (
                      <Badge className="bg-brand text-brand-foreground">{s.badge}</Badge>
                    ) : (
                      <Badge variant={s.badge === "Free" ? "secondary" : "outline"}>{s.badge}</Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <span className="mt-auto font-mono text-xs text-muted-foreground">{s.time}</span>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 07 CASE STUDIES */}
      <section id="work" aria-labelledby="work-title" className="scroll-mt-16 border-b">
        <Container className="flex flex-col gap-12 py-28">
          <SectionHeader id="work-title" eyebrow="07 — Case studies" title="Real workflows, running in production." />
          <div className="grid gap-4 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <Card key={c.slug} className="group relative gap-0 overflow-hidden py-0 transition-colors hover:border-white/20">
                <div className="flex flex-col gap-1.5 border-b bg-surface p-7">
                  <span className="font-mono text-[44px] leading-none font-medium tracking-tighter text-brand">{c.cardMetric.value}</span>
                  <span className="text-sm text-muted-foreground">{c.cardMetric.label}</span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-7">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{c.industry}</Badge>
                    <Badge variant="outline">{c.type}</Badge>
                  </div>
                  <h3 className="text-lg leading-snug font-semibold">
                    <Link href={`/case-studies/${c.slug}`} className="after:absolute after:inset-0 group-hover:underline group-hover:underline-offset-4">
                      {c.cardTitle}
                    </Link>
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.cardBody}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* TOOLS */}
      <section aria-labelledby="tools-title" className="border-b bg-surface">
        <Container className="grid items-center gap-10 py-20 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h2 id="tools-title" className="text-3xl font-semibold tracking-tight">Integrates with the systems you already run on.</h2>
            <p className="leading-relaxed text-muted-foreground">
              No new software for your team to learn. Your agents work inside your CRM, accounting, inbox, calendar and messaging.
            </p>
          </div>
          <ToolBadges items={tools} />
        </Container>
      </section>

      {/* 08 FAQ */}
      <section id="faq" aria-labelledby="faq-title" className="scroll-mt-16 border-b">
        <Container className="flex flex-col gap-12 py-28">
          <SectionHeader
            side
            id="faq-title"
            eyebrow="08 — FAQ"
            title="AI automation, answered."
            intro="The questions business owners ask us most before getting started."
          />
          <FaqAccordion items={homeFaqs} />
        </Container>
        <JsonLd data={faqJsonLd(homeFaqs)} />
      </section>

      <CtaBand
        title="Show us the process that slows you down."
        sub="We'll come back with it automated."
        body="The discovery call and the demo are both free. If it isn't a good fit for AI, we'll tell you straight."
      />
    </>
  )
}

