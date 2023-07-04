"use client";

import { Table } from "@tanstack/react-table";
import { View } from "./view";
import { CreateDialog } from "./create-dialog";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  return (
    <div className="flex gap-3">
      <CreateDialog />
      <View table={table} />
    </div>
  );
}
