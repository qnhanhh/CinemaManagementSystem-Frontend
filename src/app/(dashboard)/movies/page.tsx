'use client'

import MovieItem from "@/components/movie-item";
import Filter from "./filter";

export default function Movies() {
  return (
    <div>
      <p className="text-white text-2xl font-semibold pl-6 mb-6">All movies</p>
      <div className="flex flex-wrap gap-6 justify-center">
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
        <MovieItem size="md" />
      </div>
      <Filter />
    </div>
  );
}
