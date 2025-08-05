import {
  Download,
  DownloadCloud,
  MapIcon,
  MapPin,
  ShoppingBasket,
} from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex items-center ">
        <div className="flex justify-between items-center w-full bg-[#FAFAfafa] !p-4  rounded-bl-xl">
          <div className="flex items-center text-sm">
            <span>⭐</span>
            <div className="flex !ml-2">
              <p> Get 5% Off your first orde ,</p>
              <span className="text-[#FC8A06] underline">Promo:Orders</span>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <span>
              <MapPin />
            </span>
            <div className="flex !ml-2">
              {" "}
              <p>Regent Street, A4, A4201, London</p>
              <span className="text-[#FC8A06] underline !mx-1">
                Change Location
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#028643] text-white !p-4 rounded-bl-xl rounded-br-xl text-sm">
          <span className=" ">
            <ShoppingBasket />
          </span>
          <p>23Items</p>
          <p> $100</p>
          <span>
            <DownloadCloud />
          </span>
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
