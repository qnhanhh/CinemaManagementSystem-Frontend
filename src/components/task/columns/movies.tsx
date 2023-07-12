"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { DataTableColumnHeader } from "../data-table-column-header";
import { ImgBaseURL } from "@/utils/constants";
import { MovieType } from "@/types";
import { activeStatus } from "../data/data";
import DataTableRowActions from "../data-table-row-actions/detail-dialog";

export const columns: ColumnDef<MovieType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Movie ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.original.id}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Movie Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.original.title}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "imageUrl",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] gap-2 items-center">
          <Image src={`${ImgBaseURL}${row.original.imageUrl}`} alt="" />
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "releaseDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Release Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.original.releaseDate}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Trạng thái" />
    ),
    cell: ({ row }) => {
      const status = activeStatus.find(
        (item) => item.value === row.original.status
      );
      if (!status) {
        return null;
      }
      const statusColor =
        status.value.toLowerCase() == "active"
          ? "text-green-800"
          : "text-red-800";
      return (
        <div className="flex items-center">
          {status.icon && (
            <status.icon
              className={`mr-2 h-4 w-4 text-muted-foreground ${statusColor}`}
            />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} tab="movie" />,
  },
];
