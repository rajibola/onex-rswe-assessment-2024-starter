"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Car1 from "@/assets/images/car1.png";
import Car2 from "@/assets/images/car2.jpeg";
import Car3 from "@/assets/images/car3.jpeg";
import Car4 from "@/assets/images/car4.jpeg";
import Car5 from "@/assets/images/car5.jpeg";
import Image from "next/image";

const CARS_DATA = [Car1, Car2, Car3, Car4, Car5];

export function CarouselDApiDemo() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="m-auto w-full sticky top-16">
      <Carousel setApi={setApi} className="w-[678px] mx-auto ">
        <CarouselContent>
          {CARS_DATA.map((car, index) => (
            <CarouselItem key={index}>
              <Card className="border-0">
                <CardContent className="flex aspect-square items-center justify-center p-6 h-[387px] w-[678px] border-0">
                  <Image quality={100} src={car} alt={"car" + index} />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-center text-sm text-muted-foreground flex mx-auto gap-4 justify-center mt-[61px]">
        {CARS_DATA.map((car, i) => {
          const isCurrent = i === current - 1;
          return (
            <div
              key={i}
              className={`relative border w-[77px] h-[77px] grid place-items-center rounded-[4px] ${
                isCurrent && "!border-evGreen"
              }`}
            >
              <Image
                width="72"
                height="72"
                className="rounded-[4px]"
                src={car}
                alt={"tesla model " + i}
              />
              <div
                className={`w-full h-full flex  justify-center items-center absolute top-0 bg-cover bg-center bg-gray-300/50 ${
                  isCurrent && "bg-transparent"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
