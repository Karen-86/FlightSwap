'use client'

import React, { ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import localData from "@/localData";

const { plusIcon, minusIcon } = localData.svgs;

type ItemsProps = {
  trigger: string;
  content: string | ReactNode;
};

type AccordionDemoProps = {
  className?: string;
  triggerClassName?: string;
  items: ItemsProps[];
  type?: "single" | "multiple";
};

export function AccordionDemo({ className = "", triggerClassName = "", items = [], type = "single" }: AccordionDemoProps) {
  /* for multiple type remove collapsible attribute*/
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <Accordion
      type="single"
      {...(type === "single" ? { collapsible: true } : {})}
      className={`accordion-demo ${className} `}
      value={openItem} // <-- controlled value here
      onValueChange={setOpenItem} // <-- controlled handler here
    >
      {items.map((item, index) => {
        const value = `item-${index}`;
        const isOpen = openItem === value;
        return (
          <AccordionItem value={value} key={index} className={`relative px-[25px]  rounded-2xl overflow-hidden mb-[1rem] ${isOpen ? "bg-[rgba(18,65,109,0.03)]" : "bg-[rgba(18,65,109,0.05)]"}  `}>
           <div className={`absolute top-0 left-0 w-full h-full border-l-3 border-r-0  rounded-2xl pointer-events-none ${isOpen ? "border-[#4D8CFF]" : "border-primary"}`}></div>
            <AccordionTrigger className={`${triggerClassName} cursor-pointer flex items-center text-xl !decoration-1 py-[30px]`}>
              {item.trigger}
              <span className="">
                {isOpen ? minusIcon : plusIcon}
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-base text-secondary-2 pb-7">{item.content}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
