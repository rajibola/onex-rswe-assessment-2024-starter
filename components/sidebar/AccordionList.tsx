"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Locale } from "@/lib/i18n";
import { useTranslation } from "@/lib/i18n/client";

export const AccordionList = ({
  lang,
  data,
}: {
  lang: Locale;
  data: {
    title: string;
    value: string;
  }[];
}) => {
  const { t } = useTranslation(lang);
  return (
    <Accordion type="multiple" className="mt-10">
      {data.map((data, i) => (
        <AccordionItem
          key={data.title}
          className="border-b-0 border-t-[0.5px] border-grey-400"
          value={`item-${i + 1}`}
        >
          <AccordionTrigger className="p-0 pt-[22px] pb-8">
            {t("sidebar." + data.title)}
          </AccordionTrigger>
          <AccordionContent>{t("sidebar.teslaBelieves")}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
