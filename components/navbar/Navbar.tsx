import { getCategories } from "@/actions/getCategories";
import React from "react";
import Logo from "@/components/Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import CartMenu from "./CartMenu";
import getProducts from "@/actions/getProducts";

export default async function Navbar() {
  const categories = await getCategories();
  const products = await getProducts({});

  return (
    <div className="container flex items-center justify-between py-16">
      <Logo />
      <Navigation data={categories} />
      <div className="items-center justify-center hidden gap-5 md:flex">
        <SearchBar products={products} />
        <CartMenu />
      </div>
    </div>
  );
}
