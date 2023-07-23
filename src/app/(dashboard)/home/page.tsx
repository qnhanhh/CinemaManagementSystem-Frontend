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
        <MovieList
          header="Recently released"
          movieSize="lg"
          direction="row"
          index={0}
        />
        <MovieList
          header="Popular movies 2023"
          movieSize="sm"
          direction="row"
          index={10}
        />
      </div>
    </div>
  );
}
