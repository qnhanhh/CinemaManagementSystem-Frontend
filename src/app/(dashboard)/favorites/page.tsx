import MovieList from "@/components/movie-list";

export default function Favorites(){
    return(
        <div className="px-4">
            <MovieList header="Recently added" movieSize="sm" direction="row" />
            <MovieList header="Recommended only for you" movieSize="lg" direction="row" />
            <MovieList header="Continue watching" movieSize="md" direction="row" />
        </div>
    )
}