import Link from "next/link";
import React from "react";
import ImageItem from "../root/images/ImageItem";

const RecentImages = async ({ getRecentImages, parentLink }) => {
  const outputs = await getRecentImages();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-4">
        <h3 className="text-lg font-semibold">Recent Images</h3>
        <Link
          href={`${parentLink}`}
          className="text-sm text-primary hover:underline transition-all"
        >
          View more
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {outputs?.map((output) => (
          <ImageItem key={output.id} output={output} parentLink={parentLink} />
        ))}
      </div>
    </div>
  );
};

export default RecentImages;
