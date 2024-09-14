import React from "react";
import UserAvatar from "./UserAvatar";
import { auth } from "@/lib/auth";
import Image from "next/image";
import MobileSidebar from "./MobileSidebar";
import { Button } from "../ui/button";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import AdminButton from "../admin/AdminButton";

const Navbar = async () => {
  const { user } = await auth();

  return (
    <section className="h-[8vh] bg-white fixed top-0 left-0 right-0 flex justify-center border-b shadow-sm z-50">
      <div className="w-full h-full flex justify-between items-center px-2 md:px-4">
        <div className="flex gap-2 items-center">
          <div className="inline-block md:hidden">
            <MobileSidebar />
          </div>
          <Image src="/logo.svg" alt="Logo" height={50} width={100} />
        </div>
        <div className="flex gap-4 items-center">
          {user.role === "admin" && <AdminButton />}
          <UserAvatar image={user.image} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
