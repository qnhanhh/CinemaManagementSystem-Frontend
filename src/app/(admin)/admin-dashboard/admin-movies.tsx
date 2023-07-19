import { Metadata } from "next";

import { columns } from "@/components/task/columns/movies";
import { DataTable } from "@/components/task/data-table";
import { TabsContent } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/api/movies";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.

export default async function AdminMovies() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllMovies"],
    queryFn: getMovies,
  });


  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <TabsContent value="movies" className="space-y-4">
      <div className="hidden h-full flex-1 flex-col space-y-8 py-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div className="text-white">
            <h2 className="text-2xl font-bold tracking-tight">
              Here&apos;s a list of movies in your system!
            </h2>
          </div>
        </div>
        <DataTable data={data} columns={columns} />
      </div>
    </TabsContent>
  );
}
