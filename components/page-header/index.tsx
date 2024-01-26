"use client";
import EVFYLogo from "@/assets/svgs/evfy-logo.svg";
import Image from "next/image";

import Link from "next/link";
import { CountryDropDown } from "./CountryDropDown";
import { TextNavigationDropDown } from "./TextNavigationDropDown";
import { useTranslation } from "@/lib/i18n/client";
import { Locale } from "@/lib/i18n";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

export const PageHeader = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang);

  return (
    <header className="h-16 px-[120px] flex items-center justify-between sticky top-0 bg-white z-30">
      <div className="flex gap-8 items-center">
        <Image src={EVFYLogo} alt="EVFY logo" />
        <TextNavigationDropDown
          title={t("header.findEVCars")}
          data={components}
        />
        <TextNavigationDropDown
          title={t("header.eVGuides")}
          data={components}
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
