import type { QA } from "@/components/blocks"

export type Solution = {
  value: string
  label: string
  title: string
  body: string
  tools: string
  href?: string
  items: { h: string; p: string }[]
}

export const solutions: Solution[] = [
  {
    value: "sales",
    label: "Sales & product assistants",
    title: "An AI assistant that knows your products as well as your best salesperson.",
    body: "It answers customer questions from your live catalogue, checks stock and current pricing, shows photos and details, and passes ready-to-buy customers to your team with the full conversation.",
    tools: "Shopify, WooCommerce, your website, WhatsApp, your CRM",
    href: "/solutions/sales-product-assistants",
    items: [
      { h: "Answers from your live catalogue", p: "Stock, prices, specs and photos pulled in real time, so answers are never out of date." },
      { h: "Guides buyers to the right product", p: "Asks the right questions to narrow choices by need, style and budget." },
      { h: "Hands over ready buyers", p: "Your team gets the customer and the full conversation on WhatsApp or in your CRM." },
    ],
  },
  {
    value: "journey",
    label: "Customer journey automation",
    title: "One agent for the whole customer journey, from enquiry to after-sale.",
    body: "Quotes, bookings, documents, payments and support handled in one connected flow across WhatsApp, web and email, with your staff watching from a dashboard and stepping in when needed.",
    tools: "WhatsApp, email, SMS, booking systems, payment gateway, CRM, accounting",
    items: [
      { h: "Quotes and bookings", p: "Turns a request into a priced proposal, then books it and manages changes and cancellations." },
      { h: "Documents and payments", p: "Collects and checks customer documents, sends invoices, takes part-payments and processes refunds." },
      { h: "Support around the clock", p: "Sends confirmations, handles issues as they happen and follows up for reviews and repeat business." },
    ],
  },
  {
    value: "backoffice",
    label: "Back-office & compliance",
    title: "Paperwork that creates itself, and gets checked before it goes out.",
    body: "Invoices, contracts and operational documents are generated from your templates, cross-checked against each other and your rules, and stopped before anything leaves with an error or an expired certificate.",
    tools: "Email, document storage, e-signature, government portals, accounting and ERP software",
    items: [
      { h: "Documents generated automatically", p: "Built from your templates and data, with no retyping between systems." },
      { h: "Checked before dispatch", p: "Mismatches, missing fields and expiring certificates caught before they cost you." },
      { h: "Contracts and sign-off", p: "Filled from templates, signed digitally and routed for legal review where it is needed." },
    ],
  },
  {
    value: "apps",
    label: "Custom AI apps & platforms",
    title: "AI-powered apps built around your business and everyone in it.",
    body: "When a single agent isn't enough, we build the platform: separate screens for customers, staff and partners, dashboards, payments and live tracking, with AI agents doing the work behind the scenes.",
    tools: "Web and mobile apps, WhatsApp, online payments, live GPS tracking, your existing software",
    items: [
      { h: "A view for every role", p: "Customers, staff, partners and suppliers each see exactly what they need." },
      { h: "Payments and tracking built in", p: "Payments held safely until delivery (escrow), part-payments, live tracking and proof of delivery in one place." },
      { h: "Dashboards for your team", p: "See everything in progress and step in the moment something needs a person." },
    ],
  },
]

export const homeFaqs: QA[] = [
  { q: "What does NutMag Labs do?", a: "We're an AI automation studio. We design, build and maintain custom AI agents that automate business workflows — sales and product assistance, customer journeys, back-office paperwork and compliance — connected to the tools you already use. We also build AI-powered websites, online stores and apps." },
  { q: "Do you build websites and apps too?", a: "Yes. We have been building websites, online stores and web and mobile apps since 2020. Today we build them AI-native, with assistants and automation designed in from the start, or add AI to the site or app you already have." },
  { q: "How is this different from a chatbot?", a: "A chatbot answers questions. Our agents complete work: they follow your business rules, update your CRM and accounting systems, ask for approval when needed and are tested on your real cases before launch." },
  { q: "How much does AI automation cost?", a: "Every project gets a fixed quote after your free demo, based on the workflow we scoped together — so you know the full price before committing. Most projects are a one-time build fee, with an optional monthly care plan." },
  { q: "Is the demo really free?", a: "Yes. After the discovery call we build a working prototype on your real example and show it to you live. There is no charge and no obligation to continue." },
  { q: "Which countries do you work with?", a: "We work remotely with small and mid-sized businesses worldwide, including the US, UK, Europe, the Middle East and Asia-Pacific, and schedule calls in your business hours." },
  { q: "Who owns what you build?", a: "You do. Code, prompts, data and accounts are yours, and we sign an NDA before you share anything." },
  { q: "Is our business data safe?", a: "We use business-grade AI providers that do not train on your data, limit each agent's access to only what it needs, and can host in the region you require." },
  { q: "Do we need a technical team?", a: "No. We handle the setup, integrations and hosting, and train your team to use it. If you have developers, we're happy to work alongside them." },
  { q: "What happens after launch?", a: "You can take over and run it yourself, or join a monthly care plan where we host, monitor and keep improving your agents." },
]
