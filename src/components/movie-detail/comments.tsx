import CommentItem from "./comment-item";

export default function Comments({ movieId }: { movieId: string }) {
  return (
    <div>
      <CommentItem rating={8.5} comment="Phim hay lammm" />
      <CommentItem rating={8.5} comment="Phim hay lammm" />
      <CommentItem rating={8.5} comment="Phim hay lammm" />
      <CommentItem rating={8.5} comment="Phim hay lammm" />
      <CommentItem rating={8.5} comment="Phim hay lammm" />
      <CommentItem rating={8.5} comment="Phim hay lammm" />
      <CommentItem rating={8.5} comment="Phim hay lammm" />
      <CommentItem rating={8.5} comment="Phim hay lammm" />
      <CommentItem rating={8.5} comment="Phim hay lammm" />
      <CommentItem rating={8.5} comment="Phim hay lammm" />
    </div>
  );
}
