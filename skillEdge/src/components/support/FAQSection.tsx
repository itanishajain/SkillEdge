import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { faqData } from "@/data/faq";
  
  export function FAQSection() {
    return (
      <div className="w-full max-w-3xl mx-auto space-y-6">
        {faqData.map((category, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">
              {category.category}
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {category.items.map((item, itemIndex) => (
                <AccordionItem key={itemIndex} value={`item-${itemIndex}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    );
  }