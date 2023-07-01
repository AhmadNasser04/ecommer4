import { Category } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  data: Category;
}

export default function CategoryBoard({ data }: Props) {
  const { id, name, slogan, imageUrl } = data;

  return (
    <div className="relative">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="w-full rounded-lg h-[600px] bg-cover bg-center"
      >
        <div className="flex items-center justify-center w-full h-full text-4xl font-bold text-center text-white">
          <p className="drop-shadow-lg">{slogan}</p>
        </div>
      </div>
    </div>
  );
}
