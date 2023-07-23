"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminOverview from "./admin-overview";
import AdminMovies from "./admin-movies";
import AdminFunctions from "./admin-functions";
import AdminUsers from "./admin-users";

export default function DashboardPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl text-white font-bold tracking-tight">
              Dashboard
            </h2>
          </div>
          <Tabs defaultValue="movies" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="movies">Movies</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="functions">Functions</TabsTrigger>
            </TabsList>
            <AdminOverview />
            <AdminMovies />
            <AdminUsers />
            <AdminFunctions />
          </Tabs>
        </div>
      </div>
    </>
  );
}
