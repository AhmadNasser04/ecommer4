import React from "react";
import Logo from "@/components/Logo";

export default function Footer() {
  const categories = [
    {
      name: "Shop",
      links: ["All Collections", "Winter Edition", "Discount"],
    },
    {
      name: "Company",
      links: ["About Us", "Contact", "Affiliates"],
    },
    {
      name: "Support",
      links: ["FAQ", "Cookie Policy", "Terms of Use"],
    },
  ];

  return (
    <div className="w-screen mt-16 bg-[#eaeef2] py-16 space-y-10">
      <div className="container flex justify-between">
        <div className="space-y-4">
          <Logo />
          <p className="text-gray-500">
            Specializes in providing high-quality, stylish products for your
            wardrobe
          </p>
        </div>
        <div className="hidden md:flex gap-14">
          {categories.map((category) => (
            <div key={category.name} className="space-y-5">
              <h1 className="text-lg font-semibold text-primary">
                {category.name}
              </h1>
              <div className="flex flex-col gap-3">
                {category.links.map((link) => (
                  <p
                    key={link}
                    className="text-gray-500 transition-all cursor-pointer hover:translate-x-2"
                  >
                    {link}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center space-y-5">
        <div className="w-full border-t border-neutral-300" />
        <h1 className="text-neutral-500">
          Copyright &copy; 2023 Company Inc. All rights reserved
        </h1>
      </div>
    </div>
  );
}
