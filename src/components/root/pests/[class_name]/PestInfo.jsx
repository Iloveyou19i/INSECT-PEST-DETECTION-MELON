import SectionHeader from "@/components/global/SectionHeader";
import { Card } from "@/components/ui/card";
import { Info, ShieldCheck, ShieldPlus } from "lucide-react";
import React from "react";

const PestInfo = ({ description }) => {
  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col gap-2">
        <SectionHeader Icon={Info} label="Description" />
        <p className="text-justify">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{description}
        </p>
      </Card>
      <Card className="flex flex-col gap-2">
        <SectionHeader Icon={ShieldCheck} label="Prevention" />
      </Card>
      <Card className="flex flex-col gap-2">
        <SectionHeader Icon={ShieldPlus} label="Treatment" />
      </Card>
    </div>
  );
};

export default PestInfo;
