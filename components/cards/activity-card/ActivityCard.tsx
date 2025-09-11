'use client'

import React, { useState } from "react";
import Image from "next/image";
import localData from "@/localData";
import { motion } from "framer-motion";

const { placeholderImage, DotsImage } = localData.images;

const ActivityCard = ({ image = placeholderImage, title = "", description = "", className = "", index = 0, button = <></> }) => {
  const [inView, setIsInView] = useState(false);

  return (
    <motion.div
      className={`${className} ${
        inView ? "lazy-animate" : ""
      } flex flex-col card activity-card rounded-4xl border px-[25px] sm:px-[30px] pb-[30px] pt-[30px] bg-white w-[100%] lg:w-[calc(100%/2-24px/2)] shadow-md`}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ amount: 0.3 }}
      data-lazy="fade-up"
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="card-header mb-[2rem] flex-1">
        <h4 className="card-title text-xl sm:text-2xl font-bold leading-[1.15] mb-[0.5rem]">{title}</h4>
        <p className="card-description sm:text-lg text-secondary">{description}</p>
      </div>

      <div
        className="card-body bg-[rgb(246,248,250)] rounded-2xl border border-[rgb(236,239,243)] px-[1rem]  mb-[1rem]"
        style={{ backgroundImage: `url(${DotsImage})`, backgroundSize: "cover" }}
      >
        <div className="max-w-[330px] mx-auto">
          <div className=" relative h-0 pt-[93%] ">
            <Image fill={true} src={image} alt="image" className="absolute top-0 left-0 w-full h-full object-contain" />
          </div>
        </div>
      </div>

      <div className="card-footer">{button}</div>
    </motion.div>
  );
};

export default ActivityCard;
