"use client";
import { Button } from "@/components/ui/button";
import { deleteOutput } from "@/lib/actions/output.action";
import { Download, Trash2 } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

const OutputActions = ({ id, image }) => {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = image;
    link.download = "output-image.png";
    link.click();
  };

  const handleDelete = () => {
    toast.promise(deleteOutput(id, "/images"), {
      loading: "Deleting output image",
      success: "Output image deleted",
      error: "There was an error deleting the image",
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline" onClick={downloadImage}>
        <Download className="h-4 w-4 mr-2" /> Download
      </Button>
      <Button variant="destructive" onClick={handleDelete}>
        <Trash2 className="h-4 w-4 mr-2" /> Delete
      </Button>
    </div>
  );
};

export default OutputActions;
