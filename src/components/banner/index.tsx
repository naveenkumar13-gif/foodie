import Image from "next/image";
import React from "react";
import { BannerImage } from "@/constant/data";
import Title from "../title";

function Banner() {
  return (
    <div className="!py-4">
      <Title>Up to -40% Discount Offers 🎊 </Title>

      <div className="flex gap-6 items-center max-md:gap-3 max-md:overflow-x-auto   scroll-smooth">
        {BannerImage.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl hover:-translate-y-1 transition-transform duration-300 max-md:flex-shrink-0  bg-red-500"
          >
            <Image
              src={item.src}
              alt={item.alt}
              className="rounded-xl object-cover w-full max-md:w-[300px] "
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/95 opacity-70 rounded-xl hover:opacity-30 transition-opacity duration-500"></div>

            <div className="absolute bottom-4 left-4 z-20 ">
              <span className="text-xs text-[#fc8a06] tracking-wider">
                {item.title}
              </span>
              <h2 className="text-2xl font-bold text-white max-md:text-lg">
                {item.location}
              </h2>
            </div>

            <div className="absolute top-0 right-5 z-20 bg-black w-[50px] rounded-b-md !p-2 ">
              <h2 className="text-[14px] font-bold text-white text-center">
                40%
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
