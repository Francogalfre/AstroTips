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
    <div>
      {finalTips.length === 0 ? (
        <div className="text-center py-6 text-gray-300">
          <p>No se encontraron tips que coincidan con tu búsqueda. Intenta con otro término.</p>
        </div>
      ) : (
        <div>
          <Accordion type="single" collapsible defaultValue={`item-${tips[0].id}`} className="px-2">
            {finalTips.map((tip) => (
              <AccordionItem
                value={`item-${tip.id}`}
                key={tip.id}
                className="border-b border-gray-500 pb-10 pt-10 w-full"
              >
                <AccordionTrigger className="text-xl">
                  <Badge variant={"outline"} className="text-gray-300 text-sm sm:text-lg font-medium">
                    Tip {tip.id}
                  </Badge>
                </AccordionTrigger>
                <h2 className="text-white text-2xl sm:text-3xl font-bold">{tip.title}</h2>
                <AccordionContent className="text-base sm:text-xl prose-2xl w-full text-gray-300 whitespace-pre-line">
                  {tip.content}
                  <pre className="prose bg-gray-900 text-white p-2 rounded-xl overflow-auto mt-6 mb-4 w-full">
                    <code className="text-gray-300 text-start text-sm block whitespace-pre-wrap">{tip.example}</code>
                  </pre>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <span className="flex pt-10 pl-2 text-xl text-gray-200">Proximamente nuevos tips...</span>
        </div>
      )}
    </div>
  );
};

export default MyAccordion;
