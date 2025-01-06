import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { TIPS } from "@/lib/data.ts";

const MyAccordion = () => {
  return (
    <Accordion type="single" collapsible>
      {TIPS.map((tip) => (
        <AccordionItem value={`item-${tip.id}`} key={tip.id} className="border-b border-gray-600 pb-10 pt-10">
          <AccordionTrigger className="text-xl">Tip {tip.id}</AccordionTrigger>
          <h2 className="text-white text-3xl font-bold pb-5">{tip.title}</h2>
          <AccordionContent className="text-xl prose-2xl text-gray-200">{tip.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MyAccordion;
