import { auth } from "@/lib/auth";
import React from "react";

const page = async () => {
  const { user } = await auth();

  if (user.role !== "admin") redirect("/");

  return (
    <section className="flex flex-col gap-4">
      <h2 className="h2">Dashboard</h2>
    </section>
  );
};

export default page;
