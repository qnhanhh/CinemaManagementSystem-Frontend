import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <div className="w-screen h-screen bg-slate-800 flex items-center justify-center">
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </div>
  );
}
