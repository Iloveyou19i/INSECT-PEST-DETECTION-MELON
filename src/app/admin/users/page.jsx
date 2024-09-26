import UsersTable from "@/components/admin/users/UsersTable";
import prisma from "@/lib/prisma";
import React from "react";

const page = async () => {
  const users = await prisma.user.findMany({
    include: {
      outputs: true,
    },
  });

  return (
    <section className="flex flex-col gap-4">
      <h2 className="h2">Manage Users</h2>
      <UsersTable users={users} />
    </section>
  );
};

export default page;
