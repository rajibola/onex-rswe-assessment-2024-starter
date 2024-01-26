"use client";
import { Locale } from "@/lib/i18n";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/client";

interface IAboutCarSection {
  lang: Locale;
  data: {
    text: string;
    image: string;
  }[];
}

export const AboutCarSection = ({ lang, data }: IAboutCarSection) => {
  const { t } = useTranslation(lang);

  return (
    <section className="py-14 px-[82px] bg-[#FBFCFE]">
      <h4 className="text-h4 mb-[42px]">{t("bottomSection.aboutThisCar")}</h4>
      <div className="flex flex-wrap gap-[120px]">
        {data.map(({ image, text }) => (
          <div key={text} className="flex items-center gap-4">
            <Image src={image} alt={t(text)} />
            <p className="text-body1">{t("bottomSection." + text)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
