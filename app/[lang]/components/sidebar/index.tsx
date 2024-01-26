"use client";
import { Button } from "@/components/ui/button";
import Star from "@/assets/svgs/star.svg";
import Image from "next/image";
import Link from "next/link";
import { ACCORDION_DATA, COLORS } from "@/constants";
import { useTranslation } from "@/lib/i18n/client";
import { useState } from "react";
import { AccordionList } from "./AccordionList";
import { Locale } from "@/lib/i18n";
import { ColorPicker } from "./color-picker";

export const Sidebar = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang);
  const [color, setColor] = useState<string>("black");

  return (
    <div className="w-[500px] bg-white pt-[71px] pr-[49px] pl-12 pb-[42px] shrink-0">
      <div className="h-6 bg-evGreen/20 w-fit px-2 rounded-full grid place-items-center text-overline tracking-[1px] uppercase text-blue1 font-semibold">
        {t("sidebar.new")}
      </div>
      <h4 className="text-h4 text-primaryText mt-[9px] mb-2 leading-[41px]">
        {t("sidebar.2021")}
      </h4>
      <p className="flex text-body2 text-primaryText gap-4">
        <span className="text-disabledText">VIN</span>
        JN1AZ0CPOBT009448
      </p>
      <div className="flex gap-1 mt-4 mb-6">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <Image src={Star} alt="star" key={i} />
          ))}
      </div>
      <h5 className="text-h5">$41,103</h5>
      <div className="h-[0.5px] w-full bg-grey-400 my-6" />
      <p className="text-subtitle2 mb-[18px]">{t("sidebar.color")}</p>
      <div className="flex justify-between items-center">
        <ColorPicker onChange={setColor} currentColor={color} colors={COLORS} />
        <p className="text-overline uppercase mt-[2px] text-primaryText tracking-[1px]">
          {t("sidebar.colors." + color)}
        </p>
      </div>
      <Button className="w-full h-[62px] mt-16 text-subtitle2 bg-blue1 text-evGreen  hover:bg-blue1/90">
        {t("sidebar.orderNow")}
      </Button>
      <p className="text-center text-disabledText mt-6 mb-[72px]">
        {t("sidebar.estimated")}
      </p>
      <h5 className="text-h5 font-medium mb-6">{t("sidebar.teslaBelieves")}</h5>
      <Link
        href="#"
        className="text-body1 text-blue1 underline tracking-[0.15px]"
      >
        {t("sidebar.viewTesla")}
      </Link>
      <AccordionList lang={lang} data={ACCORDION_DATA} />
    </div>
  );
};
