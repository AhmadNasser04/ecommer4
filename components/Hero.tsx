import React from "react";
import ArrowButton from "./buttons/ArrowButton";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center gap-10 py-16 rounded-lg heroBackground lg:min-h-[600px]">
        <h1 className="text-6xl font-bold text-center text-white md:text-7xl drop-shadow-md">
          Level up your style with our summer collections
        </h1>
        <Link href="#products">
          <ArrowButton title="Shop Now" />
        </Link>
      </div>
    </div>
  );
}
