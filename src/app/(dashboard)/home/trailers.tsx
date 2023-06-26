import MovieItem from "@/components/MovieItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sparkles } from "lucide-react";

export default function Trailers() {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="bg-white rounded-full p-2">
          <Sparkles size={16} fill="black" />
        </SheetTrigger>
        <SheetContent className="bg-black">
          <ScrollArea className="h-full w-full">
            <SheetHeader>
              <SheetTitle className="text-center text-white">
                New trailers
              </SheetTitle>
              <SheetDescription className="flex flex-col items-center gap-4">
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
              </SheetDescription>
            </SheetHeader>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
