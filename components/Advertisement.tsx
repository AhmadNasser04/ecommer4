import React from "react";

interface Props {
  advertisement?: string;
}

export default function Advertisement({ advertisement }: Props) {
  return (
    <div className="flex items-center justify-center w-screen py-2 text-white bg-secondary">
      {advertisement
        ? advertisement
        : "Order 5 products and GET 20% OFF. Order now"}
    </div>
  );
}
