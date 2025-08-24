"use client";
import Title from "@/components/title";
import { food_list } from "@/constant/data";
import { usestore } from "@/store/useStore";
import { message } from "antd";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
type Food = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
};
function FoodDisplay() {
  const { id } = useParams();
  const [foods, setFoods] = useState<Food[]>([]);
  const [messageApi, contextHolder] = message.useMessage();
  const { addToCart } = usestore();

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch("http://localhost:5000/foods");
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };
    fetchFoods();
    console.log(id)
  },[]);
  const filterFoods = foods.filter((food) => food.category === id);


  return (
    <>
      {contextHolder}
      <div className="!mb-10 max-sm:!px-4 ">
        <Title>{id} </Title>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-6">
          {filterFoods.map((food) => (
            <div
              key={food.id}
              className=" rounded-lg overflow-hidden shadow-[8px_8px_16px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-transform duration-300  bg-white  !p-3 flex  justify-between w-full "
            >
              <div className="!p-2 flex flex-col gap-2  ">
                <h1 className="font-bold text-xl max-sm:text-sm">
                  {food.name}
                </h1>
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
                      // image: food.image.src,
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
      </div>
    </>
  );
}

export default FoodDisplay;
