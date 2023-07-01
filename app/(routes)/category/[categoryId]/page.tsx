import React from "react";
import CategoryBoard from "./components/CategoryBoard";
import { getCategory } from "@/actions/getCategory";
import getProducts from "@/actions/getProducts";
import ProductsList from "@/components/products/ProductsList";

interface Props {
  params: {
    categoryId: string;
  };
}

export default async function page({ params }: Props) {
  const category = await getCategory(params.categoryId);
  const products = await getProducts({
    categoryId: params.categoryId,
  });

  return (
    <div className="space-y-10">
      <div className="container">
        <CategoryBoard data={category} />
      </div>
      <ProductsList title={`${category?.name} Products`} items={products} />
    </div>
  );
}
