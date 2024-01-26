"use client";
import { Locale } from "@/lib/i18n";
import { useTranslation } from "@/lib/i18n/client";
import { TableWithHeader } from "../TableWithHeader";
import { Button } from "../ui/button";

interface ISpecSection {
  lang: Locale;
  data: {
    title: string;
    showMore?: boolean;
    link?: string;
    list: {
      [key: string]: string;
    };
  }[];
}

export const SpecSection = ({ lang, data }: ISpecSection) => {
  const { t } = useTranslation(lang);

  return (
    <section className="py-14 px-[82px] bg-[#FBFCFE]">
      <h4 className="text-h4 mb-[42px]">{t("bottomSection.specifications")}</h4>
      <div className="grid grid-cols-3 gap-[106px]">
        {data.map((spec, i) => {
          if (i > 1) return null;
          return <TableWithHeader lang={lang} spec={spec} key={i} />;
        })}
        <div className="flex flex-col gap-14">
          {data.map((spec, i) => {
            if (i < 2) return null;
            return <TableWithHeader lang={lang} spec={spec} key={i} />;
          })}
        </div>
      </div>
      <div className="w-full grid place-items-center mt-[70px]">
        <Button
          className="bg-transparent h-[62px] px-10 text-subtitle2 text-blue1 border-blue1"
          variant={"outline"}
        >
          {t("bottomSection.showAllSpec")}
        </Button>
      </div>
    </section>
  );
};
