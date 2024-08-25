import { cn } from "@/lib/utils";
import Link from "next/link";

const bgVariants = {
  Aphids: "bg-blue-700",
  Fruitfly: "bg-green-700",
  ["Pumpkin-Beetle"]: "bg-purple-700",
  ["Serpentine-leafminer"]: "bg-red-600",
  Whitefly: "bg-orange-500",
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
