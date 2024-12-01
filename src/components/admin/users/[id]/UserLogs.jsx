import SectionHeader from "@/components/global/SectionHeader";
import { Card } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { Logs } from "lucide-react";
import LogsTable from "../../logs/LogsTable";

const UserLogs = async ({ id }) => {
  const { logs } = await prisma.user.findUnique({
    where: { id },
    include: {
      logs: true,
    },
  });

  return (
    <Card className="flex flex-col gap-4">
      <SectionHeader label="User Logs" Icon={Logs} />
      <LogsTable logs={logs} />
    </Card>
  );
};

export default UserLogs;
