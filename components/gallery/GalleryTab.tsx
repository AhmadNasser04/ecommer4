import Image from "next/image";
import { Tab } from "@headlessui/react";
import { Image as ImageType } from "@/types";

interface Props {
  image: ImageType;
}

export default function GalleryTab({ image }: Props) {
  return (
    <Tab className="relative flex items-center justify-center bg-white rounded-md cursor-pointer aspect-square">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 w-full h-full overflow-hidden rounded-md aspect-square">
            <Image
              fill
              src={image.url}
              alt="image"
              className="object-cover object-center"
            />
          </span>
          <span
            className={`absolute inset-0 rounded-md ring-2 ring-offset-2 ${
              selected ? "ring-black" : "ring-transparent"
            }`}
          />
        </div>
      )}
    </Tab>
  );
}
