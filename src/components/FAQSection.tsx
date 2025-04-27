import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQSectionProps = {
  title: string;
  id?: string;
  faqs: { question: string; answer: string }[];
};

export default function FAQSection({ id, title, faqs }: FAQSectionProps) {
  return (
    <section>
      <h3
        id={id}
        className="text-2xl lg:text-3xl font-bold pt-48 sm:pt-80 text-center lg:pt-40 mb-[18px] lg:mb-[43px]"
      >
        {title}
      </h3>

      <div className="text-lg lg:text-xl mt-[15px] lg:mt-[26px]">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`${index}`}>
              <AccordionTrigger className="font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
