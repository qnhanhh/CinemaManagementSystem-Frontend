import { ChevronRight } from "lucide-react";
import MovieItem from "../movie-item";
import { listType } from "./constant";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/api/movies";
import { MovieType } from "@/types";
import StateHandler, { States } from "@/components/state-handler";
import { useEffect, useState } from "react";

export default function MovieList({
  header,
  movieSize,
  direction,
  index,
  scale,
  genreId,
  movieList,
  sortBy,
}: listType) {
  const [movieData, setMovieData] = useState<MovieType[]>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllMovies"],
    queryFn: getMovies,
  });

  const sortMovie = (sort: string, arr: MovieType[]) => {
    if (sort == "avgRate") {
      return arr.sort((a: MovieType, b: MovieType) =>
        a.avgRate > b.avgRate ? -1 : 1
      );
    }
    return arr;
  };

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
        {sortBy
          ? movieList
            ? sortMovie(sortBy, movieList)
                .filter(
                  (item: MovieType) => item.status.toLowerCase() == "active"
                )
                .map((movie: MovieType) => (
                  <div key={movie.id} className="flex-shrink-0">
                    <Link href={`/movies/${movie.id}`}>
                      <MovieItem size={movieSize} props={movie} scale={scale} />
                    </Link>
                  </div>
                ))
            : sortMovie(sortBy, data)
                .filter(
                  (item: MovieType) => item.status.toLowerCase() == "active"
                )
                .slice(index, index + 10)
                .map((movie: MovieType) => (
                  <div key={movie.id} className="flex-shrink-0">
                    <Link href={`/movies/${movie.id}`}>
                      <MovieItem size={movieSize} props={movie} scale={scale} />
                    </Link>
                  </div>
                ))
          : movieList
          ? movieList
              .sort((a: MovieType, b: MovieType) =>
                a.releaseDate > b.releaseDate ? -1 : 1
              )
              .filter(
                (item: MovieType) => item.status.toLowerCase() == "active"
              )
              .map((movie: MovieType) => (
                <div key={movie.id} className="flex-shrink-0">
                  <Link href={`/movies/${movie.id}`}>
                    <MovieItem size={movieSize} props={movie} scale={scale} />
                  </Link>
                </div>
              ))
          : data
              .sort((a: MovieType, b: MovieType) =>
                a.releaseDate > b.releaseDate ? -1 : 1
              )
              .filter(
                (item: MovieType) => item.status.toLowerCase() == "active"
              )
              .slice(index, index + 10)
              .map((movie: MovieType) => (
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
