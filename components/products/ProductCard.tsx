"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/buttons/IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "../Currency";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/usePreviewModal";
import useCart from "@/hooks/useCart";
import { motion } from "framer-motion";

interface Props {
  data: Product;
}

export default function ProductCard({ data }: Props) {
  const previewModal = usePreviewModal();
  const cart = useCart();

  const onPreview = () => {
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      onClick={onPreview}
      className="p-3 space-y-4 bg-white border cursor-pointer group rounded-xl"
    >
      {/* Images and Actions */}
      <div className="relative bg-gray-100 aspect-square rounded-xl">
        <Image
          alt="Image"
          src={data?.images?.[0]?.url}
          fill
          className="object-cover rounded-md aspect-square"
        />
        <div className="absolute w-full px-6 transition opacity-0 group-hover:opacity-100 bottom-5">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">{data?.name}</p>
        <p className="text-sm text-gray-500">{data?.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </motion.div>
  );
}
