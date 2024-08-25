import { Bug, CloudUpload, Download, EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { addOutput } from "@/lib/actions/output.action";
import toast from "react-hot-toast";

const DetectionActions = ({ imageUrl, data, isDetecting }) => {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "output-image.png";
    link.click();
  };

  const onCloudUpload = () => {
    try {
      const output = {
        image: imageUrl,
        time: data.time,
        detections: data.predictions.map((prediction) => {
          return {
            class: prediction.class,
            classId: prediction.class_id,
            confidence: prediction.confidence,
          };
        }),
      };

      toast.promise(addOutput(output), {
        loading: "Saving...",
        success: "Output image successfully saved",
      });
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={!imageUrl || isDetecting}>
        <Button variant="outline" size="icon">
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Bug className="w-4 h-4 mr-2" />
            View Info
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {!data.predictions || data.predictions.length === 0 ? (
                <DropdownMenuItem>No pest detected</DropdownMenuItem>
              ) : (
                data.predictions.map((prediction) => (
                  <DropdownMenuItem key={prediction.class_id}>
                    {prediction.class}
                  </DropdownMenuItem>
                ))
              )}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub> */}
        <DropdownMenuItem onClick={onCloudUpload}>
          <CloudUpload
            className="
              h-4 w-4 mr-2"
          />{" "}
          Save to Cloud
        </DropdownMenuItem>
        <DropdownMenuItem onClick={downloadImage}>
          <Download className="h-4 w-4 mr-2" /> Download
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DetectionActions;
