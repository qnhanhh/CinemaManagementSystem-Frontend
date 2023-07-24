"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { DataTableColumnHeader } from "../data-table-column-header";
import { ImgBaseURL } from "@/utils/constants";
import { MovieType } from "@/types";
import { activeStatus } from "../data/data";
import DataTableRowActions from "../data-table-row-actions/detail-dialog";
import { splitDate } from "@/utils/function";

export const columns: ColumnDef<MovieType>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Movie Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] flex items-center gap-8 font-medium">
            <Image
              src={`${ImgBaseURL}${row.original.imageUrl}`}
              width={50}
              height={80}
              style={{ height: "auto", width: "auto" }}
              alt={row.original.title}
            />
            {row.original.title}
          </span>
        </div>
      );
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
          <span>{splitDate(row.original.releaseDate)}</span>
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
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = activeStatus.find(
        (item) => item.value.toLowerCase() === row.original.status.toLowerCase()
      );
      if (!status) {
        return null;
      }

      return (
        <div className="flex items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
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
