import { cn } from "@/lib/utils";
import Link from "next/link";

const bgVariants = {
  Aphids: "bg-blue-700",
  Leafminers: "bg-green-700",
  Moths: "bg-purple-700",
  ["Red-Melon-Beetle"]: "bg-red-600",
  Whiteflies: "bg-orange-500",
};

const DetectionBadge = ({ pest, value }) => {
  return (
    <Link
      href={`/pests/${pest}`}
      className={cn(`text-sm text-white px-2 rounded-full ${bgVariants[pest]}`)}
    >
      {pest} {value}
    </Link>
  );
};

export default DetectionBadge;
