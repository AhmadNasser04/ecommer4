"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/buttons/Button";
import Currency from "@/components/Currency";
import useCart from "@/hooks/useCart";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function Summary() {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  return (
    <div className="px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Link href="https://web.whatsapp.com/" target="_blank">
        <Button disabled={items.length === 0} className="w-full mt-6">
          Checkout via Whatsapp
        </Button>
      </Link>
    </div>
  );
}
