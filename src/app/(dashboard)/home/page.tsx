"use client";

import MovieList from "@/components/movie-list";
import Banner from "./banner";
import Trailers from "./trailers";
import { useLoginStore } from "@/store";
import { useEffect } from "react";

export default function Home() {
  const setLogin=useLoginStore((state)=>state.setLogin);

  useEffect(()=>{
    if(localStorage.getItem('token')){
      setLogin(true);
    }
  }, [])

  return (
    <div>
      <Trailers />
      <div className="w-2/3 mx-auto">
        <Banner />
        <MovieList header="Recently released" movieSize="lg" direction="row" index={0} />
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
