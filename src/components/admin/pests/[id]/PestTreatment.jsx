import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import React from "react";

const PestTreatment = ({ i, id, pestId, treatment, deleteTreatment }) => {
  return (
    <Card className="grid grid-cols-[1fr_36px] gap-4">
      <p className="text-sm">{treatment}</p>
      <Button
        type="button"
        variant="destructive"
        size="icon"
        onClick={() => deleteTreatment(i, id, pestId)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </Card>
  );
};

export default PestTreatment;
