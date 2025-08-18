"use client";
import Basket from "@/components/basket";
import Discount from "@/components/discount";
import OrderBlock from "@/components/orderBlock";
import { usestore } from "@/store/useStore";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function Order() {
  const { cart } = usestore();
  const route = useRouter();

  return (
    <div className="grid grid-cols-[1fr_1.5fr_1fr]  max-sm:grid-cols-1 gap-4 !p-4  items-start max-sm:justify-items-center  ">
      {cart.length > 0 ? (
        <>
          <Discount />
          <OrderBlock />
          <Basket />
        </>
      ) : (
        <div className="col-span-3">
          {cart?.length === 0 && (
            <div className="flex flex-col items-center justify-center !py-16 text-gray-500">
              <div className="!p-4   bg-gray-100 rounded-full shadow-sm">
                <ShoppingCart size={40} className="text-gray-400" />
              </div>
              <h1 className="!mt-4 text-2xl font-semibold">
                Your Order is empty
              </h1>
              <p className="text-sm !mt-2">
                Looks like you haven’t added anything yet.
              </p>
              <button
                className="!mt-6 !px-6 !py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                onClick={() => route.back()}
              >
                Start Shopping
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Order;
