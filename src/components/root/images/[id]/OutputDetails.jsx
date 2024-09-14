import DetectionsContainer from "@/components/global/DetectionsContainer";
import { Card } from "@/components/ui/card";
import { formatDate, toMs } from "@/lib/utils";
import React from "react";
import OutputActions from "./OutputActions";

const OutputDetails = ({ id, image, time, detections, createdAt }) => {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h4 className="h4">Details</h4>
          <div className="w-full flex justify-between gap-4">
            <p>Inference Speed</p>
            <span className="text-primary font-bold">{toMs(time)}</span>
          </div>
          <div className="w-full flex justify-between gap-4">
            <p>Pest Detections</p>
            <span className="text-primary font-bold">{detections.length}</span>
          </div>
          <div className="w-full flex justify-between gap-4">
            <p>Date</p>
            <span className="text-primary font-bold">
              {formatDate(createdAt)}
            </span>
          </div>
        </div>
        <DetectionsContainer detections={detections} />
        <OutputActions id={id} image={image} />
      </div>
    </Card>
  );
};

export default OutputDetails;
