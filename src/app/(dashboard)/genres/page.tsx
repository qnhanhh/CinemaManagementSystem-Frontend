"use client";

import MovieList from "@/components/movie-list";
import { useQuery } from "@tanstack/react-query";
import { getGenres } from "@/api/genres";
import { GenreType } from "@/types";
import StateHandler, { States } from "@/components/state-handler";

export default function Genres() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllGenres"],
    queryFn: getGenres,
  });

  if (isLoading) return <StateHandler state={States.Loading} />;
  
  return (
    <div className="px-4">
      {data.map((genre: GenreType) => (
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
