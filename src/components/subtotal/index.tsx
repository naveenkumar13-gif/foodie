import { usestore } from "@/store/useStore";
import React from "react";

function SubTotal() {
  const { getTotalPrice } = usestore();
  return (
    <div>
      <div className="!p-4 !space-y-3">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">Subtotal:</h1>
          <span className="text-2xl font-bold">{getTotalPrice()}</span>
        </div>
        <div className="flex justify-between">
          <h2>Discount</h2>
          <span>-{20}</span>
        </div>

        <div className="flex justify-between bg-[#FC8A06CC] !p-4 !mt-4 text-white font-bold text-2xl rounded-lg">
          <h2>Total</h2>
          <span>{getTotalPrice().toFixed(0)}</span>
        </div>
      </div>
    </div>
  );
}

export default SubTotal;
