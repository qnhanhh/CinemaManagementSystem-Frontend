"use client";

import MovieItem from "@/components/movie-item";
import Filter from "./filter";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/api/movie";
import { ImgBaseURL } from "@/utils/constants";
import { MovieType } from "@/types";

export default function Movies() {
  const { data, isLoading } = useQuery({
    queryKey: ["getAllMovies"],
    queryFn: getMovies,
  });

  return (
    <div>
      <p className="text-white text-2xl font-semibold pl-6 mb-6">All movies</p>
      <div className="flex flex-wrap gap-6 justify-center">
        {isLoading && <div>Loading...</div>}
        {data?.map((movie:MovieType) => (
          <MovieItem
            size="md"
            key={movie.id}
            title={movie.title}
            imageUrl={`${ImgBaseURL}${movie.imageUrl}`}
          />
        ))}
      </div>
      <Filter />
    </div>
  );
}
