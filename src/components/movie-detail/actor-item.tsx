import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { ImgBaseURL } from "@/utils/constants";

export default function ActorItem({
  name,
  img,
  desc,
}: {
  name: string;
  img: string;
  desc: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{name}</TooltipTrigger>
        <TooltipContent className="flex gap-4 items-center">
          <Image
            src={`${ImgBaseURL}${img}`}
            alt={name}
            width={50}
            height={80}
          />
          <p className="w-[200px] text-center">{desc}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
