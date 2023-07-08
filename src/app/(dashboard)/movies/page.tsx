"use client";

import MovieItem from "@/components/movie-item";
import Filter from "./filter";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/api/movie";

export default function Movies() {
  const { data } = useQuery({
    queryKey: ["getAllMovies"],
    queryFn: getMovies,
  });

  return (
    <div>
      <p className="text-white text-2xl font-semibold pl-6 mb-6">All movies</p>
      <div className="flex flex-wrap gap-6 justify-center">
        {data?.map((movie) => (
          <MovieItem
            size="md"
            key={movie.id}
            title={movie.title}
            description={movie.description}
            imageUrl={`https://image.tmdb.org/t/p/original${movie.imageUrl}`}
          />
        ))}
      </div>
      <Filter />
    </div>
  );
}
