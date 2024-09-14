import React from "react";
import ImageView from "./ImageView";
import OutputDetails from "./OutputDetails";

const OutputView = ({ output }) => {
  const { id, image, time, detections, createdAt } = output;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
      <ImageView image={image} />
      <div>
        <OutputDetails
          id={id}
          image={image}
          time={time}
          detections={detections}
          createdAt={createdAt}
        />
      </div>
    </div>
  );
};

export default OutputView;
