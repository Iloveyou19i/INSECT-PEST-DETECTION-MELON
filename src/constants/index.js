import {
  Bug,
  CircleUserRound,
  Images,
  LayoutDashboard,
  Logs,
  ScanLine,
  Users,
} from "lucide-react";

export const colors = [
  "blue",
  "indigo",
  "green",
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
  {
    label: "Manage Logs",
    href: "/admin/logs",
    Icon: Logs,
  },
];
