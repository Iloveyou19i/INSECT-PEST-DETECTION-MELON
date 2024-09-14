import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageItem = ({ output }) => {
  const { id, image, detections } = output;

  return (
    <Link
      href={`/images/${id}`}
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
