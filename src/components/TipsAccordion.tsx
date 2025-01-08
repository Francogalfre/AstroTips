import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion.tsx";
import { Badge } from "./ui/badge.tsx";

import type { Tip } from "@/lib/data.ts";

const MyAccordion = ({ tips }: { tips: Tip[] }) => {
  const searchParams = new URLSearchParams(window.location.search);

  const filteredTips = tips.filter((tip) =>
    tip.title.toLowerCase().includes(searchParams.get("search")?.toLowerCase() ?? "")
  );

  const finalTips = !searchParams.get("search") ? tips : filteredTips;

  return (
    <Accordion type="single" collapsible defaultValue={`item-${tips[0].id}`}>
      {finalTips.map((tip) => (
        <AccordionItem value={`item-${tip.id}`} key={tip.id} className="border-b border-gray-500 pb-10 pt-10">
          <AccordionTrigger className="text-xl">
            <Badge variant={"outline"} className="text-gray-300 text-lg font-medium">
              Tip {tip.id}
            </Badge>
          </AccordionTrigger>
          <h2 className="text-white text-3xl font-bold">{tip.title}</h2>
          <AccordionContent className="text-xl prose-2xl text-gray-300 whitespace-pre-line">
            {tip.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MyAccordion;
