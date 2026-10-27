import { NextResponse } from "next/server"

type Payload = {
  name?: string
  business?: string
  email?: string
  phone?: string
  country?: string
  timezone?: string
  goals?: string[]
  message?: string
  slot?: string
}

const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "")

export async function POST(request: Request) {
  let body: Payload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 })
  }

  const data = {
    name: clean(body.name, 200),
    business: clean(body.business, 200),
    email: clean(body.email, 200),
    phone: clean(body.phone, 50),
    country: clean(body.country, 100),
    timezone: clean(body.timezone, 100),
    goals: Array.isArray(body.goals) ? body.goals.map((g) => clean(g, 100)).filter(Boolean).slice(0, 10) : [],
    message: clean(body.message, 5000),
    slot: clean(body.slot, 50),
  }

  if (!data.name || !data.business || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || !data.country) {
    return NextResponse.json({ ok: false, error: "Please fill in your name, business, a valid email and your country." }, { status: 422 })
  }

  const text = [
    `New discovery call request`,
    ``,
    `Name: ${data.name}`,
    `Business: ${data.business}`,
    `Email: ${data.email}`,
    `WhatsApp / phone: ${data.phone || "-"}`,
    `Country: ${data.country}`,
    `Time zone: ${data.timezone || "-"}`,
    `Best time: ${data.slot || "-"}`,
    `Interested in: ${data.goals.join(", ") || "-"}`,
    ``,
    `Process:`,
    data.message || "-",
  ].join("\n")

  // Email delivery via Resend (https://resend.com). Set RESEND_API_KEY and CONTACT_TO_EMAIL in your hosting env.
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (apiKey && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "NutMag Labs <onboarding@resend.dev>",
        to: [to],
        reply_to: data.email,
        subject: `Discovery call request — ${data.business}`,
        text,
      }),
    })
    if (!res.ok) {
      console.error("Resend error", res.status, await res.text())
      return NextResponse.json({ ok: false, error: "We couldn't send your request. Please email us instead." }, { status: 502 })
    }
  } else {
    console.log(text)
  }

  return NextResponse.json({ ok: true })
}
