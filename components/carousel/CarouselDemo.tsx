"use client";

import React, { useRef, ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type CarouselDemoProps = {
  className?: string;
  itemClassName?: string;
  orientation?: "horizontal" | "vertical" | undefined;
  loop?: boolean;
  align?: "start" | "center";
  autoplay?: boolean;
  items?: { [key: string]: string | number | (() => void) }[];
  children: (props: { item: { [key: string]: string | number | (() => void) }; index: number }) => ReactNode;
};

export function CarouselDemo({
  className = "",
  itemClassName = "md:basis-1/2 lg:basis-1/3",
  orientation = "horizontal",
  loop = false,
  align = "start",
  autoplay = false,
  items = [{}, {}, {}, {}],
  children = () => "",
}: CarouselDemoProps) {
  const carouselRef = useRef(null);

  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // Do something on select.
      console.log("trigger");
    });
  }, [api]);

  const autoplayRef = useRef<any>(Autoplay({ delay: 5000 }));

  return (
    <Carousel
      ref={carouselRef}
      setApi={setApi}
      className={`${className} !overflow-visible [&>div]:overflow-visible sm:[&>div]:overflow-hidden select-none`}
      opts={{
        align: align,
        loop: loop,
        duration:100
      }}
      orientation={orientation}
      plugins={autoplay ? [autoplayRef.current] : []}
      onMouseEnter={() => autoplayRef.current?.stop()}
      onMouseLeave={() => autoplayRef.current?.play()}
    >
      <CarouselContent className="-ml-[20px] sm:-ml-[34px] !overflow-visible cursor-pointer">
        {items.map((item, index) => (
          <CarouselItem key={index} className={`pl-[20px] sm:pl-[34px]  max-w-[80vw] sm:max-w-full ${itemClassName}`}>
            <div className="p-1">
            {children({ item, index })}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Arrows */}
      <div className=" relative flex justify-between mt-[1rem]">
        <CarouselPrevious className="left-0 relative translate-0 w-[45px] h-[45px] sm:w-[65px] sm:h-[65px] sm:rounded-xl sm:[&>svg]:!h-[25px] sm:[&>svg]:!w-[25px] text-secondary" />
        <CarouselNext  className="right-0 relative translate-0 w-[45px] h-[45px] sm:w-[65px] sm:h-[65px] sm:rounded-xl sm:[&>svg]:!h-[25px] sm:[&>svg]:!w-[25px] text-secondary"/>
      </div>
    </Carousel>
  );
}
