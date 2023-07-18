import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { activeStatus } from "../task/data/data";

export default function CustomDropdown({ initValue }: { initValue?: string }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(initValue) || "";
  console.log("value", value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="col-span-3 justify-between capitalize"
        >
          {value ? value : "Select status..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="col-span-3 p-0">
        <Command>
          <CommandInput placeholder="Search status..." />
          <CommandEmpty>No status found.</CommandEmpty>
          <CommandGroup>
            {activeStatus.map((status) => (
              <CommandItem
                key={status.value}
                onSelect={(currentValue) => {
                  setValue(currentValue == value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value == status.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {status.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
