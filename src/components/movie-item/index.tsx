import { Play, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import PlainButton from "../button/plain-button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MovieType } from "@/types";
import { ImgBaseURL, movieSize } from "@/utils/constants";
import { Badge } from "@/components/ui/badge";

export default function MovieItem({
  size,
  props,
  scale,
}: {
  size: string;
  props: MovieType;
  scale?: boolean;
}) {
  const { sm, md, lg } = movieSize;
  const itemSize = size == "sm" ? sm : size == "md" ? md : lg;

  const getYear = (date: Date) => {
    return date.toString().split("-")[0];
  };

  const scaleRate = scale == false ? 1 : 1.2;

  return (
    <motion.div
      whileHover={{
        scale: scaleRate,
        zIndex: 10,
      }}
      transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
      className={`relative ${itemSize} rounded-xl group`}
    >
      <div className="absolute top-1 right-1 z-10 group-hover:hidden">
        <Badge className="px-2 tracking-widest">{props.ageRequired}+</Badge>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 rounded-xl overflow-hidden">
        <Image
          src={`${ImgBaseURL}${props.backDropUrl}`}
          alt=""
          fill
          sizes="100%"
        />
      </div>
      <div
        className="flex w-full rounded-xl justify-between gap-3 items-center p-2 absolute bottom-0 bg-opacity-80 bg-black
      group-hover:h-full group-hover:top-0 group-hover:items-start
      "
      >
        {size != "sm" && (
          <PlainButton icon={Play} fill="black" background="white" />
        )}
        <div className="flex-1 leading-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-left">
                <p className="text-sm text-white font-semibold line-clamp-1">
                  {props.title}
                </p>
                <span className="text-gray-300 text-xs">
                  {getYear(props.releaseDate)}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>{props.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {size == "sm" ? (
          <div className="text-white text-xs flex gap-1">
            <Star fill="orange" className="text-orange-400" size={16} />
            {props.avgRate}
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
    </motion.div>
  );
}
