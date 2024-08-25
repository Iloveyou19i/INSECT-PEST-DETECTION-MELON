import Image from "next/image";
import { ImagePlus } from "lucide-react";
import DetectionLoader from "@/components/loaders/DetectionLoader";

const ImageViewer = ({ image, isLoading, children }) => {
  if (!image && !isLoading) {
    return (
      <>
        <ImagePlus className="text-slate-500" />
        <span className="text-xs text-slate-500">{children}</span>
      </>
    );
  }

  if (isLoading) return <DetectionLoader />;

  return <Image src={image} alt="Pest Image" fill className="object-contain" />;
};

export default ImageViewer;
