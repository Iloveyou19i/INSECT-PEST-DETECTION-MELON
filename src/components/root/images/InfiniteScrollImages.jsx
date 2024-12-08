"use client";
import React, { useEffect, useState } from "react";
import ImageItem from "./ImageItem";
import { useInView } from "react-intersection-observer";
import { LoaderCircle } from "lucide-react";
import { getOutputs } from "@/lib/actions/output.action";

const InfiniteScrollImages = ({ data, hasNextPage }) => {
  const [images, setImages] = useState(data);
  const [page, setPage] = useState(1);
  const [hasMoreImages, setHasMoreImages] = useState(hasNextPage);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const loadMoreImages = async () => {
    try {
      // fetch the next images
      const nextPage = page + 1;
      const newImages = await getOutputs(nextPage, 12);
      console.log(newImages);

      if (newImages) {
        setImages((prev) => [...prev, ...newImages.data]);
        setHasMoreImages(newImages.hasNextPage);
        setPage(nextPage);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (inView) loadMoreImages();
  }, [inView]);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((output) => (
          <ImageItem key={output.id} output={output} />
        ))}
      </div>
      {hasMoreImages && (
        <div className="flex justify-center items-center" ref={ref}>
          <LoaderCircle className="h-5 w-5 text-primary animate-spin" />
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollImages;
