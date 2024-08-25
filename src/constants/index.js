import { Bug, Images, LayoutDashboard, ScanLine } from "lucide-react";

export const colors = [
  "blue",
  "green",
  "indigo",
  "red",
  "darkorange",
  "magenta",
  "brown",
];

export const sidebarLinks = [
  {
    label: "Dashboard",
    href: "/",
    Icon: LayoutDashboard,
  },
  {
    label: "Images",
    href: "/images",
    Icon: Images,
  },
  {
    label: "Detection",
    href: "/detection",
    Icon: ScanLine,
  },
  {
    label: "Pests",
    href: "/pests",
    Icon: Bug,
  },
];
