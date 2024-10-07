import ImageCarousel from "@/components/global/ImageCarousel";
import React from "react";

const PestImages = ({ pictures }) => {
  return (
    <div className="flex items-center justify-center">
      <ImageCarousel images={pictures} />
    </div>
  );
};

export default PestImages;
