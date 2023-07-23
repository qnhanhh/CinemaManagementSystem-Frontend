"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PublishingOverview from "./publishing-overview";
import PublishingMovies from "./publishing-movies";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieByCompany } from "@/api/movies";
import StateHandler, { States } from "@/components/state-handler";
import { getUserById } from "@/api/users";

export default function PublishingPage() {
  const [userId, setUserId] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    if (localStorage) {
      setUserId(localStorage.getItem("user-id") || "");
    }
  }, []);

  const user = useQuery({
    queryKey: ["getCurrentUser", userId],
    queryFn: () => getUserById(userId),
  });

  useEffect(() => {
    if (user.data) {
      setCompany(user.data.companyId);
    }
  }, [user.data]);

  const movies = useQuery({
    queryKey: ["getAllMoviesByCom", company],
    queryFn: () => getMovieByCompany(company),
  });

  if (user.isLoading || movies.isLoading) {
    return <StateHandler state={States.Loading} />;
  }

  console.log(movies.data);
  
  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl text-white font-bold tracking-tight">
              Publishing
            </h2>
          </div>
          <Tabs defaultValue="movies" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="movies">Movies</TabsTrigger>
            </TabsList>
            <PublishingOverview movies={movies.data} />
            <PublishingMovies movies={movies.data} />
          </Tabs>
        </div>
      </div>
    </>
  );
}
