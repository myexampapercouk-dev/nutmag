import type { QA } from "@/components/blocks"

export type Landing = {
  path: string
  crumbs: { label: string; href?: string }[]
  metaTitle: string
  metaDescription: string
  serviceType: string
  badge: string
  title: string
  lead: string
  primaryCta: string
  secondaryCta: { href: string; label: string }
  featuresTitle: string
  featuresIntro: string
  features: { h: string; p: string; href?: string }[]
  proof: { href: string; title: string; body: string; metric: string; metricLabel: string }
  integrationsTitle?: string
  integrationsBody?: string
  integrations?: string[]
  steps?: { label: string; h: string; p: string; highlight?: boolean }[]
  faqTitle: string
  faqs: QA[]
  ctaTitle: string
  ctaBody: string
}

export const travelAgencies: Landing = {
  path: "/ai-for-travel-agencies",
  crumbs: [{ label: "Home", href: "/" }, { label: "Industries", href: "/#industries" }, { label: "Travel agencies" }],
  metaTitle: "AI Agents for Travel Agencies",
  metaDescription:
    "AI that turns trip requests into priced itineraries, books travel, collects documents and supports travellers 24/7. See a free demo.",
  serviceType: "AI agents for travel agencies",
  badge: "AI for travel agencies",
  title: "AI agents that plan, book and support every trip.",
  lead: "NutMag Labs builds custom AI agents for travel agencies. They turn trip requests into priced itineraries, handle bookings and changes, collect travel documents and look after travellers 24/7, so your team can focus on the trips that need a person.",
  primaryCta: "Get a free demo on a real trip request",
  secondaryCta: { href: "/case-studies/travel-agency-ai-app", label: "See the Wanderdesk case study" },
  featuresTitle: "How AI helps a travel agency",
  featuresIntro: "Start with the part of the trip that takes your team the most time, then add the rest.",
  features: [
    { h: "Instant itinerary quotes", p: "A request like \"5 days, family of four, mid-range budget\" becomes a priced day-by-day plan in minutes." },
    { h: "Bookings, changes and cancellations", p: "Flights, hotels, cabs and tours booked through your systems, with changes handled in the same chat." },
    { h: "Documents and visas", p: "Passports and visa papers collected, checked for missing details, and visa status tracked for you." },
    { h: "Quotes, invoices and payments", p: "Invoices sent, part-payments taken and refunds processed without manual follow-up." },
    { h: "24/7 traveller support", p: "Tickets and vouchers delivered on time, and delays or emergencies handled at any hour, with staff alerted." },
    { h: "Reviews and repeat trips", p: "Reviews collected after every trip and personalised offers sent for the next one." },
  ],
  proof: {
    href: "/case-studies/travel-agency-ai-app",
    title: "Wanderdesk: an AI app that runs the whole trip for a travel agency",
    body: "Travellers plan, book, pay and get help on WhatsApp or the web, while staff oversee every trip from one dashboard.",
    metric: "< 2 min",
    metricLabel: "from a trip request to a priced itinerary",
  },
  integrationsTitle: "Works with the systems you already use",
  integrationsBody: "No need to change your booking or accounting tools. The agent connects to them through secure API integrations.",
  integrations: ["WhatsApp", "Email & SMS", "Flight booking systems (GDS)", "Hotel APIs", "Visa portals", "Payment gateways", "CRM", "Zoho & accounting software", "Google Maps"],
  faqTitle: "AI for travel agencies: common questions",
  faqs: [
    { q: "How can AI help a travel agency?", a: "AI agents handle repetitive work across the trip: quotes, bookings, documents, payments and traveller support, so agents spend time on complex trips and sales." },
    { q: "Can an AI agent book flights and hotels?", a: "Yes. It connects to your flight and hotel booking systems and can also handle changes and cancellations within your rules." },
    { q: "Does it work on WhatsApp?", a: "Yes. Travellers can use WhatsApp, your website or an app, and staff see every conversation in one dashboard." },
    { q: "Do we need to change our booking software?", a: "No. The agent connects to the tools you already use, including your CRM and accounting software." },
    { q: "How much does AI for a travel agency cost?", a: "You get a fixed quote after a free demo built on one of your real trip requests, so you know the full price before committing." },
    { q: "What happens if a traveller needs a person?", a: "The agent hands the conversation to your team with the full trip details, so the traveller never repeats themselves." },
  ],
  ctaTitle: "Send us one real trip request.",
  ctaBody: "We'll come back with a working demo that quotes it. The call and the demo are free.",
}

export const shopifyStores: Landing = {
  path: "/ai-for-shopify-stores",
  crumbs: [{ label: "Home", href: "/" }, { label: "Industries", href: "/#industries" }, { label: "Shopify stores" }],
  metaTitle: "AI Chatbot & Product Assistant for Shopify",
  metaDescription:
    "A Shopify AI assistant that answers from your live catalogue, shows stock and prices, and hands ready buyers to your team. Free demo on your store.",
  serviceType: "Shopify AI product assistant",
  badge: "AI for Shopify & WooCommerce stores",
  title: "A Shopify AI assistant that knows your products.",
  lead: "NutMag Labs builds AI product assistants for online stores. They answer shoppers from your live Shopify catalogue — stock, current prices, sizes and photos — handle order questions, and hand ready-to-buy customers to your team on WhatsApp.",
  primaryCta: "Get a free demo on your store",
  secondaryCta: { href: "/case-studies/jewellery-ai-assistant", label: "See the jewellery store case study" },
  featuresTitle: "Not a FAQ bot. A salesperson for your store.",
  featuresIntro: "Generic Shopify chatbots answer from fixed FAQs. Ours reads your live store and moves shoppers toward checkout.",
  features: [
    { h: "Answers from live stock and prices", p: "Every answer comes straight from your catalogue, so it's never out of date." },
    { h: "Guided product search", p: "Asks the right questions — style, size, budget, occasion — and shows matching products with photos." },
    { h: "Order and returns support", p: "\"Where is my order?\" and return requests handled from your order data, within your policies." },
    { h: "Hand-off to your team", p: "Ready buyers and special requests go to staff on WhatsApp with a summary of the conversation." },
    { h: "Website and WhatsApp", p: "The same assistant works in your store's chat and on WhatsApp, where many shoppers prefer to ask." },
    { h: "Maintained for you", p: "We host, monitor and improve it every month, or hand it over for your team to run." },
  ],
  proof: {
    href: "/case-studies/jewellery-ai-assistant",
    title: "A jewellery store's customers browse live inventory just by asking",
    body: "Built on Shopify, the assistant searches by metal, style and budget, shows current prices and photos, and passes ready buyers to staff on WhatsApp.",
    metric: "3k+",
    metricLabel: "customer questions answered per month without staff",
  },
  steps: [
    { label: "STEP 01 · Free", h: "Discovery call", p: "Show us your store and the questions shoppers ask most." },
    { label: "STEP 02 · Free", h: "Demo on your catalogue", p: "We connect a working assistant to your products and show it live, then give you a fixed quote.", highlight: true },
    { label: "STEP 03 · Fixed price", h: "Build & launch", p: "Tested on real shopper questions, then launched on your store and WhatsApp." },
  ],
  faqTitle: "Shopify AI assistant: common questions",
  faqs: [
    { q: "What can an AI chatbot do for a Shopify store?", a: "It answers product questions from live stock and prices, recommends products, handles order and return questions, and passes ready buyers to your team." },
    { q: "Does it work with WooCommerce too?", a: "Yes. We build the same assistant for WooCommerce and other platforms that share product and order data." },
    { q: "Will it slow down my store?", a: "No. The chat loads separately from your store pages, so your page speed stays the same." },
    { q: "Can it give wrong prices?", a: "It only quotes prices read live from your store and never invents products or discounts." },
    { q: "How much does a Shopify AI assistant cost?", a: "You get a fixed quote after a free demo on your own catalogue, so you see it working before you pay anything." },
    { q: "Can you also build or redesign my store?", a: "Yes. We build Shopify and WooCommerce stores with the AI assistant designed in from the start." },
  ],
  ctaTitle: "See it working on your own store.",
  ctaBody: "We'll build a free demo connected to your catalogue. No obligation.",
}

export const salesAssistants: Landing = {
  path: "/solutions/sales-product-assistants",
  crumbs: [{ label: "Home", href: "/" }, { label: "AI solutions", href: "/#solutions" }, { label: "Sales & product assistants" }],
  metaTitle: "AI Sales & Product Assistants",
  metaDescription:
    "Custom AI sales assistants that know your products, live stock and pricing, on your website and WhatsApp. Built and maintained for you.",
  serviceType: "AI sales and product assistants",
  badge: "AI sales & product assistants",
  title: "An AI assistant that knows your products as well as your best salesperson.",
  lead: "NutMag Labs builds custom AI sales assistants that answer customers from your live catalogue, stock and pricing, guide them to the right product, and pass ready buyers to your team — on your website and WhatsApp, around the clock.",
  primaryCta: "Get a free demo",
  secondaryCta: { href: "/case-studies/jewellery-ai-assistant", label: "See a real example" },
  featuresTitle: "What an AI sales assistant does",
  featuresIntro: "Most questions before a purchase are about availability, price and fit. An assistant connected to your live data answers them instantly and accurately.",
  features: [
    { h: "Answers from your live catalogue", p: "Stock, prices, specs and photos pulled in real time, so answers are never out of date." },
    { h: "Guides buyers to the right product", p: "Asks the right questions to narrow choices by need, style and budget, then shows the best matches." },
    { h: "Hands over ready buyers", p: "Your team gets the customer and the full conversation on WhatsApp or in your CRM." },
    { h: "Follows your rules", p: "Never invents a product, price or discount, and routes custom requests to a person." },
    { h: "Online stores", p: "Shopify and WooCommerce stores with large or changing catalogues.", href: "/ai-for-shopify-stores" },
    { h: "Showrooms, listings and packages", p: "Jewellery, furniture and fashion retail, property listings and travel packages.", href: "/ai-for-travel-agencies" },
  ],
  proof: {
    href: "/case-studies/jewellery-ai-assistant",
    title: "Jewellery store AI assistant",
    body: "Answers customers from the live Shopify catalogue and hands ready buyers to staff on WhatsApp.",
    metric: "3k+",
    metricLabel: "customer questions answered per month without staff",
  },
  integrationsTitle: "Connects to your store, chat and CRM",
  integrationsBody: "The assistant works with the tools you already sell through.",
  integrations: ["Shopify", "WooCommerce", "Your website", "WhatsApp Business", "HubSpot", "Zoho CRM"],
  faqTitle: "AI sales assistants: common questions",
  faqs: [
    { q: "What is an AI sales assistant?", a: "An AI agent that answers customer questions from your live product data, recommends products and hands ready buyers to your sales team." },
    { q: "How is it different from a chatbot?", a: "A chatbot answers from fixed FAQs. A sales assistant reads your live stock and prices, follows your rules and takes actions like handing off a buyer." },
    { q: "Can it work on WhatsApp?", a: "Yes. The same assistant can run on your website chat and WhatsApp Business." },
    { q: "How much does it cost?", a: "Every project gets a fixed quote after a free demo built on your own products, so you know the price before committing." },
  ],
  ctaTitle: "See it working on your products.",
  ctaBody: "Book a free discovery call and we'll build a working demo on your own catalogue.",
}
