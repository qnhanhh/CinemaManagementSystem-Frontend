import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MovieType } from "@/types";
import { ImgBaseURL } from "@/utils/constants";
import { splitDate } from "@/utils/function";
import Image from "next/image";

export function RecentSales({ movies }: { movies: MovieType[] }) {
  return (
    <div className="space-y-8">
      {movies
        .sort((a: MovieType, b: MovieType) =>
          a.releaseDate > b.releaseDate ? -1 : 1
        )
        .slice(0, 5)
        .map((item: MovieType) => (
          <div
            key={item.id}
            className="flex items-center justify-between w-full"
          >
            <div className="space-y-1 flex gap-4 items-center">
              <Image
                src={`${ImgBaseURL}${item.imageUrl}`}
                alt={item.title}
                width={50}
                height={80}
              />
              <div>
                <p className="text-sm font-medium leading-none">{item.title}</p>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="font-medium">{splitDate(item.releaseDate)}</div>
          </div>
        ))}
    </div>
  );
}
