import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Newspaper, MoreHorizontal, Edit } from "lucide-react";
import { DialogTrigger } from "@/components/ui/dialog";

export default function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DialogTrigger asChild>
          <DropdownMenuItem>
            <Newspaper className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Details
          </DropdownMenuItem>
        </DialogTrigger>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
