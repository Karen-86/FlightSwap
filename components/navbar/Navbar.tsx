"use client";

import React from "react";
import localData from "@/localData";
import { Button } from "../ui/button";
// import { NavigationMenuDemo } from "./NavigationMenuDemo";
// import { SidebarNavigationMenuDemo } from "./SidebarNavigationMenuDemo";

const { logo, partnersImage, whatsappIcon } = localData.images;

// export const navLinks = [
//   { title: "Home", href: "/" },
//   { title: "About", href: "/about" },
//   { title: "Products", href: "/products" },
// ];

// export const dropdownLinksModules: { title: string; href: string; description: string }[] = [
//   {
//     title: "item 1",
//     href: "/modules/item-1",
//     description: "",
//   },
//   {
//     title: "item 2",
//     href: "/modules/item-2",
//     description: "",
//   },
//   {
//     title: "item 3",
//     href: "/modules/item-3",
//     description: "",
//   },

// ];

export default function Navbar() {
  return (
    <nav className="navbar relative z-2 mb-[1rem] sm:mb-[2.5rem]">
      <div className="container">
        <div className="inset-0 backdrop-blur-md bg-white/60 rounded-lg flex flex-wrap gap-3 items-center justify-between px-[15px] py-[10px]  border border-[rgba(255,255,255,0.6)]">
          <div className="bg-[rgb(227,217,221)] sm:bg-[rgb(242,230,237)] lg:bg-[rgb(209,217,236)] ">
            <img src={logo} alt="" className="logo max-w-[104px] lg:max-w-[175px] h-auto mix-blend-multiply " />
          </div>

          {/* <NavigationMenuDemo /> */}

          {/* <SidebarNavigationMenuDemo /> */}
          <img src={partnersImage} className="partners-image max-w-[194px] lg:max-w-[350px]" alt="" />

          <a href="https://wa.me/12345678900" target="_blank" className="lg:hidden">
            <Button size="icon" variant="success">
              <img className="w-[24px] h-[24px]" src={whatsappIcon} alt="" />
            </Button>
          </a>
          <a href="https://wa.me/12345678900" target="_blank" className="hidden lg:inline-flex">
            <Button variant="success" size="sm">
              <img className="w-[24px] h-[24px]" src={whatsappIcon} alt="" />
              Start Consult
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
