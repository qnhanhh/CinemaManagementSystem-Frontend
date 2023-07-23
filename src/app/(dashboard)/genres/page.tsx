"use client";

import MovieList from "@/components/movie-list";
import { useQuery } from "@tanstack/react-query";
import { getGenresMovie } from "@/api/genres";
import { GenreMovieType, GenreType } from "@/types";
import StateHandler, { States } from "@/components/state-handler";

export default function Genres() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllGenresMovies"],
    queryFn: getGenresMovie,
  });

  if (isLoading) return <StateHandler state={States.Loading} />;
  
  return (
    <div className="px-4">
      {data.filter((item:GenreMovieType)=>item.movies.length>0).map((genre: GenreMovieType) => (
        <MovieList
          key={genre.id}
          header={genre.name}
          genreId={genre.id}
          movieList={genre.movies}
          movieSize="lg"
          direction="row"
          index={0}
        />
      ))}
    </div>
  );
}
