"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toMs } from "@/lib/utils";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Id",
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "image",
    header: () => <div className="text-center">Image</div>,
    cell: ({ row }) => {
      const output = row.original;

      return (
        <div className="flex justify-center">
          <Image
            src={output.image}
            alt="output-image"
            height={40}
            width={40}
            className="object-cover object-center"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "detections",
    header: () => <div className="text-center">Detections</div>,
    cell: ({ row }) => {
      const output = row.original;

      return <div className="text-center">{output.detections.length}</div>;
    },
  },
  {
    accessorKey: "time",
    header: () => <div className="text-center">Inference Time</div>,
    cell: ({ row }) => {
      const output = row.original;

      return <div className="text-center">{toMs(output.time)}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const output = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(output.id)}
            >
              Copy Id
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/admin/outputs/${output.id}`}>View</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
