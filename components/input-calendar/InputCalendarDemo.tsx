"use client";

import React, { useState, useEffect } from "react";
import { CalendarIcon, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { v4 as uuidv4 } from "uuid";
import localData from "@/localData";

const {calendarIcon} = localData.svgs

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

export function InputCalendarDemo({
  label = "",
  className = '',
  triggerClassName = "",
  inputClassName = "",
  contentClassName = "",
  placeholder = "Select",
  callback = () => {},
  defaultValue = undefined,
  ...props
}: any) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(defaultValue);
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [value, setValue] = React.useState(formatDate(date));

  const [id, setId] = useState("");

  useEffect(() => {
    setId(uuidv4());
  }, []);

  return (
    <div className={`mb-[1rem] ${className}`}>
      {label && (
        <Label htmlFor={id} className="mb-[0.5rem]">
          {label}
        </Label>
      )}
      {/* <Input
        id="date"
        value={value}
        placeholder={placeholder}
        className="bg-background !py-[21px] !px-[13px] rounded-full"
        onChange={(e) => {
          const date = new Date(e.target.value);
          setValue(e.target.value);
          if (isValidDate(date)) {
            setDate(date);
            setMonth(date);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      /> */}
      <div className="relative flex gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild className={`${triggerClassName} `}>
            <div className="relative w-full">
              <Input
                {...props}
                id="date"
                value={value}
                placeholder={placeholder}
                readOnly
                className={`text-sm bg-background !py-[22px] !px-[13px] rounded-full cursor-pointer pr-10`}
                onClick={() => setOpen(true)}
              />
              {/* <CalendarCheck className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground cursor-pointer" /> */}
              <span className="absolute top-1/2 right-3 size-4 -translate-y-1/2 cursor-pointer">{calendarIcon}</span>
            </div>

            {/* <Button id="date-picker" variant="ghost" className="absolute top-1/2 right-2 size-6 !p-0 -translate-y-1/2">
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Select date</span>
            </Button> */}
          </PopoverTrigger>
          <PopoverContent
            className={`w-auto overflow-hidden p-0 ${contentClassName}`}
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              classNames={{
                day: "[&>button]:text-sm",
              }}
              onSelect={(date) => {
                callback(date);

                setDate(date);
                setValue(formatDate(date));
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
