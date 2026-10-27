import { LandingTemplate, landingMetadata } from "@/components/landing-template"
import { salesAssistants } from "@/content/landings"

export const metadata = landingMetadata(salesAssistants)

export default function Page() {
  return <LandingTemplate l={salesAssistants} />
}
