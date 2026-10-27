import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/blocks"

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-5 py-32">
      <span className="font-mono text-sm text-brand">404</span>
      <h1 className="text-4xl font-semibold tracking-tighter">This page doesn&apos;t exist.</h1>
      <p className="text-muted-foreground">It may have moved. Head back home or book a free call.</p>
      <div className="flex gap-3">
        <Button asChild><Link href="/">Back home</Link></Button>
        <Button asChild variant="outline"><Link href="/contact">Book a free call</Link></Button>
      </div>
    </Container>
  )
}
