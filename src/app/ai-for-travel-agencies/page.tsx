import { LandingTemplate, landingMetadata } from "@/components/landing-template"
import { travelAgencies } from "@/content/landings"

export const metadata = landingMetadata(travelAgencies)

export default function Page() {
  return <LandingTemplate l={travelAgencies} />
}
