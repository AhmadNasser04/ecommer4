"use client";

import Button from "@/components/buttons/Button";
import useCart from "@/hooks/useCart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartMenu() {
  const cart = useCart();
  const router = useRouter();

  return (
    <div className="flex items-center ml-auto gap-x-4">
      <Button
        className="flex items-center px-4 py-2 bg-black rounded-full"
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}
