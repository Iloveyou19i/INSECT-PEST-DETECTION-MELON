"use client";
import React, { useEffect, useState } from "react";
import DetectionBadge from "./DetectionBadge";

const DetectionsContainer = ({ detections }) => {
  const [pests, setPests] = useState({});

  useEffect(() => {
    if (!detections || detections.length === 0) return;

    const formattedData = {};

    for (const detection of detections) {
      const pest = detection.class;

      if (formattedData[pest]) {
        formattedData[pest]++;
      } else {
        formattedData[pest] = 1;
      }
    }

    setPests(formattedData);
  }, [detections]);

  return (
    <div className="flex flex-col gap-1">
      <h4 className="title">Pests</h4>
      <div className="flex gap-2">
        {Object.entries(pests).map(([pest, value]) => (
          <DetectionBadge key={pest} pest={pest} value={value} />
        ))}
      </div>
    </div>
  );
};

export default DetectionsContainer;
