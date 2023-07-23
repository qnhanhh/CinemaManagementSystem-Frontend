import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import Dropdown from ".";
import { Row } from "@tanstack/react-table";
import { MovieType } from "@/types";
import TextButton from "@/components/button/text-button";
import { Pen, Trash } from "lucide-react";
import { useState } from "react";
import View from "./view";
import EditForm from "../edit-form";
import Cookies from "js-cookie";
import { systemRoles } from "@/utils/constants";

interface DataTableRowActionsProps<MovieType> {
  row: Row<MovieType>;
  tab: string;
}

export default function DataTableRowActions({
  row,
}: DataTableRowActionsProps<MovieType>) {
  const userRole = Cookies.get("role");

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <Dialog>
      <Dropdown />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Movie details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {isEdit ? <EditForm row={row} /> : <View row={row} />}
        </div>
        {userRole == systemRoles.publisher && (
          <div className="ml-auto flex gap-3" onClick={toggleEdit}>
            {!isEdit && <TextButton text="Edit" icon={Pen} />}
            {row.original.status == "Inactive" && !isEdit && (
              <TextButton text="Delete movie" icon={Trash} />
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
