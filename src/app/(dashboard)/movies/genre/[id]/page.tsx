"use client";

import MovieItem from "@/components/movie-item";
import { useQuery } from "@tanstack/react-query";
import { getMovieByGenre } from "@/api/movies";
import { MovieType } from "@/types";
import Link from "next/link";
import StateHandler, { States } from "@/components/state-handler";
import { getGenreById } from "@/api/genres";

export default function MoviesByGenre({ params }: { params: { id: string } }) {
  const genre = useQuery({
    queryKey: ["getGenre", params.id],
    queryFn: () => getGenreById(params.id),
  });

  const movies = useQuery({
    queryKey: ["getMoviesByGenre", params.id],
    queryFn: () => getMovieByGenre(params.id),
  });

  if (movies.isLoading || genre.isLoading)
    return <StateHandler state={States.Loading} />;

  return (
    <div>
      <p className="text-white text-2xl font-semibold pl-6 mb-6">
        {genre.data.name}
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        {movies.data.length === 0 && (<p className="text-white">We are still updating. Please come back later!</p>)}
        {movies.data.map((movie: MovieType) => (
          <Link href={`/movies/${movie.id}`} key={movie.id}>
            <MovieItem size="md" props={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}
