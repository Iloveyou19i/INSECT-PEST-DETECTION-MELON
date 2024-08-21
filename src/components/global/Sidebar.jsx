import React from "react";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <aside className="w-[250px] bg-white h-[92vh] p-2 fixed top-[8vh] left-0 border-r shadow-sm z-20 hidden md:block">
      <SidebarLinks />
    </aside>
  );
};

export default Sidebar;
