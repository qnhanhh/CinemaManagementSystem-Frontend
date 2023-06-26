import { Triangle } from "lucide-react";
import Image from "next/image";

export default function MovieItem() {
  return (
    <div className="relative w-64 h-40 rounded-xl overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          src="https://images.thedirect.com/media/article_full/spider-man-no-way-home-poster-doc-ock.jpg"
          alt=""
          fill
        />
      </div>
      <div className="flex w-full rounded-xl justify-between gap-3 items-center p-2 absolute bottom-0 bg-opacity-80 bg-gray-500">
        <div className="rounded-full bg-opacity-60 bg-white p-2">
          <Triangle className="rotate-90" fill="black" size={14} />
        </div>
        <div className="flex-1 leading-3">
          <p className="text-sm text-white font-semibold">Black Panther</p>
          <span className="text-gray-300 text-xs">2hrs ago</span>
        </div>
        <div className="text-black text-xs py-1 px-3 bg-white rounded-full flex justify-center items-center">
          02:59
        </div>
      </div>
    </div>
  );
}
