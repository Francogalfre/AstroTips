import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion.tsx";
import { Badge } from "./ui/badge.tsx";

import { TIPS } from "../lib/data.ts";

const MyAccordion = () => {
  return (
    <Accordion type="single" collapsible defaultValue={`item-${TIPS[0].id}`}>
      {TIPS.map((tip) => (
        <AccordionItem value={`item-${tip.id}`} key={tip.id} className="border-b border-gray-600 pb-10 pt-10">
          <AccordionTrigger className="text-xl">
            <Badge variant={"outline"} className="text-gray-400 text-lg font-medium">
              Tip {tip.id}
            </Badge>
          </AccordionTrigger>
          <h2 className="text-white text-3xl font-bold">{tip.title}</h2>
          <AccordionContent className="text-xl prose-2xl text-gray-200 whitespace-pre-line">
            {tip.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MyAccordion;
