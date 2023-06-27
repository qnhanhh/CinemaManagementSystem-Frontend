import { Star, Triangle } from "lucide-react";
import Image from "next/image";
import PlayButton from "../button/play-button";

const movieSize = {
  sm: "w-56 h-36",
  md: "w-64 h-40",
  lg: "w-96 h-52",
};

export default function MovieItem({ size }: { size: string }) {
  const { sm, md, lg } = movieSize;
  const itemSize = size == "sm" ? sm : size == "md" ? md : lg;

  return (
    <div className={`relative ${itemSize} rounded-xl overflow-hidden`}>
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          src="https://images.thedirect.com/media/article_full/spider-man-no-way-home-poster-doc-ock.jpg"
          alt=""
          fill
        />
      </div>
      <div className="flex w-full rounded-xl justify-between gap-3 items-center p-2 absolute bottom-0 bg-opacity-80 bg-black">
        {size != "sm" && <PlayButton fill="black" background="white" />}
        <div className="flex-1 leading-3">
          <p className="text-sm text-white font-semibold">Black Panther</p>
          {size == "md" ? (
            <span className="text-gray-300 text-xs">2hrs ago</span>
          ) : size == "sm" ? (
            <span className="text-gray-300 text-xs">2018</span>
          ) : (
            <span className="text-gray-300 text-xs">
              Adventure / Sci-fi / Action
            </span>
          )}
        </div>
        {size == "sm" ? (
          <div className="text-white text-xs flex gap-1">
            <Star fill="orange" className="text-orange-400" size={16} />
            4.8
          </div>
        ) : size == "md" ? (
          <div className="text-black text-xs py-1 px-3 bg-white rounded-full flex justify-center items-center">
            02:59
          </div>
        ) : (
          <div className="text-black text-xs py-1 px-3 bg-white rounded-full flex justify-center items-center">
            02:59:15
          </div>
        )}
      </div>
    </div>
  );
}
