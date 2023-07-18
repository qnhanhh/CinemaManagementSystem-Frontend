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
import { Pen } from "lucide-react";
import { useState } from "react";
import View from "./view";
import EditForm from "../edit-form";

interface DataTableRowActionsProps<MovieType> {
  row: Row<MovieType>;
  tab: string;
}

export default function DataTableRowActions({
  row,
}: DataTableRowActionsProps<MovieType>) {
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
        <div className="ml-auto" onClick={toggleEdit}>
          {!isEdit && <TextButton text="Edit" icon={Pen} />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
