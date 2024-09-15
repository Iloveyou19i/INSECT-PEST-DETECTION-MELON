import OutputsTable from "@/components/admin/outputs/OutputsTable";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="h2">Manage Outputs</h2>
      <OutputsTable />
    </section>
  );
};

export default page;
