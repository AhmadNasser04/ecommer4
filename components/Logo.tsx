import { Kanit } from "next/font/google";
import Link from "next/link";
import React from "react";

const font = Kanit({ weight: "600", subsets: ["latin"] });

export default function Logo() {
  return (
    <Link href="/">
      <div
        className={`text-2xl lg:text-4xl font-bold text-primary ${font.className}`}
      >
        COMPANY
      </div>
    </Link>
  );
}
