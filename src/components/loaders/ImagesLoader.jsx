import React from "react";
import { Skeleton } from "../ui/skeleton";

const ImagesLoader = ({ length }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length }).map((_, i) => (
        <Skeleton key={i} className="aspect-square rounded-lg" />
      ))}
    </div>
  );
};

export default ImagesLoader;
