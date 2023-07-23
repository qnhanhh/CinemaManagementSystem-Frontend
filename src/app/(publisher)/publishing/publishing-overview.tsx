import { Overview } from "@/components/admin-dashboard/dashboard-overview";
import { RecentSales } from "@/components/admin-dashboard/recent-sales";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { MovieType } from "@/types";
import { DollarSign, Activity } from "lucide-react";

export default function PublishingOverview({ movies }: { movies: MovieType[] }) {
  return (
    <TabsContent value="overview" className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Movies</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{movies.length}</div>
            <p className="text-xs text-muted-foreground">
              movies in your company
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{movies.filter((item:MovieType)=>item.status.toLowerCase()=='active').length}</div>
            <p className="text-xs text-muted-foreground">
              currently active movies
            </p>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Recent Released</CardTitle>
            <CardDescription>Sort by released date</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales movies={movies} />
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
}
