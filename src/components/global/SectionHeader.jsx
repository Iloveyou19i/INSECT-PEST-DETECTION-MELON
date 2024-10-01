import React from "react";

const SectionHeader = ({ Icon, label }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 bg-primary rounded-md">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <p className="text-2xl font-semibold">{label}</p>
    </div>
  );
};

export default SectionHeader;
