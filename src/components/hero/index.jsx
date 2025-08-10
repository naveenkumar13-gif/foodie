import React from "react";
import { hero_1, hero_2, Logo } from "../../../public/images";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" w-full bg-[#FBFBFB]  rounded-lg h-[70vh]   flex items-center relative ">
      <div className="flex flex-col  justify-center gap-3 !pl-10">
        <p className="text-sm">
          Order Restaurant food, takeaway and groceries.
        </p>
        <h1 className="text-6xl font-bold">Feast Your Senses,</h1>
        <h2 className="text-5xl font-bold text-[#FC8A06]">Fast and Fresh</h2>
        <div className="flex flex-col gap-2 !mt-6">
          <p>Enter a postcode to see what we deliver</p>
          <div className="flex relative ">
            <input
              type="text"
              placeholder="e.g. EC4R 3TE"
              className="!p-3 !px-4 h-12 rounded-full border-gray-400 border outline-none w-[65%]"
            />
            <button className="bg-[#FC8A06] text-white !p- rounded-full right-[35%] absolute !p-3 !px-6">
              serach
            </button>
          </div>
        </div>
      </div>
      <div className="relative   top-[28.5px] right-50 w-[50%] h-[100%] z-20">
        <Image
          src={hero_1}
          alt="hero"
          className="object-contain w-full h-full    "
        />
      </div>
      <div className="bg-[#fc8a06] w-[500px] h-[90%]   rounded-l-full  absolute bottom-0  right-0 z-0">
        <div className=" w-1/2 bg-[#F8F8F8]/80  rounded-lg  relative  top-23 left-32 z-20  !p-2 ">
          <div className="flex justify-between items-center !mb-2">
            <div className="relative h-[20px] w-[50px]">
              <Image src={Logo} alt="logo" fill className="object-contain" />
            </div>
            <span className="text-[10px] text-gray-700">now</span>
          </div>
          <div className="flex flex-col  text-[10px]">
            <p>We’ve Received your order!</p>
            <p>Awaiting Restaurant acceptance </p>
          </div>
        </div>
        <div className=" w-1/2 bg-[#F8F8F8]/80  rounded-lg  relative  top-38 left-52 z-20  !p-2 ">
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
        <div className=" w-1/2 bg-[#F8F8F8]/80  rounded-lg  relative  top-50 left-32 z-20  !p-2 ">
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
        <div className="relative   bottom-[106px] right-20 w-[80%] -z-0  ">
          <Image src={hero_2} alt="hero" className="   h-[350px]   " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
