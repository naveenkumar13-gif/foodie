import { usestore } from "@/store/useStore";
import Image from "next/image";
import React from "react";

function OrderBlock() {
  const { cart } = usestore();
  return (
    <div className=" ">
      {cart.map((item) => (
        <div
          key={item.id}
          className=" !p-3 flex   gap-4  shadow-xl border-2 border-gray-200  rounded-xl !mb-4 "
        >
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl max-sm:text-2xl">{item.name}</h1>
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
  );
}

export default OrderBlock;
