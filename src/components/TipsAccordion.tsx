import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion.tsx";
import { Badge } from "./ui/badge.tsx";

import { Clipboard } from "lucide-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { Tip } from "@/lib/data.ts";

const MyAccordion = ({ tips }: { tips: Tip[] }) => {
  const searchParams = new URLSearchParams(window.location.search);

  const filteredTips = tips.filter((tip) =>
    tip.title.toLowerCase().includes(searchParams.get("search")?.toLowerCase() ?? "")
  );

  const finalTips = !searchParams.get("search") ? tips : filteredTips;

  const handleCopy = (example: string) => {
    navigator.clipboard.writeText(example);
    toast.success("¡Copiado al portapapeles!", {
      style: {
        backgroundColor: "#333",
        color: "#d1d5db ",
        fontSize: "16px",
        padding: "12px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        opacity: 0.8,
      },
      autoClose: 3000,
      position: "top-right",
    });
  };

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
                  <pre className="prose bg-gray-900 text-white p-2 rounded-xl overflow-auto mt-6 mb-4 w-full text-end">
                    <code className="text-gray-300 text-start text-sm block whitespace-pre-wrap">{tip.example}</code>
                    <button
                      className="text-gray-300 hover:text-gray-400 transition-colors p-2 rounded-lg text-sm"
                      onClick={() => handleCopy(tip.example)}
                    >
                      <Clipboard />
                    </button>
                  </pre>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <span className="flex pt-10 pl-2 text-xl text-gray-200">Proximamente nuevos tips...</span>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default MyAccordion;
