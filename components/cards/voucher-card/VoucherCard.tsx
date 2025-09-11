'use client'

import React, { useState } from "react";
import Image from "next/image";
import localData from "@/localData";
import { motion } from "framer-motion";

const { placeholderImage } = localData.images;

const VoucherCard = ({ image = placeholderImage, title = "", description = "", className = "", index = 0 }) => {
  const [inView, setIsInView] = useState(false);

  return (
    <motion.div
      className={`${className} ${
        inView ? "lazy-animate" : ""
      } card voucher-card rounded-4xl border px-[25px] sm:px-[30px] pt-[30px] pb-[40px] bg-white sm:w-[calc(100%/2-18px/2)] lg:w-[calc(100%/3-(30px*2)/3)]`}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ amount: 0.3 }}
      data-lazy="fade-up"
       style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="card-header px-3  mb-[2rem]">
        <div className=" relative h-0 pt-[85%]">
          <Image fill={true} src={image} alt="image" className="absolute top-0 left-0 w-full h-full object-contain" />
        </div>
      </div>
      <div className="card-body">
        <h4 className="card-title text-xl sm:text-2xl font-bold text-center leading-[1.15] mb-[0.5rem]">{title}</h4>
        <p className="card-description sm:text-lg text-secondary text-center">{description}</p>
      </div>
    </motion.div>
  );
};

export default VoucherCard;
