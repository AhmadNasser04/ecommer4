import React from "react";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  title: string;
}

export default function ArrowButton({ title }: Props) {
  return (
    <div className="relative transition-all cursor-pointer hover:scale-110">
      <button className="arButton">
        {title}
        <BsArrowRight
          fontSize={28}
          className="absolute right-4 top-3 hover:scale-110"
        />
      </button>
    </div>
  );
}
