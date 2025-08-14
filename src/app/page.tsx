"use client";
import Banner from "@/components/banner";
import Hero from "@/components/hero";
import PopularDish from "@/components/popularDish";
import { useEffect, useState } from "react";


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`ease-in transition-opacity duration-700 max-sm:!px-4 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Hero />
      <Banner />
      <PopularDish  />
    </div>
  );
}
