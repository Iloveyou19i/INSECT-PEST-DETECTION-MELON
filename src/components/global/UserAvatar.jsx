import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { CircleUserRound } from "lucide-react";

const UserAvatar = ({ img, size, hasLoading = false }) => {
  return (
    <Avatar size={size}>
      <AvatarImage src={img} alt="user profile" />
      <AvatarFallback>
        {hasLoading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-100">
            <CircleUserRound className="w-[50%] h-[50%]" />
          </div>
        )}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
