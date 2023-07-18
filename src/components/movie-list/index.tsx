import { ChevronRight } from "lucide-react";
import MovieItem from "../movie-item";
import { listType } from "./constant";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/api/movie";
import { MovieType } from "@/types";

export default function MovieList({ header, movieSize, direction }: listType) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllMovies"],
    queryFn: getMovies,
  });

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
        {isLoading && <div>Loading...</div>}
        {data?.map((movie: MovieType) => (
          <div key={movie.id} className="flex-shrink-0">
            <Link href={`/movies/${movie.id}`}>
              <MovieItem size={movieSize} props={movie} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
