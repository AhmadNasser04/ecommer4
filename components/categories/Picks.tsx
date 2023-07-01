import React from "react";
import PickCard from "./PickCard";
import { getCategories } from "@/actions/getCategories";

export default async function Picks() {
  const categories = await getCategories();

  return (
    <div className="container space-y-5">
      <h1 className="text-3xl font-bold text-primary">Our Categories</h1>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((pick) => (
          <PickCard key={pick.id} pick={pick} />
        ))}
      </div>
    </div>
  );
}
