import { faqs } from "@/data/contact/faq"
import { Badge } from "@/components/ui/badge"
import { Icon, HelpCircle } from "@/components/shared/icons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface FAQContactProps {
  className?: string
}

export function FAQContact({ className }: FAQContactProps) {
  return (
    <section className={cn("w-full bg-surface py-12 lg:py-16", className)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-6">
              <Badge variant="subtle">
              <Icon icon={HelpCircle} size="sm" color="primary" />
              <span>Foire aux questions</span>
            </Badge>
            <h2 className="h-title">
               Questons{" "}
          <span className="text-gradient">
            Fréquemment
          </span>
          .
            </h2>
            <p className="section-description">
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
