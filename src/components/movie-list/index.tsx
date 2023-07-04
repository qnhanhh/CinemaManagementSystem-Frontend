import { ChevronRight } from "lucide-react";
import MovieItem from "../movie-item";
import { listType } from "./constant";
import Link from "next/link";

export default function MovieList({ header, movieSize, direction }: listType) {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <p className="capitalize text-white text-lg">{header}</p>
        <Link
          href="/movies"
          className="text-gray-400 text-sm flex items-center gap-1"
        >
          All movies
          <ChevronRight size={14} />
        </Link>
      </div>
      <div
        className={`w-full py-8 flex gap-6 overflow-x-scroll overflow-y-hidden no-scrollbar flex-${direction}`}
      >
        <div className="flex-shrink-0">
          <MovieItem size={movieSize} />
        </div>
        <div className="flex-shrink-0">
          <MovieItem size={movieSize} />
        </div>
        <div className="flex-shrink-0">
          <MovieItem size={movieSize} />
        </div>
        <div className="flex-shrink-0">
          <MovieItem size={movieSize} />
        </div>
        <div className="flex-shrink-0">
          <MovieItem size={movieSize} />
        </div>
      </div>
    </div>
  );
}
