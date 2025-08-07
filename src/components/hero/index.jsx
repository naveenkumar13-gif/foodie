import React from "react";
import { hero_1, hero_2, Logo } from "../../../public/images";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" w-full bg-[#FBFBFB]   rounded-lg h-[70vh] !my-6  flex items-center relative ">
      <div className="flex flex-col  justify-center gap-3 !pl-10">
        <p className="text-sm">
          Order Restaurant food, takeaway and groceries.
        </p>
        <h1 className="text-6xl font-bold">Feast Your Senses,</h1>
        <h2 className="text-5xl font-bold text-[#FC8A06]">Fast and Fresh</h2>
        <div className="flex flex-col gap-2 !mt-6">
          <p>Enter a postcode to see what we deliver</p>
        </div>
      </div>
      <div className="relative   top-0 right-30 w-[90%] h-[100%] z-20">
        <Image
          src={hero_1}
          alt="hero"
          className="object-contain w-full h-full    "
        />
      </div>
      <div className="bg-[#fc8a06] w-[500px] h-[90%]   rounded-l-full  absolute bottom-0  right-0 z-0">
        <div className=" w-1/2 bg-[#F8F8F8]/80  rounded-lg  relative  top-10 left-32   !p-2 ">
          <div className="flex justify-between items-center !mb-2">
            <div className="relative h-[20px] w-[50px]">
              <Image src={Logo} alt="logo" fill className="object-contain" />
            </div>
            <span className="text-[8px] text-gray-700">now</span>
          </div>
          <div className="flex flex-col  text-[10px]">
            <p>We’ve Received your order!</p>
            <p>Awaiting Restaurant acceptance </p>
          </div>
        </div>
        <div className=" w-1/2 bg-[#F8F8F8]/80  rounded-lg  relative  top-30 left-56   !p-2 ">
          <div className="flex justify-between items-center !mb-2">
            <div className="relative h-[20px] w-[50px]">
              <Image src={Logo} alt="logo" fill className="object-contain" />
            </div>
            <span className="text-[8px] text-gray-700">now</span>
          </div>
          <div className="flex flex-col  text-[10px]">
            <p>We’ve Received your order!</p>
            <p>Awaiting Restaurant acceptance </p>
          </div>
        </div>
        <div className=" w-1/2 bg-[#F8F8F8]/80  rounded-lg  relative  top-50 left-32   !p-2 ">
          <div className="flex justify-between items-center !mb-2">
            <div className="relative h-[20px] w-[50px]">
              <Image src={Logo} alt="logo" fill className="object-contain" />
            </div>
            <span className="text-[8px] text-gray-700">now</span>
          </div>
          <div className="flex flex-col  text-[10px]">
            <p>We’ve Received your order!</p>
            <p>Awaiting Restaurant acceptance </p>
          </div>
        </div>
        <div className="relative   bottom-50 right-0 w-[70%] h-[100%]  ">
          <Image
            src={hero_2}
            alt="hero"
            className="object-contain w-full h-full   "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
