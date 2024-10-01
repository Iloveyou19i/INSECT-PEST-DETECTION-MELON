import SectionHeader from "@/components/global/SectionHeader";
import { Card } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { CircleUserRound } from "lucide-react";
import React from "react";
import UpdateUserForm from "./UpdateUserForm";

const UserProfile = async ({ id }) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return (
    <Card className="flex flex-col gap-4">
      <SectionHeader Icon={CircleUserRound} label="User" />
      <UpdateUserForm user={user} />
    </Card>
  );
};

export default UserProfile;
