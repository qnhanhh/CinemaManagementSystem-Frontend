import Link from "next/link";

export default function Logo() {
  return (
    <div className="text-white font-bold uppercase text-3xl tracking-widest">
      <Link href="/home">
        <h1>Muuvii</h1>
      </Link>
    </div>
  );
}
