import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import React from "react";

const PestFAQ = ({ id, pestId, question, answer, deleteFAQ }) => {
  return (
    <Card className="grid grid-cols-[1fr_36px] gap-4">
      <div className="flex flex-col">
        <span>{question}</span>
        <p className="text-slate-500 text-sm">{answer}</p>
      </div>
      <div>
        <Button
          variant="destructive"
          size="icon"
          type="button"
          onClick={() => deleteFAQ(id, pestId)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default PestFAQ;
