"use client";

import MovieItem from "@/components/movie-item";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/api/movies";
import { MovieType } from "@/types";
import Link from "next/link";

export default function Movies() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllMovies"],
    queryFn: getMovies,
  });

  return (
    <div>
      <p className="text-white text-2xl font-semibold pl-6 mb-6">All movies</p>
      <div className="flex flex-wrap gap-6 justify-center">
        {isLoading && <div>Loading...</div>}
        {data?.map((movie: MovieType) => (
          <Link href={`/movies/${movie.id}`} key={movie.id}>
            <MovieItem size="md" props={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}
