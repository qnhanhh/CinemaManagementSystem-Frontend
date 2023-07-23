"use client";

import { Table } from "@tanstack/react-table";
import { View } from "./view";
import { CreateDialog } from "./create-dialog";
import Cookies from "js-cookie";
import { systemRoles } from "@/utils/constants";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  const userRole = Cookies.get("role");

  return (
    <div className="flex gap-3">
      {userRole == systemRoles.publisher && <CreateDialog />}
      <View table={table} />
    </div>
  );
}
