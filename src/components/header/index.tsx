"use client";
import {
  DownloadCloud,
  MapPin,
  Menu,
  ShoppingBasket,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Logo } from "../../../public/images";
import { NAV_LINK } from "@/constant/data";

const Header = () => {
  const [menu, SetMenu] = useState("Home");

  return (
    <header className="!px-16 max-md:!px-8 max-sm:!px-4">
      <div className="flex items-center  max-sm:hidden">
        <div className="flex justify-between items-center w-full bg-[#FAFAfA] !p-4  rounded-bl-xl ">
          <div className="flex items-center text-sm">
            <span>⭐</span>
            <div className="flex !ml-2">
              <p> Get 5% Off your first orde ,</p>
              <span className="text-[#FC8A06] underline">Promo:Orders</span>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <span>
              <MapPin />
            </span>
            <div className="flex !ml-2">
              {" "}
              <p>Regent Street, A4, A4201, London</p>
              <span className="text-[#FC8A06] underline !mx-1">
                Change Location
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center  bg-[#028643] text-white  rounded-bl-xl rounded-br-xl text-sm">
          <span className="border-r-2 border-white !p-4 ">
            <ShoppingBasket />
          </span>
          <p className="border-r-2 border-white !p-4 ">23Items</p>
          <p className="border-r-2 border-white !p-4 "> $100</p>
          <span className="border-r-2 border-white !p-4 ">
            <DownloadCloud />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between !py-8">
        <div className="relative h-[50px] w-[150px]">
          <Image src={Logo} alt="logo" fill className="object-contain" />
        </div>
        <ul className="flex items-center gap-4 text-lg max-sm:hidden">
          {NAV_LINK.map((link) => (
            <li
              key={link.name}
              className={
                menu === link.name
                  ? "bg-[#FC8A06] text-white !p-2 rounded-full !px-4 outline-none border-none "
                  : ""
              }
            >
              <a href={link.link} onClick={() => SetMenu(link.name)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <span className="max-sm:block hidden">
          <Menu />
        </span>
      </div>
    </header>
  );
};

export default Header;
