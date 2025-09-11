"use client";

import React from "react";
import Image from "next/image";
import localData from "@/localData";
import Link from "next/link";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/useIsMobile";

const { footerCoverImage, logoWhite, bannerImage, bannerSmallImage } = localData.images;
const { whatsappIcon, email2Icon, phone2Icon, patternIcon, arrowRightIcon } = localData.svgs;
// w-[1280px] [@media(min-width:1400px)]:
const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <footer className="flex flex-col text-white mt-[100px]">
      <div className="flex-1 sm:min-h-[100px] lg:min-h-[300px] bg-[length:100%_auto] bg-top bg-no-repeat bg-none lg:bg-[url('/assets/images/rest/clouds-2.png')]">
        <div className="container ">
          <div className="relative">
            <div className="absolute top-0 left-0 translate-y-[-100px] z-50 w-full pt-[312px] lg:pt-[48%]">
              <Image
                fill
                src={isMobile ? bannerSmallImage : bannerImage}
                alt="background image"
                className=" absolute top-0 left-0  w-full h-full object-top object-contain"
              />
              <div className="content absolute top-0 left-0 z-2 w-full pt-[30px] px-1 lg:pt-[50px]">
                <div className="font-bold text-center w-fit mx-auto relative !mb-[0rem] lg:!mb-[0.7rem]  text-[16px] [@media(min-width:460px)]:text-xl [@media(min-width:769px)]:text-[2rem] [@media(min-width:992px)]:text-[3rem] lg:text-[3rem]">
                  <span className="[&>svg]:hidden xl:[&>svg]:block [&>svg]:-mb-4 [&>svg]:-ml-4  sm:[&>svg]:-mb-4 sm:[&>svg]:-ml-6 [&>svg]:w-5 sm:[&>svg]:w-7 inline-block mr-1 sm:mr-2 [&>svg>path]:stroke-white">
                    {patternIcon}
                    Don’t overpay for your next flight.
                  </span>
                </div>

                <p className="text-sm [@media(min-width:460px)]:text-lg lg:text-xl text-white text-center font-medium mb-[1rem] lg:mb-[1.7rem]">
                  Get your personalized quote today.
                </p>

                <div className="btn-group flex justify-center gap-3">
                  <Button
                    className="bg-[rgb(15,35,76)] text-[9px] lg:text-sm xl:text-md uppercase font-semibold !px-4 !py-5 lg:!px-8 lg:!py-8 [&>svg]:!w-[10px]"
                    variant="default"
                  >
                    Get my quote {arrowRightIcon}
                  </Button>
                  <Button
                    className="bg-white hidden [@media(min-width:460px)]:flex text-black [&>svg>path]:stroke-black text-[9px] lg:text-sm xl:text-md uppercase font-semibold !px-4 !py-5 lg:!px-8 lg:!py-8 [&>svg]:!w-[10px]"
                    variant="default"
                  >
                    Sell my voucher {arrowRightIcon}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative pt-[366px]">
        <Image
          fill
          src={footerCoverImage}
          alt="background image"
          className=" absolute bottom-0 left-0 object-cover  object-bottom  h-full"
        />
        <div className="container relative">
          <div className="flex flex-col md:flex-row gap-x-20 gap-y-10 mb-[1.5rem] ">
            <div className="col flex-1">
              <a href="/" className="mb-[2rem] block">
                <img src={logoWhite} alt="" className="logo max-w-[104px] lg:max-w-[175px] h-auto  " />
              </a>

              <p className="text-sm font-normal !text-[rgba(255,255,255,0.5)] leading-[2.0] max-w-[380px]">
                FlightSwap is an independent service and is not affiliated with Delta Air Lines or American Airlines.
              </p>
            </div>

            <div className="flex flex-wrap gap-10 [@media(min-width:460px)]:gap-20">
              <div>
                <h4 className="text-lg font-medium mb-[1rem]">Contact Us</h4>

                <ul>
                  <li className="block mb-[1rem]">
                    <a
                      href="https://wa.me/17423806573"
                      target="_blank"
                      className="text-sm inline-flex items-center gap-2 hover:underline"
                    >
                      <div className="w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center cursor-pointer">
                        {whatsappIcon}
                      </div>
                      WhatsApp
                    </a>
                  </li>

                  <li className="block mb-[1rem]">
                    <a
                      href="mailto:support@qwerty.com"
                      target="_blank"
                      className="text-sm inline-flex items-center gap-2 hover:underline"
                    >
                      <div className="w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center cursor-pointer">
                        {email2Icon}
                      </div>
                      support@qwerty.com
                    </a>
                  </li>

                  <li className="block mb-[1rem]">
                    <a
                      href="tel:+491726433066"
                      target="_blank"
                      className="text-sm inline-flex items-center gap-2 hover:underline"
                    >
                      <div className="w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center cursor-pointer">
                        {phone2Icon}
                      </div>
                      +49 172 6433066
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-medium mb-[1rem]">Help</h4>

                <ul>
                  <li className="mb-[1rem]">
                    <Link href="#/" className="inline-flex items-center text-[#E0E0E0] hover:text-white gap-2">
                      Customer Support
                    </Link>
                  </li>
                  <li className="mb-[1rem]">
                    <Link href="terms-and-conditions" className="inline-flex items-center text-[#E0E0E0] hover:text-white gap-2">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="mb-[1rem]">
                    <Link href="privacy-policy" className="inline-flex items-center text-[#E0E0E0] hover:text-white gap-2">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-1 border-white/16 border-b-0" />

          <div className="bottom">
            <p className="text-center text-sm text-[#FAFAFA] py-10">© Copyright 2025, All Rights Reserved by Web design</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
