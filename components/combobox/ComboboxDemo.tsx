"use client";

import React, { ReactElement, useState, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { v4 as uuidv4 } from "uuid";

type ItemsProps = {
  label: string;
  value: string;
  isSelected: boolean;
  startIcon: ReactElement;
  endIcon: ReactElement;
};

type ComboboxDemoProps = {
  label?: React.ReactNode;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  defaultItems: any;
  placeholder?: string;
    errorMessage?: string;
  noSearch?: boolean;
  callback?: (value: object) => void;
};

export function ComboboxDemo({
  label = "",
  className="",
  triggerClassName = "",
  contentClassName = "",
  defaultItems = [],
  placeholder = 'Select',
    errorMessage = "",
  noSearch = false,
  callback = () => {},
}: ComboboxDemoProps) {
  const [items, setItems] = useState<ItemsProps[]>([]);
  const [selectedItem, setSelectedItem] = useState<ItemsProps | null>(null);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  useEffect(() => {
    setItems([...defaultItems]);
    const selectedItem = [...defaultItems].find((item: ItemsProps) => item?.isSelected);
    if (selectedItem) {
      setValue(selectedItem?.value);
      setSelectedItem(selectedItem);
    }
  }, [defaultItems]);

  const [id, setId] = useState("");

    useEffect(() => {
      setId(uuidv4());
    }, []);

  return (
    <div className={`mb-[1rem] ${className}`}>
      <Popover open={open} onOpenChange={setOpen}>
        {label && (
          <Label htmlFor={id} className="mb-[0.5rem]">
            {label}
          </Label>
        )}
        <PopoverTrigger asChild className={` combobox-demo-trigger ${triggerClassName}`}>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={`w-full !py-[22px] !px-[13px] rounded-full text-sm font-normal justify-between ${errorMessage ? 'border-destructive/40': ""}`}
          >
            {selectedItem?.startIcon && <span className="w-[16px] ">{selectedItem.startIcon}</span>}
            <span className={`truncate  flex-1 text-left ${!value ? "text-secondary" : ""}`}>
              {value ? items.find((item) => item.value === value)?.label : placeholder}
            </span>
            {selectedItem?.endIcon && <span className="ml-auto w-[16px] ">{selectedItem.endIcon}</span>}
            <ChevronDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          // side="bottom"
          style={{ minWidth: "var(--radix-popover-trigger-width)" }}
          align="start"
          className={` p-0 combobox-demo-content w-full  max-w-[92vw] ${{ contentClassName }}`}
        >
          <Command>
            {!noSearch && <CommandInput placeholder="Search..." />}
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {items.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setSelectedItem(item);
                      callback(item);
                      setOpen(false);
                    }}
                  >
                    <Check className={cn("ml-auto", value === item.value ? "opacity-100" : "opacity-0")} />
                    {item.startIcon && <span className="w-[16px] ">{item.startIcon}</span>}
                    <span className="combobox-demo-text flex-1">{item.label}</span>
                    {item.endIcon && <span className="ml-auto w-[16px] ">{item.endIcon}</span>}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {/* {errorMessage && <div className="text-destructive/90 absolute text-xs mt-1">{errorMessage}</div>} */}
    </div>
  );
}
