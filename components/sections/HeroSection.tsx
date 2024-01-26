import { CustomCarousel } from "@/components/CustomCarousel";
import { Sidebar } from "@/components/sidebar";
import { Locale } from "@/lib/i18n";

interface IHeroSection {
  lang: Locale;
}

export const HeroSection = ({ lang }: IHeroSection) => {
  return (
    <section className="bg-[#FBFCFE] w-full flex relative h-fit">
      <CustomCarousel />
      <Sidebar lang={lang} />
    </section>
  );
};
