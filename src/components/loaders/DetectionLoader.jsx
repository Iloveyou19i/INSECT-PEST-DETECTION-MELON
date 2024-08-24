import React from "react";
import { Skeleton } from "../ui/skeleton";

const DetectionLoader = () => {
  return (
    <div className="w-full h-full relative">
      <Skeleton className="w-full h-full" />
    </div>
  );
};

export default DetectionLoader;
