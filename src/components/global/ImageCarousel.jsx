import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map(({ id, imageUrl }, index) => (
          <CarouselItem key={index}>
            <div className="p-1 aspect-square">
              <Card className="relative w-full h-full">
                <Image
                  src={imageUrl}
                  alt="image"
                  fill
                  className="object-contain object-center"
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;
