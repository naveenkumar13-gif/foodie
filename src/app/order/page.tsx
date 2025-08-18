"use client";
import { usestore } from "@/store/useStore";
import Image from "next/image";

import React from "react";

function Order() {
  const { cart } = usestore();

  return (
    <div className="grid grid-cols-[1fr_1.5fr_1fr]  gap-4 !p-4">
      <div></div>
      <div className="">
        {cart.map((item) => (
          <div key={item.id} className=" !p-3 flex   gap-4  shadow-xl !mb-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-4xl">{item.name}</h1>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
            <div className=" w-full relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
      {!cart && <h1 className="text-2xl font-bold">Your cart is empty</h1>}
      <div>
        <h1 className="text-2xl font-bold">Order Summary</h1>
      </div>
    </div>
  );
}

export default Order;
