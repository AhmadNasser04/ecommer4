"use client";

import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "./Hamburger";
import { Category } from "@/types";

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
          <Link onClick={toggleOpen} href={item.link} key={item.name}>
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
      <div className="absolute z-50 md:hidden top-24 right-5">
        <Hamburger isChecked={open} onClick={toggleOpen} />
      </div>
    </div>
  );
}
