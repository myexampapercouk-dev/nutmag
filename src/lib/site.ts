export const site = {
  name: "NutMag Labs",
  url: "https://nutmaglabs.xyz",
  tagline: "AI automation studio for growing businesses",
  description:
    "NutMag Labs is an AI automation studio building custom AI agents and AI-powered websites, stores and apps for growing businesses. Get a free demo.",
  email: "brrrypto@gmail.com",
  // TODO: replace with your real WhatsApp number in international format, digits only (e.g. "15550100000")
  whatsappNumber: "",
}

export function whatsappHref(text = "Hi NutMag Labs, I'd like to talk about an AI project.") {
  const base = site.whatsappNumber ? `https://wa.me/${site.whatsappNumber}` : "/contact"
  return site.whatsappNumber ? `${base}?text=${encodeURIComponent(text)}` : base
}

export const mainNav = [
  { href: "/#solutions", label: "AI solutions" },
  { href: "/#build", label: "What we build" },
  { href: "/#industries", label: "Industries" },
  { href: "/#how", label: "How it works" },
  { href: "/#work", label: "Case studies" },
  { href: "/blog", label: "Blog" },
]
