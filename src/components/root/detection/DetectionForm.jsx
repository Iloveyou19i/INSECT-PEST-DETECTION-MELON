"use client";
import { useState } from "react";
import UploadImage from "./UploadImage";
import DetectImage from "./DetectImage";

const DetectionForm = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [output, setOutput] = useState({
    image: null,
    data: {},
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <UploadImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
      </div>
      <div>
        <DetectImage
          imageUrl={imageUrl}
          output={output}
          setOutput={setOutput}
        />
      </div>
    </div>
  );
};

export default DetectionForm;
