"use client";

import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "./Hamburger";
import { Category } from "@/types";
import { ShoppingCart } from "lucide-react";
import IconButton from "../buttons/IconButton";

interface Props {
  data: Category[];
}

export default function Navigation({ data }: Props) {
  const [open, setOpen] = useState(false);

  const routes = data.map((category) => ({
    name: category?.name,
    link: `/category/${category?.id}`,
  }));

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <ul
        className={`absolute w-screen z-50 h-screen md:w-auto md:h-auto bg-white md:bg-transparent flex flex-col items-center justify-center gap-5 text-2xl md:text-lg font-semibold md:static md:flex-row text-primary transition-all duration-700
        ${open && "left-0 top-0"}
        ${!open && "-left-[1000px] top-0"}
        `}
      >
        {routes.map((item) => (
          <li key={item.name}>
            <Link onClick={toggleOpen} href={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
        <li className="md:hidden">
          <Link
            onClick={toggleOpen}
            className="flex items-center gap-2 px-3 py-2 font-normal text-white bg-black border rounded-xl"
            href="/cart"
          >
            <ShoppingCart size={20} />
            Cart
          </Link>
        </li>
      </ul>
      <div className="absolute z-50 md:hidden top-24 right-5">
        <Hamburger isChecked={open} onClick={toggleOpen} />
      </div>
    </div>
  );
}
