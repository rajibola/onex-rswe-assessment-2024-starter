"use client";
import EVFYLogo from "@/assets/svgs/evfy-logo.svg";
import Image from "next/image";

import Link from "next/link";
import { CountryDropDown } from "./CountryDropDown";
import { TextNavigationDropDown } from "./TextNavigationDropDown";
import { useTranslation } from "@/lib/i18n/client";
import { Locale } from "@/lib/i18n";
import { TEXT_DROPDOWN } from "@/constants";

export const PageHeader = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang);

  return (
    <header className="h-16 px-[120px] flex items-center justify-between sticky top-0 bg-white z-30">
      <div className="flex gap-8 items-center">
        <Image src={EVFYLogo} alt="EVFY logo" />
        <TextNavigationDropDown
          title={t("header.findEVCars")}
          data={TEXT_DROPDOWN}
        />
        <TextNavigationDropDown
          title={t("header.eVGuides")}
          data={TEXT_DROPDOWN}
        />
      </div>
      <div className="flex gap-8 items-center">
        <CountryDropDown />
        <Link className="text-subtitle2" href={"#"}>
          {t("header.login")}
        </Link>
      </div>
    </header>
  );
};
