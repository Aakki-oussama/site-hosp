"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { gammesDetails } from "@/data/gammes/gammes-detail"

interface GammeTabsProps {
  selected: string
  onSelect: (slug: string) => void
}

export function GammeTabs({ selected, onSelect }: GammeTabsProps) {
  return (
    <div className="container-section py-8">
      <Tabs value={selected} onValueChange={onSelect}>
        <div className="overflow-x-auto pb-2">
          <TabsList
            variant="line"
            className="h-auto w-max justify-start rounded-none border-0 bg-transparent p-0 [&_[data-slot=tabs-trigger]]:after:bg-primary"
          >
            <TabsTrigger
              value="tous"
              className="px-4 py-2 text-sm whitespace-nowrap"
            >
              Tous
            </TabsTrigger>
            {gammesDetails.map((gamme) => (
              <TabsTrigger
                key={gamme.slug}
                value={gamme.slug}
                className="px-4 py-2 text-sm whitespace-nowrap"
              >
                {gamme.title}{" "}
                {gamme.highlightedTitle && (
                  <span className="text-gradient">{gamme.highlightedTitle}</span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>
    </div>
  )
}