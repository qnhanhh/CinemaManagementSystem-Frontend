"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PublishingOverview from "./publishing-overview";
import PublishingMovies from "./publishing-movies";

export default function PublishingPage() {
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
            <PublishingOverview />
            <PublishingMovies />
          </Tabs>
        </div>
      </div>
    </>
  );
}
