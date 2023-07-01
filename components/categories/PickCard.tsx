"use client";

import React from "react";
import ArrowButton from "../buttons/ArrowButton";
import { Category } from "@/types";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  pick: Category;
}

export default function PickCard({ pick }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="bg-center bg-cover aspect-[1/2] rounded-xl"
      style={{ backgroundImage: `url(${pick.imageUrl})` }}
    >
      <Link href={`/category/${pick.id}`}>
        <div className="flex items-end justify-center w-full h-full pb-5">
          <ArrowButton title={`Shop ${pick.name}`} />
        </div>
      </Link>
    </motion.div>
  );
}
