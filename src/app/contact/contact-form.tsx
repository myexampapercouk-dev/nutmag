"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRightIcon, CheckIcon, Loader2Icon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site"

const goalOptions = [
  "Sales & product assistant",
  "Customer journey automation",
  "Back-office & compliance",
  "Custom AI app or platform",
  "AI-powered website or store",
  "Not sure yet",
]
const countries = ["United States", "United Kingdom", "India", "United Arab Emirates", "Saudi Arabia", "Canada", "Australia", "Singapore", "Germany", "Other"]
const timezones = ["US Eastern (ET)", "US Pacific (PT)", "UK (GMT/BST)", "Central Europe (CET)", "Gulf (GST)", "India (IST)", "Singapore (SGT)", "Australia East (AET)"]
const slots = ["Morning", "Afternoon", "Evening"]

type Status = "idle" | "sending" | "sent" | "error"

export function ContactForm() {
  const [goals, setGoals] = React.useState<string[]>([goalOptions[0]])
  const [slot, setSlot] = React.useState(slots[0])
  const [status, setStatus] = React.useState<Status>("idle")
  const [error, setError] = React.useState("")

  const toggleGoal = (g: string) =>
    setGoals((prev) => (prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]))

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    setStatus("sending")
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          business: fd.get("business"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          country: fd.get("country"),
          timezone: fd.get("timezone"),
          message: fd.get("message"),
          goals,
          slot,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.")
      setStatus("sent")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <Card className="items-start gap-5 px-9 py-14" role="status">
        <span className="flex size-12 items-center justify-center rounded-full bg-secondary">
          <CheckIcon className="size-5 text-brand" strokeWidth={2.6} aria-hidden="true" />
        </span>
        <h2 className="text-2xl font-semibold tracking-tight">You&apos;re on our list.</h2>
        <p className="max-w-md leading-relaxed text-muted-foreground">
          We&apos;ll reply the same day with call times in your time zone. Have a real example ready to share — it&apos;s what we&apos;ll build your demo from.
        </p>
        <div className="flex flex-wrap gap-2">
          {goals.map((g) => (
            <Badge key={g} variant="secondary">{g}</Badge>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <Button asChild variant="outline">
            <Link href="/">Back to site</Link>
          </Button>
          <Button variant="ghost" onClick={() => setStatus("idle")}>
            Edit details
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card className="gap-0 overflow-hidden py-0">
      <div className="flex flex-col gap-1.5 border-b px-7 py-6">
        <h2 className="text-lg font-semibold">Tell us a bit about your business</h2>
        <p className="text-sm text-muted-foreground">Takes about a minute. Fields marked * are required.</p>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-6 p-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="name" label="Your name *">
            <Input id="name" name="name" required autoComplete="name" placeholder="Jane Doe" className="h-11" />
          </Field>
          <Field id="business" label="Business name *">
            <Input id="business" name="business" required autoComplete="organization" placeholder="Acme Dental" className="h-11" />
          </Field>
          <Field id="email" label="Email *">
            <Input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@acme.com" className="h-11" />
          </Field>
          <Field id="phone" label="WhatsApp / phone">
            <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 555 010 0000" className="h-11" />
          </Field>
          <Field id="country" label="Country *">
            <NativeSelect id="country" name="country" required defaultValue="" className="h-11 w-full" wrapperClassName="w-full">
              <NativeSelectOption value="" disabled>Select your country</NativeSelectOption>
              {countries.map((c) => (
                <NativeSelectOption key={c} value={c}>{c}</NativeSelectOption>
              ))}
            </NativeSelect>
          </Field>
          <Field id="timezone" label="Time zone">
            <NativeSelect id="timezone" name="timezone" className="h-11 w-full" wrapperClassName="w-full">
              {timezones.map((t) => (
                <NativeSelectOption key={t} value={t}>{t}</NativeSelectOption>
              ))}
            </NativeSelect>
          </Field>
        </div>

        <fieldset className="flex flex-col gap-2.5">
          <legend className="mb-2.5 text-sm font-medium">
            What would you like us to build? <span className="font-normal text-muted-foreground">Pick any</span>
          </legend>
          <div className="flex flex-wrap gap-2">
            {goalOptions.map((g) => {
              const on = goals.includes(g)
              return (
                <button
                  key={g}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleGoal(g)}
                  className={cn(
                    "inline-flex h-9 items-center gap-1.5 rounded-md border px-3 text-[13px] font-medium transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                    on ? "border-white/35 bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                >
                  {on && <CheckIcon className="size-3.5 text-brand" strokeWidth={2.6} aria-hidden="true" />}
                  {g}
                </button>
              )
            })}
          </div>
        </fieldset>

        <Field id="message" label="Describe the process in a few lines" hint="A real example helps us build a better demo for you.">
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="e.g. Enquiries come in from three portals and WhatsApp. Someone copies them into our CRM, follows up by hand and books viewings — leads slip through when we're busy…"
          />
        </Field>

        <fieldset>
          <legend className="mb-2.5 text-sm font-medium">
            Best time for a call <span className="font-normal text-muted-foreground">(your local time)</span>
          </legend>
          <div className="grid grid-cols-3 gap-2">
            {slots.map((s) => (
              <label
                key={s}
                className={cn(
                  "flex min-h-11 cursor-pointer items-center gap-2.5 rounded-lg border px-3.5 text-sm transition-colors has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/50",
                  slot === s ? "border-white/40 bg-input/30 text-foreground" : "text-muted-foreground hover:bg-white/[0.03]",
                )}
              >
                <input
                  type="radio"
                  name="slot"
                  value={s}
                  checked={slot === s}
                  onChange={() => setSlot(s)}
                  className="size-4 accent-[oklch(0.922_0_0)]"
                />
                {s}
              </label>
            ))}
          </div>
        </fieldset>

        {status === "error" && (
          <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/10 px-3.5 py-2.5 text-sm">
            {error} You can also email{" "}
            <a href={`mailto:${site.email}`} className="underline underline-offset-4">{site.email}</a>.
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <span className="text-sm text-muted-foreground">Happy to sign an NDA before the call.</span>
          <Button type="submit" size="lg" disabled={status === "sending"}>
            {status === "sending" ? <Loader2Icon className="animate-spin" /> : null}
            Book my free call
            {status !== "sending" && <ArrowRightIcon />}
          </Button>
        </div>
      </form>
    </Card>
  )
}

function Field({ id, label, hint, children }: { id: string; label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {hint && <span className="text-[13px] text-muted-foreground">{hint}</span>}
    </div>
  )
}
