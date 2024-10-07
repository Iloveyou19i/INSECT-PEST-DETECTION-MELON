import SectionHeader from "@/components/global/SectionHeader";
import { Card } from "@/components/ui/card";
import { Logs } from "lucide-react";

const UserLogs = ({ id }) => {
  return (
    <Card>
      <SectionHeader label="User Logs" Icon={Logs} />
    </Card>
  );
};

export default UserLogs;
