import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageItem = ({ output, parentLink }) => {
  const { id, image } = output;

  return (
    <Link
      href={`${parentLink}/${id}`}
      className="relative aspect-square w-full overflow-hidden rounded-xl"
    >
      <Image
        src={image}
        alt="output-image"
        fill
        className="object-cover object-center hover:scale-110 transition-all"
      />
    </Link>
  );
};

export default ImageItem;
