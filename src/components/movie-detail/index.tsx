'use client'

import { getMovieById } from "@/api/movie";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ImgBaseURL } from "@/utils/constants";

export default function MovieDetail({id}:{id:string}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getMovieDetail", id],
    queryFn: ()=>getMovieById(id),
  });

  if(isLoading) return <div>Loading...</div>
  
  return (
    <div className="w-full px-10">
      <div className="relative w-full h-[500px]">
      <Image sizes="50%" style={{objectFit: "cover", objectPosition:"top"}} src={`${ImgBaseURL}${data.backDropUrl}`} alt="" fill/>
      </div>
      <Image src={`${ImgBaseURL}${data.imageUrl}`} alt="" width={100} height={100}/>
    </div>
  );
}
