"use client";
import Title from "@/components/title";
import { DiscountImage } from "@/constant/data";
import { usestore } from "@/store/useStore";
import { Disc, PlusCircle } from "lucide-react";
import Image from "next/image";

import React from "react";

function Order() {
  const { cart } = usestore();
  console.log(cart);

  return (
    <div className="grid grid-cols-[1fr_1.5fr_1fr]  max-sm:grid-cols-1 gap-4 !p-4  items-start max-sm:justify-items-center  ">
      <div className="flex gap-6 items-center max-md:gap-3  ">
        {DiscountImage.map((item, index) => (
          <div key={index} className="relative rounded-xl    bg-red-500">
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
                40%
              </h2>
            </div>
            <span className="absolute bottom-0 right-0 bg-gray-200 rounded-tl-3xl !p-3">
              <PlusCircle />
            </span>
          </div>
        ))}
      </div>
      <div className=" ">
        {cart.map((item) => (
          <div
            key={item.id}
            className=" !p-3 flex   gap-4  shadow-xl border-2 border-gray-200  rounded-xl !mb-4 "
          >
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-2xl max-sm:text-2xl">
                {item.name}
              </h1>
              <p className="tracking-tight leading-normal text-gray-500 max-sm:text-sm">
                {item.description}
              </p>
              <span className="font-bold text-2xl text-[#fff] bg-[#028643] !p-2 !px-4 rounded-md leading-6 w-fit ">
                ${item.price}
              </span>
            </div>
            <div className=" w-full  relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className=" object-cover "
              />
            </div>
          </div>
        ))}
      </div>
      {!cart && <h1 className="text-2xl font-bold">Your cart is empty</h1>}
      <div>
        <Title className="text-2xl font-bold">My Basket</Title>
      </div>
    </div>
  );
}

export default Order;
