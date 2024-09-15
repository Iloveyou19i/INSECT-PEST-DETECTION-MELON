import UsersTable from "@/components/admin/users/UsersTable";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="h2">Manage Users</h2>
      <UsersTable />
    </section>
  );
};

export default page;
