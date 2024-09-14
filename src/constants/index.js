import { Bug, Images, LayoutDashboard, ScanLine, Users } from "lucide-react";

export const colors = [
  "blue",
  "green",
  "indigo",
  "red",
  "darkorange",
  "magenta",
  "brown",
];

export const userLinks = [
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

export const adminLinks = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    Icon: LayoutDashboard,
  },
  {
    label: "Manage Users",
    href: "/admin/users",
    Icon: Users,
  },
  {
    label: "Manage Outputs",
    href: "/admin/outputs",
    Icon: Images,
  },
  {
    label: "Manage Pests",
    href: "/admin/pests",
    Icon: Bug,
  },
];
