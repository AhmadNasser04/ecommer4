"use client";

import ClientOnly from "./ClientOnly";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface Props {
  value?: string | number;
}

export default function Currency({ value }: Props) {
  return (
    <ClientOnly>
      <div className="font-semibold">{formatter.format(Number(value))}</div>
    </ClientOnly>
  );
}
