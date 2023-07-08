import { Heart, Play, Plus, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import PlainButton from "../button/plain-button";
import TextButton from "../button/text-button";
import { useState } from "react";
import { MovieItemProps, movieSize } from "./constants";

export default function MovieItem({ size, title, description, imageUrl }: MovieItemProps) {
  const [isAdded, setIsAdded] = useState(false);
  const { sm, md, lg } = movieSize;
  const itemSize = size == "sm" ? sm : size == "md" ? md : lg;

  const toggleAdd = () => {
    setIsAdded(!isAdded);
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        marginLeft: "2rem",
        marginRight: "2rem",
        zIndex: 10,
      }}
      transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
      className={`relative ${itemSize} rounded-xl group`}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt=""
          fill
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
          <p className="text-sm text-white font-semibold">{title}</p>
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
      <div
        onClick={toggleAdd}
        className="text-white hidden group-hover:block absolute bottom-2 right-2"
      >
        {isAdded ? (
          <TextButton text="Added to favorites" icon={Heart} />
        ) : (
          <TextButton text="Add to favorites" icon={Plus} />
        )}
      </div>
    </motion.div>
  );
}
