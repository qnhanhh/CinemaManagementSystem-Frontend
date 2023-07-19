import { RateType } from "@/types";
import { Star } from "lucide-react";

export default function CommentItem({ rating, comment }: RateType) {
  return (
    <div className="border-solid border-2 border-slate-500 w-full rounded p-4 my-3">
      <div className="text-2xl font-bold flex gap-1 items-center text-white">
        {rating}
        <Star fill="orange" className="text-orange-400" size={20} />
        <span className="text-slate-300 text-sm items-end">/ 5</span>
      </div>
      <div className="text-slate-200 mt-2">{comment}</div>
    </div>
  );
}
