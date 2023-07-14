import MovieDetail from "@/components/movie-detail";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Movie Detail</h1>
      <MovieDetail id={params.id} />
    </div>
  );
}
