import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MovieType } from "@/types";
import { splitDate } from "@/utils/function";
import { Row } from "@tanstack/react-table";

export default function View({ row }: { row: Row<MovieType> }) {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="id" className="text-right">
        ID
      </Label>
      <Input disabled id="id" value={row.original.id} className="col-span-3" />
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
      <Textarea
        disabled
        id="description"
        value={row.original.description}
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
        value={splitDate(row.original.releaseDate)}
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
  );
}
