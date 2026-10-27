import type { QA, Stat } from "@/components/blocks"

export type CaseStudy = {
  slug: string
  industry: string
  type: string
  extraBadge: string
  metaTitle: string
  metaDescription: string
  cardTitle: string
  cardBody: string
  cardMetric: Stat
  title: string
  lead: string
  stats: Stat[]
  challenge: string[]
  builtTitle: string
  built: { h: string; p: string }[]
  detailTitle: string
  tools: string[]
  details: { h: string; p: string }[]
  faqs: QA[]
  ctaTitle: string
  ctaBody: string
  related: { href: string; label: string }[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "jewellery-ai-assistant",
    industry: "Jewellery retail",
    type: "Website AI agent",
    extraBadge: "Live in production",
    metaTitle: "Jewellery Store AI Assistant: Case Study",
    metaDescription:
      "How we built a Shopify AI assistant for a jewellery retailer that answers 3,000+ customer questions a month without staff.",
    cardTitle: "A jewellery retailer's customers browse live inventory just by asking.",
    cardBody:
      "The agent searches the Shopify catalogue by metal, style and budget, shows photos and current prices, and hands ready-to-buy customers to staff on WhatsApp.",
    cardMetric: { value: "3k+", label: "customer questions answered / month without staff" },
    title: "Jewellery store AI assistant: 3,000+ customer questions answered a month",
    lead: "We built a website AI assistant for a jewellery retailer that answers customers from the store's live Shopify catalogue — stock, current prices, photos and details. It handles more than 3,000 questions a month without staff and passes ready-to-buy customers to the team on WhatsApp.",
    stats: [
      { value: "3k+", label: "customer questions answered per month without staff" },
      { value: "24/7", label: "instant replies, including evenings and holidays" },
      { value: "Live", label: "stock and prices read straight from Shopify" },
    ],
    challenge: [
      "Jewellery buyers ask specific questions: is this piece available, what does it cost today, is there something lighter or within my budget? Staff answered each one by hand, on top of serving customers in store.",
      "Replies were slow at busy times and after hours, and interested buyers drifted away. A standard FAQ chatbot couldn't help, because every answer depended on stock and prices that change daily.",
    ],
    builtTitle: "What we built",
    built: [
      { h: "Understands the request", p: "piece type, metal, style, occasion and budget." },
      { h: "Searches live inventory", p: "in Shopify, so it only suggests pieces that are in stock." },
      { h: "Confirms current prices", p: "straight from the store, never from a stale list." },
      { h: "Shows matching pieces", p: "with photos, details and a link to each product." },
      { h: "Hands over ready buyers", p: "to staff on WhatsApp with a summary of the chat." },
    ],
    detailTitle: "How we built it",
    tools: ["Shopify", "Website chat", "WhatsApp"],
    details: [
      { h: "Real questions first", p: "We collected the questions customers actually ask and used them as the test set." },
      { h: "Connected to the live store", p: "The assistant reads the catalogue through Shopify's API, so nobody updates a separate database." },
      { h: "Clear rules", p: "It answers only from store data, never invents a product or price, and hands custom requests to staff." },
      { h: "Tested before launch", p: "Every weak answer against the test set was fixed before customers saw it." },
    ],
    faqs: [
      { q: "Does this only work on Shopify?", a: "No. The same approach works with WooCommerce and other platforms that let us read product and stock data." },
      { q: "What happens when products or prices change?", a: "Nothing extra. The assistant reads the live store, so changes show up immediately." },
      { q: "Can it handle custom orders?", a: "It collects the details and hands them to staff, because custom work needs a person's judgement and pricing." },
      { q: "Could this work for other retailers?", a: "Yes. Any store where customers ask about availability, specifications and price benefits from the same setup." },
    ],
    ctaTitle: "Want an assistant like this for your store?",
    ctaBody: "Book a free discovery call and we'll build a working demo on your own catalogue.",
    related: [
      { href: "/ai-for-shopify-stores", label: "AI for Shopify stores" },
      { href: "/solutions/sales-product-assistants", label: "Sales & product assistants" },
      { href: "/case-studies/travel-agency-ai-app", label: "Case study: travel agency AI app" },
    ],
  },
  {
    slug: "travel-agency-ai-app",
    industry: "Travel agency",
    type: "AI travel assistant",
    extraBadge: "Custom AI app",
    metaTitle: "Travel Agency AI App: Case Study",
    metaDescription:
      "Wanderdesk: an AI app that plans, books and supports trips end to end for a travel agency, from first request to after-trip follow-up.",
    cardTitle: "Wanderdesk plans, books and supports trips end to end for a travel agency.",
    cardBody:
      "Travellers chat on WhatsApp or the web to get priced itineraries, book flights and hotels, submit visa documents and get help mid-trip. Staff step in from a dashboard.",
    cardMetric: { value: "< 2 min", label: "from trip request to a priced itinerary" },
    title: "Travel agency AI app: from trip request to priced itinerary in under 2 minutes",
    lead: "Wanderdesk is an AI app we built for a travel agency. Travellers chat on WhatsApp or the web to get priced itineraries, book flights, hotels and tours, submit visa documents and get help during the trip, while staff oversee everything from one dashboard.",
    stats: [
      { value: "< 2 min", label: "from a trip request to a priced itinerary" },
      { value: "24/7", label: "traveller support for delays, changes and emergencies" },
      { value: "1 app", label: "for planning, booking, documents, payments and follow-up" },
    ],
    challenge: [
      "Every trip meant hours of back-and-forth: building itineraries by hand, checking prices across booking systems, chasing passports and visa papers, sending invoices and answering calls when travellers hit a delay.",
      "The agency wanted to handle more travellers without adding staff, and give every customer fast answers at any hour.",
    ],
    builtTitle: "What Wanderdesk handles",
    built: [
      { h: "Trip planning", p: "turns a request into a day-by-day itinerary with prices." },
      { h: "Booking", p: "flights, hotels, cabs and tours, plus changes and cancellations." },
      { h: "Documents", p: "collects and checks passports and visa papers, tracks visa status." },
      { h: "Payments", p: "quotes, invoices, part-payments and refunds." },
      { h: "During the trip", p: "sends tickets and vouchers, handles delays around the clock." },
      { h: "Follow-up", p: "collects reviews and sends repeat-trip offers." },
    ],
    detailTitle: "Who uses it, and what it connects to",
    tools: ["WhatsApp", "Email & SMS", "Flight & hotel booking systems", "Visa portals", "Payment gateway", "CRM & accounting", "Maps & weather"],
    details: [
      { h: "Travellers", p: "Plan, book, pay and get help through WhatsApp, the website or the app, any time of day." },
      { h: "Agency staff", p: "See every trip, booking and payment in one dashboard, and step in whenever a traveller needs a person." },
    ],
    faqs: [
      { q: "Does it replace travel agents?", a: "No. It removes the repetitive work so agents can focus on complex trips and the customers who want a person." },
      { q: "Can it book real flights and hotels?", a: "Yes. It connects to flight and hotel booking systems, and handles changes and cancellations too." },
      { q: "What happens in an emergency mid-trip?", a: "The assistant responds immediately and alerts staff, who see the full trip details in the dashboard." },
      { q: "Can a smaller agency start with part of this?", a: "Yes. Many start with itinerary quotes or document collection, then add booking and payments later." },
    ],
    ctaTitle: "Run a travel business?",
    ctaBody: "Book a free discovery call and we'll build a working demo on one of your real trip requests.",
    related: [
      { href: "/ai-for-travel-agencies", label: "AI for travel agencies" },
      { href: "/case-studies/jewellery-ai-assistant", label: "Case study: jewellery store AI assistant" },
      { href: "/case-studies/agri-trade-desk-agent", label: "Case study: Agri-Trade Desk Agent" },
    ],
  },
  {
    slug: "agri-trade-desk-agent",
    industry: "Agri-trade",
    type: "Legal back office",
    extraBadge: "Multi-party platform",
    metaTitle: "Agri-Trade Desk Agent: Case Study",
    metaDescription:
      "An AI back office that generates and checks trade paperwork, tracks compliance and releases escrow payments on proof of delivery.",
    cardTitle: "An Agri-Trade Desk Agent runs the paperwork behind every truckload.",
    cardBody:
      "Invoices, transport documents and contracts are generated and checked automatically, compliance certificates are flagged before they expire, and payments release from escrow on proof of delivery.",
    cardMetric: { value: "100%", label: "of dispatches paperwork-checked before loading" },
    title: "Agri-Trade Desk Agent: AI that runs the paperwork behind every truckload",
    lead: "We built an AI-powered trading platform and back office for agricultural trade. Growers, mills, buyers and transporters trade through one app, while the agent generates and checks every document, flags expiring certificates and releases escrow payments on proof of delivery.",
    stats: [
      { value: "100%", label: "of dispatches paperwork-checked before loading" },
      { value: "4", label: "parties on one platform: growers, mills, buyers and transporters" },
      { value: "Escrow", label: "payments released only on proof of delivery" },
    ],
    challenge: [
      "Agricultural trade runs on paperwork: invoices, transport documents, quality reports, contracts and compliance certificates. One missing or expired document can hold a truck at the gate or delay payment for weeks.",
      "Every party worked from different spreadsheets and phone calls, so nobody could see where an order, a truck or a payment stood.",
    ],
    builtTitle: "What the agent handles",
    built: [
      { h: "Trading", p: "growers and mills list stock; buyers find it and order in the app." },
      { h: "Paperwork", p: "invoices, transport documents and quality reports created and checked before dispatch." },
      { h: "Compliance", p: "verifies tax and food-safety registrations and warns before they expire." },
      { h: "Contracts", p: "filled from templates and signed digitally; legal review stays with a lawyer." },
      { h: "Tracking", p: "each truck tracked live until proof of delivery." },
      { h: "Payments", p: "held in escrow and released on delivery, visible to every party." },
    ],
    detailTitle: "Who uses it, and what it connects to",
    tools: ["WhatsApp, SMS & email", "Tax & transport portals", "Accounting & ERP", "Payments & escrow", "GPS fleet tracking", "Digital ID & e-signature", "Market price feeds"],
    details: [
      { h: "Growers", p: "List produce, accept orders and see payment status, by app, voice or WhatsApp." },
      { h: "Mills", p: "Buy and sell stock with paperwork and quality reports generated automatically." },
      { h: "Buyers", p: "Find verified sellers, order, and pay into escrow with full visibility." },
      { h: "Transporters", p: "Get loads with every document ready, and confirm delivery from the app." },
    ],
    faqs: [
      { q: "Does the AI give legal advice?", a: "No. It prepares contracts from approved templates and checks documents; legal review stays with a qualified lawyer." },
      { q: "How does escrow protect each party?", a: "The buyer's payment is held until proof of delivery, so sellers know the money is there and buyers only pay for what arrives." },
      { q: "What happens when a certificate is about to expire?", a: "The agent warns the owner in advance and blocks dispatches that would go out with expired paperwork." },
      { q: "Can this work for other commodities?", a: "Yes. Any trade with many parties, heavy paperwork and payments tied to delivery fits the same model." },
    ],
    ctaTitle: "Buried in trade paperwork?",
    ctaBody: "Book a free discovery call and we'll build a working demo on one of your real orders.",
    related: [
      { href: "/#solutions", label: "Back-office & compliance automation" },
      { href: "/case-studies/travel-agency-ai-app", label: "Case study: travel agency AI app" },
      { href: "/case-studies/jewellery-ai-assistant", label: "Case study: jewellery store AI assistant" },
    ],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}
