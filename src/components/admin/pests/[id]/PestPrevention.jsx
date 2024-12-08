import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import React from "react";

const PestPrevention = ({ i, id, pestId, prevention, deletePrevention }) => {
  return (
    <Card className="grid grid-cols-[1fr_36px]">
      <p className="text-sm">{prevention}</p>
      <Button
        type="button"
        variant="destructive"
        size="icon"
        onClick={() => deletePrevention(i, id, pestId)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </Card>
  );
};

export default PestPrevention;
