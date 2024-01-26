"use client";
import Star from "@/assets/icons/star.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import ACCORDION_DATA from "@/components/data/ACCORDION_DATA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const COLORS: { name: string; value: string }[] = [
  { name: "black", value: "#030303" },
  { name: "maroon", value: "#D43A55" },
  { name: "blue", value: "#0036C3" },
  { name: "silver", value: "#E0E0E0" },
];

export const Sidebar = () => {
  const [color, setColor] = useState<string>("black");

  return (
    <div className="w-[500px] bg-white pt-[71px] pr-[49px] pl-12 pb-[42px] shrink-0">
      <div className="h-6 bg-evGreen/20 w-fit px-2 rounded-full grid place-items-center text-overline tracking-[1px] uppercase text-blue1 font-semibold">
        New
      </div>
      <h4 className="text-h4 text-primaryText mt-[9px] mb-2 leading-[41px]">
        2021 Tesla Model 3
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
      <p className="text-subtitle2 mb-[18px]">Colour</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {COLORS.map(({ name, value }) => (
            <div
              key={name}
              className={`h-9 w-9 ${
                color === name && "border"
              } grid place-items-center rounded-full border-evGreen`}
            >
              <div
                style={{ backgroundColor: value }}
                className="w-7 h-7 rounded-full border"
                onClick={() => setColor(name)}
              />
            </div>
          ))}
        </div>
        <p className="text-overline uppercase mt-[2px] text-primaryText tracking-[1px]">
          {color}
        </p>
      </div>
      <Button className="w-full h-[62px] mt-16 text-subtitle2 bg-blue1 text-evGreen  hover:bg-blue1/90">
        Order Now
      </Button>
      <p className="text-center text-disabledText mt-6 mb-[72px]">
        Estimated within 16 Aug – 23 Aug
      </p>
      <h5 className="text-h5 font-medium mb-6">
        Tesla believes in accelerating the world&apos;s transition to
        sustainable energy with electric cars.
      </h5>
      <Link
        href="#"
        className="text-body1 text-blue1 underline tracking-[0.15px]"
      >
        View the Tesla collection
      </Link>
      <Accordion type="multiple" className="mt-10">
        {ACCORDION_DATA.map((data, i) => (
          <AccordionItem
            key={data.title}
            className="border-b-0 border-t-[0.5px] border-grey-400"
            value={`item-${i + 1}`}
          >
            <AccordionTrigger className="p-0 pt-[22px] pb-8">
              {data.title}
            </AccordionTrigger>
            <AccordionContent>{data.value}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};