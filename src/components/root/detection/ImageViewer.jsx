import Image from "next/image";
import { ImagePlus } from "lucide-react";

const ImageViewer = ({ image, isLoading, children }) => {
  if (!image && isLoading) return null;

  if (image && !isLoading)
    return (
      <Image src={image} alt="Pest Image" fill className="object-contain" />
    );

  return (
    <>
      {image && !isLoading ? (
        <Image src={image} alt="Pest Image" fill className="object-contain" />
      ) : (
        <>
          <ImagePlus className="text-slate-500" />
          <span className="text-xs text-slate-500">{children}</span>
        </>
      )}
    </>
  );
};

export default ImageViewer;
