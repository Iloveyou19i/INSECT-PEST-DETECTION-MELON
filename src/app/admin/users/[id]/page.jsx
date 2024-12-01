import UserAnalytics from "@/components/admin/users/[id]/UserAnalytics";
import UserProfileContent from "@/components/admin/users/[id]/UserProfileContent";
import React from "react";

const page = ({ params }) => {
  const { id } = params;
  return (
    <section className="flex flex-col gap-4">
      <h2 className="h2">Profile</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <UserProfileContent id={id} />
        <UserAnalytics id={id} />
      </div>
    </section>
  );
};

export default page;
