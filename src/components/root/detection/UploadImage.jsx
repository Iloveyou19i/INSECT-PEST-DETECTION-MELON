"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UploadDropzone } from "@/lib/uploadthing";
import { Upload, X } from "lucide-react";
import { useState } from "react";
import ImageViewer from "./ImageViewer";

const UploadImage = ({ imageUrl, setImageUrl }) => {
  const [isEditting, setIsEditting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const toggle = () => {
    setIsEditting(!isEditting);
  };

  return (
    <Card>
      <div className="flex justify-between items-center gap-4 mb-4">
        <h4 className="title">Upload Image</h4>
        <Button
          variant="outline"
          size="sm"
          onClick={toggle}
          disabled={isUploading}
        >
          {isEditting ? (
            <>
              Cancel <X className="h-4 w-4 ml-2" />
            </>
          ) : (
            <>
              Upload <Upload className="h-4 w-4 ml-2" />
            </>
          )}
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm">
          Upload a clear image that shows pests for accurate detection
        </p>
        {isEditting ? (
          <div className="aspect-video w-full flex justify-center items-center">
            <UploadDropzone
              className="w-full h-full bg-slate-100 ut-label:text-primary ut-allowed-content:ut-uploading:text-primary ut-button:bg-primary ut-button:ut-readying:bg-primary/50 ut-button:ut-uploading:bg-primary/50 ut-button:ut-readying:bg-primary-50"
              endpoint="pestImage"
              onUploadBegin={(res) => {
                setIsUploading(true);
              }}
              onClientUploadComplete={(res) => {
                if (res) {
                  setImageUrl(res[0].url);
                  setIsUploading(false);
                  setIsEditting(false);
                }
              }}
            />
          </div>
        ) : (
          <div className="aspect-video w-full flex flex-col items-center justify-center bg-slate-200 rounded-md overflow-hidden relative">
            <ImageViewer image={imageUrl} isLoading={isUploading}>
              No image uploaded.
            </ImageViewer>
          </div>
        )}
      </div>
    </Card>
  );
};

export default UploadImage;
