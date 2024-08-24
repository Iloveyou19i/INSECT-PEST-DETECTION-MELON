import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bug,
  BugPlay,
  CloudUpload,
  Download,
  EllipsisVertical,
} from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DetectImage = ({ imageUrl, output, setOutput }) => {
  const [isDetecting, setIsDetecting] = useState(false);

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
    <Card>
      <div className="flex justify-between items-center gap-4 mb-4">
        <h4 className="title">Detect Pests</h4>
        <div className="flex gap-2">
          <Button size="sm" disabled={!imageUrl || isDetecting}>
            Detect <BugPlay className="h-4 w-4 ml-2" />
          </Button>
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
                <Download className="h-4 w-4 mr-2" onClick={downloadImage} />{" "}
                Download
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ut!
        </p>
      </div>
      <div></div>
    </Card>
  );
};

export default DetectImage;
