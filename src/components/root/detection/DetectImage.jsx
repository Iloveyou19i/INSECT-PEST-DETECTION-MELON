import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BugPlay, LoaderCircle } from "lucide-react";
import { useState } from "react";
import DetectionActions from "./DetectionActions";
import ImageViewer from "./ImageViewer";
import axios from "axios";
import DetectionDetails from "./DetectionDetails";
import { DOMAIN } from "@/lib/utils";

const DetectImage = ({ imageUrl, output, setOutput }) => {
  const [isDetecting, setIsDetecting] = useState();

  const detectImage = async () => {
    try {
      setIsDetecting(true);
      const res = await axios.post(`${DOMAIN}/api/roboflow`, {
        imageUrl,
      });

      if (!res) throw new Error("There was an error in detecting image");

      setOutput(res.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsDetecting(false);
    }
  };

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-4 ">
        <h4 className="title">Detect Pests</h4>
        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={detectImage}
            disabled={!imageUrl || isDetecting}
          >
            {isDetecting ? (
              <LoaderCircle className="h-4 w-4 animate-spin" />
            ) : (
              <>
                Detect <BugPlay className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
          <DetectionActions
            imageUrl={output.image}
            data={output.data}
            isDetecting={isDetecting}
          />
        </div>
      </div>
      <div className="">
        <p className="text-sm">
          Click the "Detect" button to analyze the uploaded image and identify the pest identification results
        </p>
      </div>
      <div className="aspect-video w-full flex flex-col items-center justify-center bg-slate-200 rounded-md overflow-hidden relative">
        <ImageViewer image={output.image} isLoading={isDetecting}>
          Image not found.
        </ImageViewer>
      </div>
      <DetectionDetails data={output.data} />
    </Card>
  );
};

export default DetectImage;
