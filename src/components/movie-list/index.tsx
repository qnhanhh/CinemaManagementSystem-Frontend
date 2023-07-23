import { ChevronRight } from "lucide-react";
import MovieItem from "../movie-item";
import { listType } from "./constant";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/api/movies";
import { MovieType } from "@/types";
import StateHandler, { States } from "@/components/state-handler";

export default function MovieList({
  header,
  movieSize,
  direction,
  index,
  scale,
  genreId,
}: listType) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllMovies"],
    queryFn: getMovies,
  });

  if (isLoading) return <StateHandler state={States.Loading} />;
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-2">
        <p className="capitalize text-white text-lg">{header}</p>
        <Link
          href={genreId ? `/movies/genre/${genreId}` : "/movies"}
          className="text-gray-400 text-sm flex items-center gap-1"
        >
          All movies
          <ChevronRight size={14} />
        </Link>
      </div>
      <div
        className={`w-full py-8 flex gap-6 overflow-x-scroll overflow-y-hidden no-scrollbar flex-${direction}`}
      >
        {data.slice(index, index + 10).map((movie: MovieType) => (
          <div key={movie.id} className="flex-shrink-0">
            <Link href={`/movies/${movie.id}`}>
              <MovieItem size={movieSize} props={movie} scale={scale} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
