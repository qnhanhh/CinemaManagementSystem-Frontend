import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div className="relative flex-1">
      <Search className="absolute z-10 left-2 top-1/2 -translate-y-1/2" />
      <Input className="absolute z-0 top-1/2 -translate-y-1/2 px-10" />
    </div>
  );
}
