import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const ImageView = ({ image }) => {
  return (
    <Card className="">
      <div className="aspect-video relative w-full">
        <Image src={image} alt="output-image" fill className="object-contain" />
      </div>
    </Card>
  );
};

export default ImageView;
