'use client'

import React, { useState } from "react";
import localData from "@/localData";

const { placeholderImage, RectangleImage } = localData.images;
const { owlIcon, starIcon } = localData.svgs;

const TestimonialCard = ({ fullName = "", image = placeholderImage, description = "", date = "", className = "", index = 0 }) => {

  return (
    <div
      className={`${className}   card testimonial-card`}
  
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="card-header bg-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl  relative p-[24px] sm:px-[40px] sm:pt-[30px] sm:pb-[40px] mb-[3.5rem]">
        <div className="mb-[1rem]">{owlIcon}</div>

        <p className="font-urbanist font-semibold mb-[1.5rem] sm:text-lg">{description}</p>
        <div className="stars flex gap-1 [&>svg]:w-[18px] sm:[&>svg]:w-[24px]">
          {starIcon}
          {starIcon}
          {starIcon}
          {starIcon}
          {starIcon}
        </div>

        <img className="absolute top-[99%]  left-0 max-w-[43px] " src={RectangleImage} alt="" />
      </div>
      <div className="card-body flex gap-[24px] items-center">
        <img src={image} className="w-[64px] h-[64px] rounded-full" alt="" />
        <div>
          <h4 className=" font-bold font-outfit mb-[0.3rem]">{fullName}</h4>
          <div className="text-sm font-medium font-urbanist">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
