import { usestore } from "@/store/useStore";
import React from "react";

function SubTotal() {
  const { getTotalPrice } = usestore();
  return (
    <div>
      <div className="!p-4">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">Subtotal:</h1>
          <span>{getTotalPrice()}</span>
        </div>
        <div className="flex justify-between">
          <h2>Discount</h2>
          <span>{20}</span>
        </div>

        <div className="flex justify-between">
          <h2>Total</h2>
          <span>{getTotalPrice().toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default SubTotal;
