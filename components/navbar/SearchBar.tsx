"use client";

import { Product } from "@/types";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import SearchCard from "./SearchCard";

interface Props {
  products: Product[];
}

export default function SearchBar({ products }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const results = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      product.category.name.toLowerCase() === searchTerm.toLocaleLowerCase()
  );

  return (
    <div className="relative hidden lg:block">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-3 pl-12 border rounded-md bg-neutral-100 border-neutral-300"
      />
      <CiSearch
        fontSize={28}
        className="absolute top-[10px] left-2 outline-none"
        fill="gray"
      />
      {searchTerm && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="absolute z-50 w-full p-2 mt-2 space-y-3 bg-white border rounded-xl"
        >
          {results.length === 0 && (
            <p className="text-center">No results found</p>
          )}
          {results.map((result) => (
            <SearchCard
              key={result.id}
              data={result}
              setSearchTerm={setSearchTerm}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
