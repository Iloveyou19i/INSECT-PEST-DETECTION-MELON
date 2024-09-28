"use client";
import { Button } from "@/components/ui/button";
import { updatePestStatus } from "@/lib/actions/pest.action";
import React, { useState } from "react";
import toast from "react-hot-toast";

const PublishPestButton = ({ id, isPublished }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updatePublishStatus = async () => {
    try {
      setIsSubmitting(true);

      const status = !isPublished;

      await updatePestStatus(id, status);

      const message = isPublished ? "Pest unpublished" : "Pest published";
      toast.success(message);
    } catch (error) {
      console.error(error.message);

      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Button
      variant={isPublished ? "default" : "outline"}
      size="sm"
      disabled={isSubmitting}
      onClick={updatePublishStatus}
    >
      {isPublished ? "Unpublish" : "Publish"}
    </Button>
  );
};

export default PublishPestButton;
