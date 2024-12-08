import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteLog } from "@/lib/actions/logs.action";
import { MoreHorizontal } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const LogsActions = ({ row }) => {
  const log = row.original;
  const [isSubmitting, setIsSubmitting] = useState();
  const pathname = usePathname();

  const handleDelete = async () => {
    try {
      setIsSubmitting(true);
      await deleteLog(log.id, pathname);
      toast.success("Log deleted");
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DropdownMenu disabled={isSubmitting}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(log.id)}>
          Copy Id
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LogsActions;
