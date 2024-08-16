import React from "react";
import UserAvatar from "./UserAvatar";

const Navbar = () => {
  return (
    <section className="w-full flex justify-center shadow-sm">
      <div className="container flex justify-between items-center">
        <div>Logo</div>
        <div>
          <UserAvatar image={"https://github.com/shadcn.png"} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
