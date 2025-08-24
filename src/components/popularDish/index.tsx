import React, { use, useEffect, useState } from "react";
import Title from "../title";
import { menu_list } from "@/constant/data";
import Image from "next/image";
import Link from "next/link";
interface Props {
  id: number;
  menu_name: string;
  src: string;
  alt: string;
  Restaurants: string;
}

function PopularDish() {
  const [menu, setMenu] = useState<Props[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      setMenu(data);
    };
    fetchMenu();
  }, []);
  return (
    <div className="!py-8">
      <Title title=" Popular Categories 🤩" />
      <div className="grid grid-cols-6 max-sm:grid-cols-2 max-md:grid-cols-3 items-center gap-4  max-md:gap-2 ">
        {menu.map((item, index) => (
          <div key={index}>
            <Link href={`/product/${item.menu_name}`}>
              <div className="overflow-hidden max-md:max-w-[200px]  ">
                <Image
                  src={item.src}
                  alt={item.alt}
                  className=" object-cover  brightness-90 hover:scale-105 transition-transform duration-300  "
                />
                <div className=" border-l-2 border-r-2 border-b-2 border-gray-200 rounded-b-xl   bg-[#f5f5f5] !p-3 leading-2  ">
                  <h3 className="font-bold text-lg max-md:text-sm">
                    {item.menu_name}
                  </h3>
                  <span className="text-sm text-[#FC8A06] font-normal">
                    {item.Restaurants}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularDish;
