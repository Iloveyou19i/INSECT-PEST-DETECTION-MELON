"use client";
import { useState } from "react";
import UploadImage from "./UploadImage";
import DetectImage from "./DetectImage";

const DetectionForm = () => {
  const [imageUrl, setImageUrl] = useState(
    "https://utfs.io/f/94d7c868-2fbe-432d-a201-dddf48de532b-9hfgfy.jpg"
  );
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
