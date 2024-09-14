"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLeftToLine, CircleUserRound } from "lucide-react";
import { usePathname } from "next/navigation";

const AdminButton = () => {
  const pathname = usePathname();

  if (pathname.includes("admin")) {
    return (
      <Button variant="ghost" size="sm">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeftToLine className="h-4 w-4" /> Exit
        </Link>
      </Button>
    );
  }

  return (
    <Button variant="ghost" size="sm">
      <Link href="/admin" className="flex items-center gap-2">
        <CircleUserRound className="h-4 w-4" /> Admin
      </Link>
    </Button>
  );
};

export default AdminButton;
