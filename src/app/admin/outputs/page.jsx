import OutputsTable from "@/components/admin/outputs/OutputsTable";
import prisma from "@/lib/prisma";
import React from "react";

const page = async () => {
  const outputs = await prisma.output.findMany({
    include: {
      detections: true,
    },
  });

  console.log(outputs.length);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="h2">Manage Outputs</h2>
      <OutputsTable outputs={outputs} />
    </section>
  );
};

export default page;
