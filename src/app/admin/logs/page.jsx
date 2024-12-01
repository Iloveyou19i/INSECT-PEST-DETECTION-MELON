import LogsTable from "@/components/admin/logs/LogsTable";
import prisma from "@/lib/prisma";
import React from "react";

const page = async () => {
  const logs = await prisma.userLogs.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section className="flex flex-col gap-4">
      <h2 className="h2">Manage Logs</h2>
      <LogsTable logs={logs} />
    </section>
  );
};

export default page;
