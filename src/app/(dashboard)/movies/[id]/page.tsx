import MovieDetail from "@/components/movie-detail";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <MovieDetail id={params.id} />
    </div>
  );
}
