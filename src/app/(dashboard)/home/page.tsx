"use client";

import MovieList from "@/components/movie-list";
import Banner from "./banner";
import Trailers from "./trailers";

export default function Home() {
  return (
    <div>
      <Trailers />
      <div className="w-2/3 mx-auto">
        <Banner />
        <MovieList header="Continue watching" movieSize="lg" direction="row" />
        <MovieList
          header="Popular movies 2023"
          movieSize="sm"
          direction="row"
        />
      </div>
    </div>
  );
}
