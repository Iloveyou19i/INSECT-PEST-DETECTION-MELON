import React from "react";
import UsersTable from "../users/UsersTable";
import prisma from "@/lib/prisma";

const DashboardUsers = async () => {
  const users = await prisma.user.findMany();

  return (
    <div>
      <UsersTable users={users} />
    </div>
  );
};

export default DashboardUsers;
