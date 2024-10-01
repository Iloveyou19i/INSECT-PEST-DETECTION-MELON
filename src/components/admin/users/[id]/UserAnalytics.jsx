import React from "react";
import UserActivity from "./UserActivity";
import UserLogs from "./UserLogs";

const UserAnalytics = () => {
  return (
    <div className="flex flex-col gap-4">
      <UserActivity />
      <UserLogs />
    </div>
  );
};

export default UserAnalytics;
