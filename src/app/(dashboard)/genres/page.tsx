'use client'

import MovieList from "@/components/movie-list";

export default function Genres(){
    return (
        <div className="px-4">
            <MovieList header="Romantic" movieSize="lg" direction="row" />
            <MovieList header="Romantic" movieSize="lg" direction="row" />
            <MovieList header="Romantic" movieSize="lg" direction="row" />
            <MovieList header="Romantic" movieSize="lg" direction="row" />
            <MovieList header="Romantic" movieSize="lg" direction="row" />
        </div>
    )
}