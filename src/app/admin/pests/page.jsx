import PestModalForm from "@/components/admin/pests/PestModalForm";
import PestsTable from "@/components/admin/pests/PestsTable";
import prisma from "@/lib/prisma";
import React from "react";

const page = async () => {
  const pests = await prisma.pest.findMany();

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="h2">Manage Pests</h2>
        <PestModalForm />
      </div>
      <PestsTable pests={pests} />
    </section>
  );
};

export default page;
