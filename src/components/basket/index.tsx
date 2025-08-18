import { ShoppingBasket, Trash2 } from "lucide-react";
import React from "react";
import Title from "../title";
import { usestore } from "@/store/useStore";

function Basket() {
  const { cart, removeFromCart } = usestore();
  return (
    <div className="border border-gray-200  roundex-2xl bg-red-50  h-fit">
      <div className="flex bg-[#028643] text-white items-center gap-5 justify-center">
        <span>
          <ShoppingBasket />
        </span>{" "}
        <Title className="text-2xl font-bold ">My Basket</Title>
      </div>
      <div>
        <div className="  ">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between  border-gray-200  border-b-2 !p-4 items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <p className="bg-[#fc8a06] text-white !p-2  !px-4 rounded-full flex gap-2 ">
                  <span>X</span> {item.quantity}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="   text-[#028643] font-bold text-3xl">
                  ${item.price}
                </p>
                <p className=" font-bold text-2xl">{item.name}</p>
                <p className="max-w-3xs truncate overflow-hidden text-xs ">
                  {item.description}
                </p>
              </div>
              <div>
                <Trash2
                  onClick={() => removeFromCart(item.id)}
                  className="cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Basket;
