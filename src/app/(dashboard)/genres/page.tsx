"use client";

import MovieList from "@/components/movie-list";
import { useQuery } from "@tanstack/react-query";
import { getGenres } from "@/api/genres";
import { GenreType } from "@/types";

export default function Genres() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllGenres"],
    queryFn: getGenres,
  });

  return (
    <div className="px-4">
      {isLoading && <div>Loading...</div>}
      {data?.map((genre: GenreType) => (
        <MovieList
          key={genre.id}
          header={genre.name}
          movieSize="lg"
          direction="row"
        />
      ))}
    </div>
  );
}
