import type { Metadata } from "next"
import { MessageCircleIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/blocks"
import { site, whatsappHref } from "@/lib/site"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Book a Free AI Automation Consultation",
  description:
    "Book a free 30-minute call with NutMag Labs. Tell us about a business process and get a free working demo of an AI agent built for it, plus a fixed quote.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book a Free AI Automation Consultation | NutMag Labs",
    description: "Free 30-minute discovery call, then a free working demo of AI built for your business.",
    url: "/contact",
  },
}

const steps = [
  { n: "01", h: "30-minute discovery call", p: "You walk us through the process, the systems involved and a real example. Scheduled in your time zone." },
  { n: "02", h: "We build a working demo on your problem", p: "Usually within a week, using your real example and your rules." },
  { n: "03", h: "Demo call & fixed quote", p: "See it running, ask anything, and get a fixed price to take it live. Decide in your own time." },
]

export default function ContactPage() {
  return (
    <Container className="grid items-start gap-16 py-20 lg:grid-cols-2">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-5">
          <Badge variant="outline" className="self-start">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
            Free call · Free demo · No obligation
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tighter text-balance md:text-6xl md:leading-[1.04]">
            Book a free AI automation consultation.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Tell us about the process that slows your business down. Next time we meet, you&apos;ll see it automated.
          </p>
        </div>

        <ol className="flex flex-col border-b">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-4 border-t py-4.5">
              <span className="pt-0.5 font-mono text-xs text-brand">{s.n}</span>
              <div className="flex flex-col gap-1">
                <span className="font-medium">{s.h}</span>
                <span className="text-sm leading-relaxed text-muted-foreground">{s.p}</span>
              </div>
            </li>
          ))}
        </ol>

        <Card className="gap-4 px-6">
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-brand">
              <MessageCircleIcon className="size-4.5" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="font-medium">Prefer to chat?</span>
              <span className="text-sm text-muted-foreground">Message us on WhatsApp — we usually reply the same day.</span>
            </div>
          </div>
          <Button asChild variant="outline" size="lg" className="w-full">
            <a href={whatsappHref()}>Chat on WhatsApp</a>
          </Button>
        </Card>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <span>
            Email:{" "}
            <a href={`mailto:${site.email}`} className="text-foreground underline underline-offset-4">
              {site.email}
            </a>
          </span>
          <span>Remote studio · working with clients in the US, UK, Europe, the Middle East and Asia-Pacific</span>
        </div>
      </div>

      <ContactForm />
    </Container>
  )
}
