"use client"

import { faqs } from "@/data/contact/faq"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Icon, HelpCircle } from "@/components/shared/icons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQContact() {
  return (
    <section className="w-full bg-muted/30 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-6">
            <div className="flex justify-center">
              <Separator className="w-16 h-0.5 bg-primary/40" />
            </div>
            <Badge className="gap-1.5 px-3 py-1 h-auto text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15 transition-colors">
              <Icon icon={HelpCircle} size="sm" color="primary" />
              <span>Foire aux questions</span>
            </Badge>
            <h2 className="text-3xl font-heading font-bold tracking-tight text-foreground sm:text-4xl">
              Questions Fréquentes
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base">
              Retrouvez les réponses aux questions les plus posées sur le traitement de vos commandes, nos certifications et nos solutions d&apos;hygiène.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-card hover:bg-muted/30 border border-muted/60 rounded-xl px-5 sm:px-6 shadow-sm hover:shadow-md transition-all duration-300 [&[data-state=open]]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground text-base sm:text-lg hover:no-underline py-5 group/trigger">
                  <span className="pr-4 group-hover/trigger:text-primary transition-colors duration-200">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base pb-5 bg-muted/10 -mx-5 sm:-mx-6 px-5 sm:px-6 border-t border-muted/50 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
