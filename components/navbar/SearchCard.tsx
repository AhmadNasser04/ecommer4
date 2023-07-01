"use client";

import { Product } from "@/types";
import Image from "next/image";
import Currency from "../Currency";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/usePreviewModal";
import useCart from "@/hooks/useCart";

interface Props {
  data: Product;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchCard({ data, setSearchTerm }: Props) {
  const previewModal = usePreviewModal();
  const cart = useCart();

  const onPreview = () => {
    setSearchTerm("");
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      onClick={onPreview}
      className="flex items-center justify-between gap-2 p-3 space-y-4 bg-white border cursor-pointer group rounded-xl"
    >
      {/* Images and Actions */}
      <div className="relative bg-gray-100 w-[50px] h-[50px] rounded-xl">
        <Image
          alt="Image"
          src={data?.images?.[0]?.url}
          fill
          className="object-cover rounded-md aspect-square"
        />
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold">{data?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}
