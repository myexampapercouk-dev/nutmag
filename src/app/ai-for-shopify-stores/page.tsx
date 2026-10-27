import { LandingTemplate, landingMetadata } from "@/components/landing-template"
import { shopifyStores } from "@/content/landings"

export const metadata = landingMetadata(shopifyStores)

export default function Page() {
  return <LandingTemplate l={shopifyStores} />
}
