"use client";
import { userLinks, adminLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLinks = () => {
  const pathname = usePathname();
  const links = !pathname.includes("admin") ? userLinks : adminLinks;

  return (
    <nav className="w-full">
      <ul className="w-full flex flex-col gap-2">
        {links.map(({ label, href, Icon }) => {
          const isActive =
            (pathname.includes(href) && href.length > 1) || pathname === href;

          return (
            <li key={label} className="w-full">
              <Link
                href={href}
                className={`w-full h-full flex p-2 rounded-md hover:bg-primary hover:text-white transition ${
                  isActive && "bg-primary text-white"
                }`}
              >
                <Icon className="mr-4" /> {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarLinks;
