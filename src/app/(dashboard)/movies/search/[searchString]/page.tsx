"use client";

import MovieItem from "@/components/movie-item";
import { useQuery } from "@tanstack/react-query";
import { getMovies, searchMovie } from "@/api/movies";
import { MovieType } from "@/types";
import Link from "next/link";
import StateHandler, { States } from "@/components/state-handler";

export default function SearchedMovies({
  params,
}: {
  params: { searchString: string };
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["searchMovies", params.searchString],
    queryFn: () => searchMovie(params.searchString),
  });

  if (isLoading) return <StateHandler state={States.Loading} />;

  return (
    <div>
      <p className="text-white text-2xl font-semibold pl-6 mb-6">All movies</p>
      <div className="flex flex-wrap gap-6 justify-center">
        {data.length > 0 ? (
          data
            .filter((item: MovieType) => item.status.toLowerCase() == "active")
            .map((movie: MovieType) => (
              <Link href={`/movies/${movie.id}`} key={movie.id}>
                <MovieItem size="md" props={movie} />
              </Link>
            ))
        ) : (
          <p className="text-white">Movie not found.</p>
        )}
      </div>
    </div>
  );
}
