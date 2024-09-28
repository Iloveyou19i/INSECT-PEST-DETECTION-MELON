import { Button } from "@/components/ui/button";
import React from "react";
import PublishPestButton from "./PublishPestButton";

const PestHeader = ({ id, name, isPublished }) => {
  return (
    <div className="flex items-center gap-4 justify-between">
      <h2 className="h2">{name}</h2>
      <PublishPestButton id={id} isPublished={isPublished} />
    </div>
  );
};

export default PestHeader;
