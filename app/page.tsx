"use client";
import Diesel from "@/assets/icons/diesel.svg";
import Displacement from "@/assets/icons/displacement.svg";
import Miles from "@/assets/icons/miles.svg";
import Transmission from "@/assets/icons/transmission.svg";
import Star from "@/assets/icons/star.svg";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const COLORS: { name: string; value: string }[] = [
  { name: "black", value: "#030303" },
  { name: "maroon", value: "#D43A55" },
  { name: "blue", value: "#0036C3" },
  { name: "silver", value: "#E0E0E0" },
];

const ABOUT_CAR_DATA: { text: string; image: string }[] = [
  { text: "Diesel Fuel", image: Diesel },
  { text: "Automatic Transmission", image: Transmission },
  { text: "11,594 Miles", image: Miles },
  { text: "3.5L Displacement", image: Displacement },
];

export default function Home() {
  const [color, setColor] = useState<string>("black");
  return (
    <main className="min-h-screen items-center justify-between w-full text-primaryText">
      <PageHeader />
      <section className="bg-[#FBFCFE] w-full flex relative h-fit">
        <div className="w-full sticky top-0"></div>
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
            <AccordionItem
              className="border-b-0 border-t-[0.5px] border-grey-400"
              value="item-1"
            >
              <AccordionTrigger className="p-0 pt-[22px] pb-8">
                Description
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border-b-0 border-t-[0.5px] border-grey-400"
              value="item-2"
            >
              <AccordionTrigger className="p-0 pt-[22px] pb-8">
                Product Highlights
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border-b-0 border-t-[0.5px] border-grey-400"
              value="item-3"
            >
              <AccordionTrigger className="p-0 pt-[22px] pb-8">
                Delivery & Warranty
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section className="py-14 px-[82px] bg-[#FBFCFE]">
        <h4 className="text-h4 mb-[42px]">About this car</h4>
        <div className="flex flex-wrap gap-[120px]">
          {ABOUT_CAR_DATA.map(({ image, text }) => (
            <div key={text} className="flex items-center gap-4">
              <Image src={image} alt={text} />
              <p className="text-body1">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
