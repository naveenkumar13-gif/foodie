import React from "react";
import Title from "../title";
import { menu_list } from "@/constant/data";
import Image from "next/image";

function PopularDish() {
  return (
    <div className="!py-8">
      <Title title="Order.uk Popular Categories 🤩" />
      <div className="flex items-center gap-4  !w-full">
        {menu_list.map((item, index) => 
          <div key={index} className="w-full  ">
            <div className="overflow-hidden  ">
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                className=" object-cover  brightness-90 hover:scale-105 transition-transform duration-300 "
              />
              <div className=" border-l-2 border-r-2 border-b-2 border-gray-200 rounded-b-xl   bg-[#f5f5f5] !p-3 leading-2">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <span className="text-sm text-[#FC8A06] font-normal">  
                  {item.Restaurants}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopularDish;
