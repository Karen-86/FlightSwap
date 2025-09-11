"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";

type InputDemoProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  inputClassName?: string;
  label?: ReactNode;
  callback?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  successMessage?: string;
  endIcon?: ReactNode;
};

export function InputDemo({
  className = "",
  inputClassName = "",
  label = "",
  callback = () => {},
  successMessage = "looks good",
  errorMessage = "",
  endIcon = null,
  ...props
}: InputDemoProps) {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(uuidv4());
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    callback(e);
  };

  return (
    <div className={`field mb-[1rem]  ${className}`}>
      {label && (
        <Label htmlFor={id} className="mb-[0.5rem]">
          {label}
        </Label>
      )}
      <div className="relative">
        <Input
          id={id}
          {...props}
          onChange={onChange}
          className={`${inputClassName} text-sm bg-white rounded-full !py-[22px] !px-[13px] ${endIcon ? "!pr-10" : ""}`}
        />
        {endIcon && <div className="absolute top-1/2 -translate-y-1/2 right-3 ">{endIcon}</div>}
        {/* <div className="valid-feedback text-green-600 text-sm">{successMessage}</div> */}
        {/* <div className="invalid-feedback text-destructive/90 absolute text-xs mt-1">{errorMessage}</div> */}
      </div>
    </div>
  );
}
