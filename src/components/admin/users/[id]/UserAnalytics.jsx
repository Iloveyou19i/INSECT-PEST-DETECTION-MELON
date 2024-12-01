import React from "react";
import UserActivity from "./UserActivity";
import UserLogs from "./UserLogs";

const UserAnalytics = ({ id }) => {
  return (
    <div className="flex flex-col gap-4">
      <UserActivity />
      <UserLogs id={id} />
    </div>
  );
};

export default UserAnalytics;
