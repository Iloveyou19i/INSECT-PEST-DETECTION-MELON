import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BugPlay, LoaderCircle } from "lucide-react";
import { useState } from "react";
import DetectionActions from "./DetectionActions";
import DetectionLoader from "@/components/loaders/DetectionLoader";
import ImageViewer from "./ImageViewer";

const DetectImage = ({ imageUrl, output, setOutput }) => {
  const [isDetecting, setIsDetecting] = useState();

  const detectImage = () => {
    try {
      setIsDetecting(true);
      //
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsDetecting(false);
    }
  };

  return (
    <Card>
      <div className="flex justify-between items-center gap-4 mb-4">
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
          <DetectionActions />
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ut!
        </p>
      </div>
      <div className="h-[450px] w-full flex flex-col items-center justify-center bg-slate-200 rounded-md relative">
        {isDetecting && <DetectionLoader />}
        <ImageViewer image={output} isLoading={isDetecting}>
          Image not found.
        </ImageViewer>
      </div>
    </Card>
  );
};

export default DetectImage;
