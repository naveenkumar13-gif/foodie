import Image from "next/image";
import React from "react";
import { Banner_1 } from "../../../public/images";
import { BannerImage } from "@/constant/data";

function Banner() {
  return (
    <div className=" !py-10">
      <h1 className="text-3xl font-bold !py-8 ">
        Up to -40% 🎊 Order.uk exclusive deals
      </h1>
      <div className="flex gap-4">
        {BannerImage.map((item, index) => (
          <div key={index}>
            <div className="flex">
              <div className="  z-0 ">
                <Image
                  src={item.src}
                  alt="banner_1"
                  className=" rounded-xl brightness-75  "
                />
              </div>{" "}
            </div>

            <div className="space-y-2 relative bottom-18 left-9 z-20">
              <span className="text-xs text-[#fc8a06] tracking-wider">
                Restaurant
              </span>
              <h2 className="text-2xl font-bold text-white">
                {" "}
                Chef Burgers London
              </h2>
            </div>
            <div className="flex flex-col gap-1 relative bottom-[89%] left-[85%] z-20 bg-black w-[50px] rounded-b-md !p-2">
              <h2 className="text-[14px] font-bold text-white text-center">
                40%{" "}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
