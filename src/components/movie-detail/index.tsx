"use client";

import { getMovieById } from "@/api/movie";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ImgBaseURL } from "@/utils/constants";
import { Badge } from "../ui/badge";
import { Play, Plus, Quote } from "lucide-react";
import TextButton from "../button/text-button";

export default function MovieDetail({ id }: { id: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getMovieDetail", id],
    queryFn: () => getMovieById(id),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full px-10">
      <div className="relative w-full h-[400px]">
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black/60"></div>
        <Image
          style={{ objectFit: "cover", objectPosition: "top" }}
          src={`${ImgBaseURL}${data.backDropUrl}`}
          alt=""
          fill
        />
        <div className="relative w-full z-20 h-[400px] top-1/2">
          <Image
            style={{
              objectFit: "contain",
            }}
            src={`${ImgBaseURL}${data.imageUrl}`}
            alt=""
            fill
          />
          <div className="relative top-full p-4 text-white text-center">
            <div className="text-4xl font-bold text-center">
              {data.title}
              <Badge className="ml-2">{data.ageRequired}+</Badge>
            </div>
            <p className="my-8 mx-auto italic text-lg max-w-2xl">
              <Quote size={14} className="inline-block mx-3" />
              {data.description}
              <Quote size={14} className="inline-block mx-3" />
            </p>
            <div className="flex gap-8 justify-center my-4">
              <TextButton text="Watch now" icon={Play} />
              <TextButton text="Add to favorites" icon={Plus} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
