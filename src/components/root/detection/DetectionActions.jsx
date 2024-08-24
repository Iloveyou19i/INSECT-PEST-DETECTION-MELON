import { Bug, CloudUpload, Download, EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const DetectionActions = ({ imageUrl, isDetecting }) => {
  const downloadImage = () => {
    //
  };

  const onCloudUpload = () => {
    try {
      //
    } catch (error) {
      console.error(error.message);
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
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Bug className="w-4 h-4 mr-2" />
            View Info
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Bug 1</DropdownMenuItem>
              <DropdownMenuItem>Bug 2</DropdownMenuItem>
              <DropdownMenuItem>Bug 3</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem>
          <CloudUpload
            className="
              h-4 w-4 mr-2"
            onClick={onCloudUpload}
          />{" "}
          Save to Cloud
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Download className="h-4 w-4 mr-2" onClick={downloadImage} /> Download
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DetectionActions;
