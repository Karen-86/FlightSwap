'use client'

import React, { useState } from "react";
import Image from "next/image";
import localData from "@/localData";
import { motion } from "framer-motion";

const { placeholderImage } = localData.images;

const ReasonCard = ({ image = placeholderImage, title = "", description = "", className = "", index = 0 }) => {
  const [inView, setIsInView] = useState(false);

  return (
    <motion.div
      className={`${className} ${
        inView ? "lazy-animate" : ""
      } relative card reason-card rounded-4xl px-[10px] sm:px-[30px] pt-[30px] pb-[40px] bg-white shadow-[0_5px_10px_rgb(0,0,0,.05)]`}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ amount: 0.3 }}
      data-lazy="fade-up"
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="card-header px-3  mb-[2rem]">
        <div className="">
          <img src={image} className="max-w-[75px] sm:max-w-[95px] mx-auto" alt="" />
        </div>
      </div>
      <div className="card-body">
        <h4 className="card-title text-xl sm:text-2xl font-bold text-center leading-[1.15] mb-[0.5rem]">{title}</h4>
        <p className="card-description sm:text-lg text-secondary text-center">{description}</p>
      </div>
      <div className="illusion bg-white/70 rounded-4xl opacity-80 absolute h-full w-full top-0 left-0 translate-y-[10px]  -z-1"></div>
      <div className="illusion bg-white/50 rounded-4xl opacity-80 absolute h-full w-[90%] top-0 left-1/2 -translate-x-1/2 translate-y-[20px]  -z-1"></div>
    </motion.div>
  );
};

export default ReasonCard;
