import { DiscountImage } from "@/constant/data";
import { usestore } from "@/store/useStore";
import { PlusCircle, ScanLine } from "lucide-react";
import Image from "next/image";
import React from "react";

function Discount() {
  const { isDiscount, precentage } = usestore();
  return (
    <div className="flex gap-6 items-center max-md:gap-3  ">
      {DiscountImage.map((item, index) => (
        <div key={index} className="relative rounded-xl">
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
              {item.subtitle}
            </h2>
          </div>

          <div className="absolute top-0 left-5 z-20 bg-black w-[50px] rounded-b-md !p-2 ">
            <h2 className="text-[14px] font-bold text-white text-center">
              20%
            </h2>
          </div>
          <button
            className={`absolute bottom-0 right-0 bg-gray-200 rounded-tl-3xl !p-3 
               ${isDiscount ? "hidden" : ""}

            `}
            onClick={() => precentage(20)}
          >
            <ScanLine />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Discount;
