"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { QA } from "@/components/blocks"

export function FaqAccordion({ items }: { items: QA[] }) {
  const half = Math.ceil(items.length / 2)
  const cols = [items.slice(0, half), items.slice(half)]
  return (
    <div className="grid gap-x-16 md:grid-cols-2">
      {cols.map((col, c) => (
        <Accordion key={c} type="single" collapsible defaultValue={c === 0 ? "faq-0-0" : undefined}>
          {col.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${c}-${i}`}>
              <AccordionTrigger className="min-h-11">{item.q}</AccordionTrigger>
              <AccordionContent className="pr-8 leading-relaxed text-balance text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ))}
    </div>
  )
}
