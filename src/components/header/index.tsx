"use client";
import {
  DownloadCloud,
  MapPin,
  Menu,
  ShoppingBasket,
  ShoppingCart,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Logo } from "../../../public/images";
import { NAV_LINK } from "@/constant/data";
import { usestore } from "@/store/useStore";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { cart } = usestore();
  const route = useRouter();
  const path = usePathname();
  const isActive = (link: string) => {
    if (link === "/") return path === "/";
    return path.startsWith(link);
  };

  return (
    <header className=" max-md:!px-8 max-sm:!px-4 !px-16">
      <div className="flex items-center  max-sm:hidden">
        <div className="flex justify-between items-center w-full bg-[#FAFAfA]  rounded-bl-xl rounded-br-xl border-gray-200 border-b border-r border-l gap-6 ">
          <div className="flex items-center text-sm !p-4">
            <span>⭐</span>
            <div className="flex !ml-2">
              <p> Get 5% Off your first order,</p>
              <span className="text-[#FC8A06] underline">Promo:Orders</span>
            </div>
          </div>
          <div className="flex items-center text-sm flex-1 justify-end">
            <span>
              <MapPin />
            </span>
            <div className="flex !ml-2 ">
              <p>Regent Street, A4, A4201, London</p>
              <span className="text-[#FC8A06] underline !mx-1">
                Change Location
              </span>
            </div>
          </div>
          <div className="flex items-center bg-[#028643] text-white rounded-bl-xl rounded-br-xl text-sm">
            <span className="border-r-2 border-white !p-4 ">
              <ShoppingBasket />
            </span>
            <p className="border-r-2 border-white !p-4 ">23 Items</p>
            <p className="border-r-2 border-white !p-4 "> $100</p>
            <span className=" !p-4 ">
              <DownloadCloud />
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between !py-8 max-sm:!py-4">
        <div
          className="relative h-[50px] w-[150px]"
          onClick={() => route.back()}
        >
          <Image src={Logo} alt="logo" fill className="object-contain" />
        </div>
        <ul className="flex items-center gap-4 text-lg max-sm:hidden">
          {NAV_LINK.map((link) => (
            <li
              key={link.name}
              className={
                isActive(link.link)
                  ? "bg-[#FC8A06] text-white !p-2 rounded-full !px-4"
                  : ""
              }
            >
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div className="gap-3 relative  hidden max-sm:flex ">
          <span className="cursor-pointer" onClick={() => route.push("/order")}>
            <ShoppingCart />
            {cart.length > 0 && (
              <p className="w-2 h-2 rounded-full absolute top-0 bg-[#fc961f] right-8"></p>
            )}
          </span>
          <span className="max-sm:block hidden" onClick={() => setOpen(!open)}>
            <Menu />
          </span>
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white !p-3 z-50 transition-transform duration-500 ease-in-out hidden max-sm:block ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-8 !py-2 !p-3 ">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Menu</h1>
              <div className="flex items-center gap-4 relative">
                <span className="cursor-pointer" onClick={() => setOpen(false)}>
                  <ShoppingCart />
                  {cart.length > 0 && (
                    <p className="w-2 h-2 rounded-full absolute top-0 bg-[#fc961f] right-10"></p>
                  )}
                </span>
                <span className="cursor-pointer" onClick={() => setOpen(false)}>
                  <X />
                </span>
              </div>
            </div>

            {NAV_LINK.map((link) => (
              <li
                key={link.name}
                className={isActive(link.link) ? "font-bold text-red-500" : ""}
              >
                <Link href={link.link} onClick={() => setOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
