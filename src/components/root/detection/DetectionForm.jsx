"use client";
import { useState } from "react";
import UploadImage from "./UploadImage";
import DetectImage from "./DetectImage";

const DetectionForm = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [output, setOutput] = useState();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <UploadImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <DetectImage imageUrl={imageUrl} output={output} setOutput={setOutput} />
    </div>
  );
};

export default DetectionForm;
