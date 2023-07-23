import MovieList from "@/components/movie-list";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sparkles } from "lucide-react";

export default function Trailers() {
  return (
    <div className="absolute left-8 bottom-8">
      <Sheet>
        <SheetTrigger className="animate-bounce bg-white rounded-full p-2 fixed bottom-4">
          <Sparkles size={16} fill="black" />
        </SheetTrigger>
        <SheetContent className="bg-black p-4">
          <ScrollArea className="h-full w-full mt-5">
            <SheetDescription className="flex flex-col items-center gap-6">
              <MovieList header="New trailers" movieSize="md" direction="col" index={1} scale={false} />
            </SheetDescription>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
