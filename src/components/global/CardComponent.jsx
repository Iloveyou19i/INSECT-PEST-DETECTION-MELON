import { Card } from "@/components/ui/card";
import React from "react";

const CardComponent = async ({ label, icon, getCount }) => {
  const result = await getCount();

  return (
    <Card className="grid grid-cols-[4rem_1fr]">
      <div className="w-16 h-16 rounded-full bg-[#FFAC1C] flex items-center justify-center">
        {icon}
      </div>
      <div className="w-full flex flex-col items-end gap-2">
        <p className="font-semibold text-md">{label}</p>
        <span className="text-2xl text-primary font-bold">{result}</span>
      </div>
    </Card>
  );
};

export default CardComponent;
