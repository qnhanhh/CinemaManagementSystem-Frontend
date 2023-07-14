import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import Dropdown from ".";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Row } from "@tanstack/react-table";
import { MovieType } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import TextButton from "@/components/button/text-button";
import { Folder, Pen } from "lucide-react";
import { useState } from "react";

interface DataTableRowActionsProps<MovieType> {
  row: Row<MovieType>;
  tab: string;
}

export default function DataTableRowActions({
  row,
}: DataTableRowActionsProps<MovieType>) {
  const [isAble, setIsAble] = useState<boolean>(false);

  const toggleEnable = () => {
    setIsAble(!isAble);
  };

  return (
    <Dialog>
      <Dropdown />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Movie details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              ID
            </Label>
            <Input
              disabled
              id="id"
              value={row.original.id}
              className="col-span-3"
            />
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              disabled={!isAble}
              id="title"
              value={row.original.title}
              className="col-span-3"
            />
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              disabled={!isAble}
              id="description"
              value={row.original.description}
              className="col-span-3"
            />
            <Label htmlFor="ageRequired" className="text-right">
              Age required
            </Label>
            <Input
              disabled={!isAble}
              id="ageRequired"
              value={row.original.ageRequired}
              className="col-span-3"
            />
            <Label htmlFor="releaseDate" className="text-right">
              Release date
            </Label>
            <Input
              disabled={!isAble}
              id="releaseDate"
              value={row.original.releaseDate.split("T")[0]}
              className="col-span-3"
            />
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Input
              disabled={!isAble}
              id="status"
              value={row.original.status}
              className="col-span-3"
            />
          </div>
        </div>
        <div className="ml-auto" onClick={toggleEnable}>
          {isAble ? (
            <TextButton text="Save" icon={Folder} />
          ) : (
            <TextButton text="Edit" icon={Pen} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
