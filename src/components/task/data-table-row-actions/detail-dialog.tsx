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

interface DataTableRowActionsProps<UserType> {
  row: Row<MovieType>;
  tab: string;
}

export default function DataTableRowActions({
  row,
}: DataTableRowActionsProps<MovieType>) {
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
              value={row.getValue("id")}
              className="col-span-3"
            />
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              disabled
              id="title"
              value={row.original.title}
              className="col-span-3"
            />
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              disabled
              id="description"
              value={row.original.description}
              className="col-span-3"
            />
            <Label htmlFor="imageUrl" className="text-right">
              Image URL
            </Label>
            <Input
              disabled
              id="imageUrl"
              value={row.original.imageUrl}
              className="col-span-3"
            />
            <Label htmlFor="backDropUrl" className="text-right">
              Backdrop URL
            </Label>
            <Input
              disabled
              id="backDropUrl"
              value={row.original.backDropUrl}
              className="col-span-3"
            />
            <Label htmlFor="ageRequired" className="text-right">
              Age required
            </Label>
            <Input
              disabled
              id="ageRequired"
              value={row.original.ageRequired}
              className="col-span-3"
            />
            <Label htmlFor="releaseDate" className="text-right">
              Release date
            </Label>
            <Input
              disabled
              id="releaseDate"
              value={row.original.releaseDate}
              className="col-span-3"
            />
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Input
              disabled
              id="status"
              value={row.original.status}
              className="col-span-3"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
