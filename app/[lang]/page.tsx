import { PageHeader } from "@/app/[lang]/components/page-header";
import Image from "next/image";
import {
  TableWithHeader,
  CustomCarousel,
  Sidebar,
} from "@/app/[lang]/components";
import { Locale, useTranslation } from "@/lib/i18n";
import { Button } from "@/app/[lang]/components/ui/button";
import { ABOUT_CAR_DATA, SPEC_LIST } from "@/constants";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { t } = await useTranslation(lang);

  return (
    <main className="min-h-screen items-center justify-between w-full text-primaryText">
      <PageHeader lang={lang} />
      <section className="bg-[#FBFCFE] w-full flex relative h-fit">
        <div className="w-full">
          <CustomCarousel />
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
        <div className="w-full grid place-items-center mt-[70px]">
          <Button
            className="bg-transparent h-[62px] px-10 text-subtitle2 text-blue1 border-blue1"
            variant={"outline"}
          >
            {t("bottomSection.showAllSpec")}
          </Button>
        </div>
      </section>
    </main>
  );
}
