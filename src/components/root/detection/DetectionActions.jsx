import { CloudUpload, Download, EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
      errro: "Error saving the image",
    });
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
