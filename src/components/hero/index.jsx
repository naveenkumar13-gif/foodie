import React from "react";
import {
  hero_1,
  hero_2,
  heroNumber_1,
  heroNumber_2,
  heroNumber_3,
  Logo,
} from "../../../public/images";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" w-full bg-[#FBFBFB]  rounded-lg h-[70vh] max-md:h-[42vh]   flex items-center relative  border-2 border-gray-200/50 max-md:bg-[#E2E2E2]">
      <div className="flex flex-col  justify-center gap-3  max-sm:gap-1 !pl-10 max-md:!p-6 max-sm:text-center">
        <p className="text-sm max-sm:text-xs">
          Order Restaurant food, takeaway and groceries.
        </p>
        <h1 className="text-6xl font-bold max-md:text-3xl">
          Feast Your Senses,
        </h1>
        <h2 className="text-5xl font-bold text-[#FC8A06] max-md:text-3xl">
          Fast and Fresh
        </h2>
        <div className="flex flex-col gap-2 !mt-6 max-md:!mt-4">
          <p>Enter a postcode to see what we deliver</p>
          <div className="flex relative ">
            <input
              type="text"
              placeholder="e.g. EC4R 3TE"
              className="!p-3 !px-4 h-12 rounded-full border-gray-400 border outline-none w-[65%] max-md:w-[100%]"
            />
            <button className="bg-[#FC8A06] text-white rounded-full right-[35%] absolute !p-3 !px-6 max-md:right-0">
              serach
            </button>
          </div>
        </div>
      </div>
      <div className="relative   top-[27px] right-50 w-[50%] h-[100%] z-20  max-md:hidden max-md:right-0">
        <Image
          src={hero_1}
          alt="hero"
          className="object-contain w-full h-full    "
        />
      </div>
      <div className="bg-[#fc8a06] w-[500px] h-[90%]   rounded-l-full  absolute bottom-0  right-0 z-0 max-md:hidden">
        <div className=" w-1/2 bg-[#Ffffff]  rounded-lg  relative  top-15 left-32 z-20  !p-2 ">
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
          <div className=" absolute -top-15 right-5     h-full rounded-b-md !p-2 ">
            <Image
              src={heroNumber_1}
              alt="logo"
              className="!w-full h-full object-contain "
            />
          </div>
        </div>
        <div className=" w-1/2 bg-[#Ffffff]  rounded-lg  relative  top-31 left-55 z-20  !p-2 ">
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
          <div className=" absolute -top-15 right-3     h-full rounded-b-md !p-2 ">
            <Image
              src={heroNumber_2}
              alt="logo"
              className="!w-full h-full object-contain  "
            />
          </div>
        </div>
        <div className=" w-1/2 bg-[#Ffffff]  rounded-lg  relative  top-50 left-32 z-20  !p-2 ">
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
          <div className=" absolute -top-15 right-5     h-full rounded-b-md !p-2 ">
            <Image
              src={heroNumber_3}
              alt="logo"
              className="w-full h-full object-contain "
            />
          </div>
        </div>
        <div className="relative   bottom-[109px] right-20 w-[80%] -z-0  ">
          <Image src={hero_2} alt="hero" className="   h-[350px]   " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
