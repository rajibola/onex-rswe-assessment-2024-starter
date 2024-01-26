import Diesel from "@/assets/icons/diesel.svg";
import Displacement from "@/assets/icons/displacement.svg";
import Miles from "@/assets/icons/miles.svg";
import Transmission from "@/assets/icons/transmission.svg";
import { PageHeader } from "@/app/[lang]/components/page-header";
import Image from "next/image";

import SPEC_LIST from "@/app/[lang]/components/data/SPEC_LIST";
import { Sidebar } from "@/app/[lang]/components/sidebar";
import { TableWithHeader } from "@/app/[lang]/components/table-with-header";
import { CarouselDApiDemo } from "@/app/[lang]/components/carousel";
import { Locale, useTranslation } from "@/lib/i18n";
import { Button } from "./components/ui/button";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { t } = await useTranslation(lang);

  const ABOUT_CAR_DATA: { text: string; image: string }[] = [
    { text: "dieselFuel", image: Diesel },
    { text: "autoTransmission", image: Transmission },
    { text: "miles", image: Miles },
    { text: "displacement", image: Displacement },
  ];

  return (
    <main className="min-h-screen items-center justify-between w-full text-primaryText">
      <PageHeader lang={lang} />
      <section className="bg-[#FBFCFE] w-full flex relative h-fit">
        <div className="w-full sticky top-0">
          <CarouselDApiDemo />
        </div>
        <Sidebar lang={lang} />
      </section>
      <section className="py-14 px-[82px] bg-[#FBFCFE]">
        <h4 className="text-h4 mb-[42px]">{t("bottomSection.aboutThisCar")}</h4>
        <div className="flex flex-wrap gap-[120px]">
          {ABOUT_CAR_DATA.map(({ image, text }) => (
            <div key={text} className="flex items-center gap-4">
              <Image src={image} alt={t(text)} />
              <p className="text-body1">{t("bottomSection." + text)}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-14 px-[82px] bg-[#FBFCFE]">
        <h4 className="text-h4 mb-[42px]">
          {t("bottomSection.specifications")}
        </h4>
        <div className="grid grid-cols-3 gap-[106px]">
          {SPEC_LIST.map((spec, i) => {
            if (i > 1) return null;
            return <TableWithHeader lang={lang} spec={spec} key={i} />;
          })}
          <div className="flex flex-col gap-14">
            {SPEC_LIST.map((spec, i) => {
              if (i < 2) return null;
              return <TableWithHeader lang={lang} spec={spec} key={i} />;
            })}
          </div>
        </div>
      </section>
      <div className="w-full grid place-items-center mb-14">
        <Button
          className="bg-transparent h-[62px] px-10 text-subtitle2 text-blue1 border-blue1 "
          variant={"outline"}
        >
          {t("bottomSection.showAllSpec")}
        </Button>
      </div>
    </main>
  );
}
