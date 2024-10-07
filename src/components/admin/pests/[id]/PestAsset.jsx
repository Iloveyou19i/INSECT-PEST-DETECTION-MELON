"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { deletePicture } from "@/lib/actions/pest.action";
import { ExternalLink, Trash2 } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

const PestAsset = ({ id, idx, imageUrl, pestId }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleViewImage = () => {
    router.push(imageUrl);
  };

  const handleDelete = async () => {
    try {
      setIsSubmitting(true);
      await deletePicture(pestId, id);
      toast.success("Picture deleted");
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Card className="flex items-center justify-between gap-2">
      <p className="truncate">Image {idx + 1}</p>
      <div className="flex gap-2">
        <Button
          type="button"
          variant="ghost"
          disabled={isSubmitting}
          size="icon"
          onClick={handleViewImage}
        >
          <ExternalLink className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="destructive"
          disabled={isSubmitting}
          size="icon"
          onClick={handleDelete}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default PestAsset;
