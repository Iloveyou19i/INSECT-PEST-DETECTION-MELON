"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileSidebar = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-4">
          <SheetHeader>
            <SheetTitle>
              <Image src="./logo.svg" alt="Logo" height={50} width={100} />
            </SheetTitle>
            <SheetDescription aria-describedby="mobile sidebar"></SheetDescription>
          </SheetHeader>
          <ul className="w-full flex flex-col gap-2">
            {sidebarLinks.map(({ label, href, Icon }) => {
              const isActive =
                (pathname.includes(href) && href.length > 1) ||
                pathname === href;

              return (
                <li key={label} className="w-full">
                  <SheetClose asChild>
                    <Link
                      href={href}
                      className={`w-full h-full flex p-2 rounded-md hover:bg-primary hover:text-white transition ${
                        isActive && "bg-primary text-white"
                      }`}
                    >
                      <Icon className="mr-4" /> {label}
                    </Link>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
