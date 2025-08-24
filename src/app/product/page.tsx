"use client";
import { food_list } from "@/constant/data";
import { usestore } from "@/store/useStore";
import { message } from "antd";
import axios from "axios";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
function Product() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [error, setError] = useState<string>("");
  const { addToCart } = usestore();
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    try {
      const fetchData = async () => {
        const respone = await fetch("http://localhost:5000/foods");
        const data = await respone.json();
        setFoods(data);
      };
      fetchData();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      {contextHolder}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-6  !pb-12">
        {foods.map((food) => (
          <div
            key={food.id}
            className=" rounded-lg overflow-hidden shadow-xl/20 hover:-translate-y-1 transition-transform duration-300  bg-white  !p-3 flex  justify-between w-full "
          >
            <div className="!p-2 flex flex-col gap-2  ">
              <h1 className="font-bold text-xl max-sm:text-sm">{food.name}</h1>
              <h3 className="text-sm ">{food.description}</h3>
              <p className="text-gray-600 font-bold">${food.price}</p>
            </div>
            <div className="w-full h-full relative overflow-hidden ">
              {/* <Image
                src={food.image}
                alt={food.name}
                fill
                className="w-full object-cover rounded-lg  hover:scale-105 transition-transform duration-300"
              /> */}
              <span
                className="absolute bottom-0 right-0 bg-gray-200 rounded-tl-3xl !p-3"
                onClick={() => {
                  addToCart({
                    id: food.id,
                    name: food.name,
                    price: food.price,
                    quantity: 1,
                    // image: food.image,
                    description: food.description,
                  });
                  messageApi.success({
                    content: (
                      <>
                        Add to Cart <b>{food.name}</b>
                      </>
                    ),
                  });
                }}
              >
                <PlusCircle />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
