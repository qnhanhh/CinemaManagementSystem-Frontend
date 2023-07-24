"use client";

import { getUserFavById } from "@/api/users";
import MovieList from "@/components/movie-list";
import StateHandler, { States } from "@/components/state-handler";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Favorites() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (localStorage) setUserId(localStorage.getItem("user-id") || "");
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["getFavorites", userId],
    queryFn: () => getUserFavById(userId),
  });

  if (isLoading) return <StateHandler state={States.Loading} />;

  return (
    <div className="px-4">
      {data && (
        <MovieList
          index={0}
          header="Recently added"
          movieSize="sm"
          direction="row"
        //   movieList={data}
        />
      )}
      <MovieList
        index={0}
        header="Recommended only for you"
        movieSize="lg"
        direction="row"
      />
    </div>
  );
}
