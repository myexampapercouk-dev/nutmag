"use client"

import Link from "next/link"
import { ArrowRightIcon, Link2Icon } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Solution } from "@/content/home"

export function SolutionsTabs({ solutions }: { solutions: Solution[] }) {
  return (
    <Tabs defaultValue={solutions[0].value} className="gap-4">
      <TabsList className="h-auto! max-w-full flex-wrap justify-start">
        {solutions.map((s) => (
          <TabsTrigger key={s.value} value={s.value} className="h-9 flex-none px-3.5">
            {s.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {solutions.map((s) => (
        <TabsContent key={s.value} value={s.value}>
          <Card className="grid gap-0 py-0 md:grid-cols-2">
            <div className="flex flex-col justify-between gap-6 border-b p-8 md:border-r md:border-b-0 md:p-10">
              <div className="flex flex-col gap-3.5">
                <h3 className="text-2xl font-semibold tracking-tight text-balance md:text-[28px] md:leading-tight">
                  {s.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5 rounded-lg border bg-background px-4 py-3.5 text-sm">
                  <Link2Icon className="size-4 shrink-0 text-brand" aria-hidden="true" />
                  <span>
                    <span className="text-muted-foreground">Connects to: </span>
                    {s.tools}
                  </span>
                </div>
                {s.href && (
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
                  >
                    Learn more about {s.label.toLowerCase()}
                    <ArrowRightIcon className="size-4" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
            <ul className="flex flex-col p-6">
              {s.items.map((it, i) => (
                <li key={it.h} className="flex gap-4 border-b px-4 py-5 last:border-b-0">
                  <span className="pt-0.5 font-mono text-xs text-muted-foreground">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-medium">{it.h}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{it.p}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}
