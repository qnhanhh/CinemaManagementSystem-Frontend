import { getMovies } from "@/api/movies";
import TextButton from "@/components/button/text-button";
import StateHandler, { States } from "@/components/state-handler";
import { ImgBaseURL } from "@/utils/constants";
import { getRandomNumber } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { Eye, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Banner() {
  const [randomNumber, setRandomNumber] = useState(0);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllMovies"],
    queryFn: getMovies,
  });

  useEffect(() => {
    if (data) {
      const number = getRandomNumber(data.length);
      setRandomNumber(number);
    }
  }, [data]);

  if (isLoading) return <StateHandler state={States.Loading} />;

  return (
    <Link href={`/movies/${data[randomNumber].id}`}>
      <div className="relative rounded-xl w-full h-[300px] p-6 bg-white/50">
        <Image
          style={{ objectFit: "contain" }}
          className="w-full object-contain rounded-xl h-auto"
          src={`${ImgBaseURL}${data[randomNumber].backDropUrl}`}
          alt={data[randomNumber].title}
          fill
        />
        <div className="bg-black bg-opacity-10 absolute top-0 bottom-0 left-0 right-0"></div>
        <div className="absolute bottom-4 left-4 flex gap-4">
          <p className="text-white bg-black p-4 rounded-xl">
            {data[randomNumber].title}
          </p>
          <TextButton text="Watch now" icon={Play} />
        </div>
        <div className="absolute top-4 right-4 flex gap-2 items-center text-lg text-white">
          <Eye />
          {data[randomNumber].ageRequired}+
        </div>
      </div>
    </Link>
  );
}
