import SectionHeader from "@/components/global/SectionHeader";
import { Card } from "@/components/ui/card";
import { Activity } from "lucide-react";
import React from "react";

const UserActivity = () => {
  return (
    <Card>
      <SectionHeader label="User Activity" Icon={Activity} />
    </Card>
  );
};

export default UserActivity;
