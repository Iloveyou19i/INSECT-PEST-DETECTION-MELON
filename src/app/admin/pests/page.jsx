import PestsTable from "@/components/admin/pests/PestsTable";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="h2">Manage Pests</h2>
      <PestsTable />
    </section>
  );
};

export default page;
