import { auth } from "@/lib/auth";
import React from "react";

const page = async () => {
  const { user } = await auth();

  if (user.role !== "admin") redirect("/");

  return <div>Dashboard page</div>;
};

export default page;
