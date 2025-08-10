import Image from "next/image";
import React from "react";
import { BannerImage } from "@/constant/data";
import Title from "../title";

function Banner() {
  return (
    <div className=" !py-4">
      <Title>Up to -40% 🎊 Order.uk exclusive deals</Title>
      <div className="flex gap-6   items-center">
        {BannerImage.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl  hover:-translate-y-1 transition-transform duration-300"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={500}
              height={500}
              className="rounded-xl object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/95 opacity-70 rounded-xl hover:opacity-30 transition-opacity duration-500"></div>

            <div className="absolute bottom-4 left-4 z-20">
              <span className="text-xs text-[#fc8a06] tracking-wider">
                {item.title}
              </span>
              <h2 className="text-2xl font-bold text-white">{item.location}</h2>
            </div>

            <div className="absolute top-0 right-5 z-20 bg-black w-[50px] rounded-b-md !p-2">
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
