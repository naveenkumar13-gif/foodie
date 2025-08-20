import React from "react";
import { AppStore, Logo, PlayStore } from "../../../public/images";
import Image from "next/image";
import {
  FOOTER_LINKS,
  IMPORTANT_LINKS,
  LEGAL_PAGE,
  socialMediaLinks,
} from "@/constant/data";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex items-center justify-between max-md:gap-8 h-[400px] bg-[#D9D9D9]/60 !px-16 max-md:!p-8 max-md:flex-wrap max-md:h-auto max-sm:flex-col  ">
        <div className="flex flex-col gap-4 max-md:!mb-5 max-md:items-center max-md:text-center">
          <div className="relative h-[50px] w-[150px]">
            <Image src={Logo} alt="logo" fill className="object-contain" />
          </div>

          <div className="flex">
            <span>
              <Image src={AppStore} alt="logo" width={150} />
            </span>
            <span>
              <Image src={PlayStore} alt="logo" width={150} />
            </span>
          </div>

          <p>
            Company # 490039-445, Registered with <br /> House of companies.
          </p>
        </div>
        <div className="flex flex-col gap-4 max-md:!mb-5">
          <h2 className="font-bold text-lg">
            Get Exclusive Deals in your Inbox
          </h2>
          <div className="flex relative">
            <input
              type="text"
              placeholder="your@gmail.com"
              className="!p-4 rounded-full bg-[#D9D9D9] w-96 max-md:w-72 max-sm:w-full"
            />
            <button className="bg-[#FC8A06] text-white !p-4 rounded-full absolute right-0 top-[0px] w-32 text-md">
              Subscribe
            </button>
          </div>
          <p>
            we wont spam, read our <span>email policy</span>
          </p>
          <div className="flex gap-4 max-md:justify-center">
            {socialMediaLinks.map((item, index) => (
              <span key={index}>
                <Image src={item.srcImage} alt={item.alt} width={30} />
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <h2 className="font-bold text-lg">Legal Page</h2>
          {LEGAL_PAGE.map((item, index) => (
            <p key={index}>
              <a href={item.link} className="underline">
                {" "}
                {item.title}
              </a>
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-4 !mr-8">
          <h2 className="font-bold text-lg ">Important Links</h2>
          {IMPORTANT_LINKS.map((item, index) => (
            <p key={index}>
              <a href={item.link} className="underline">
                {" "}
                {item.title}
              </a>
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-around gap-4 bg-[#03081F] text-white !py-6">
        <p className="text-center text-sm">
          Order.uk Copyright 2024, All Rights Reserved.
        </p>
        <div className="flex gap-4 max-md:hidden">
          {FOOTER_LINKS.map((item, index) => (
            <p key={index} className="text-center text-sm">
              <a href={item.link}>{item.title}</a>
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
