import {
  AboutCarSection,
  HeroSection,
  SpecSection,
} from "@/components/sections";
import { PageHeader } from "@/components/page-header";
import { ABOUT_CAR_DATA, SPEC_LIST } from "@/constants";
import { Locale } from "@/lib/i18n";

interface IHome {
  params: { lang: Locale };
}

export default async function Home({ params: { lang } }: IHome) {
  return (
    <main className="min-h-screen items-center justify-between w-full text-primaryText">
      <PageHeader lang={lang} />
      <HeroSection lang={lang} />
      <AboutCarSection lang={lang} data={ABOUT_CAR_DATA} />
      <SpecSection lang={lang} data={SPEC_LIST} />
    </main>
  );
}
