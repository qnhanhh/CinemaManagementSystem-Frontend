import { columns } from "@/components/task/columns/movies";
import { DataTable } from "@/components/task/data-table";
import { TabsContent } from "@/components/ui/tabs";
import { MovieType } from "@/types";

export default function PublishingMovies({ movies }: { movies: MovieType[] }) {
  return (
    <TabsContent value="movies" className="space-y-4">
      <div className="hidden h-full flex-1 flex-col space-y-8 py-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div className="text-white">
            <h2 className="text-2xl font-bold tracking-tight">
              Here&apos;s a list of movies in your company!
            </h2>
          </div>
        </div>
        {movies && <DataTable data={movies} columns={columns} />}
      </div>
    </TabsContent>
  );
}
