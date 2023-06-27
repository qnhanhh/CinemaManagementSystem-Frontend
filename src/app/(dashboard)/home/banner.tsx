import WatchButton from "@/components/button/watch-button";
import { Eye } from "lucide-react";
import Image from "next/image";

export default function Banner() {
  return (
    <div>
      <div className="relative rounded-xl w-full h-[300px] p-6 bg-white/50">
        <Image
          className="w-full object-contain rounded-xl"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e2fd9882892035.5d2c3c960586e.jpg"
          alt=""
          fill
        />
        <div className="bg-black bg-opacity-10 absolute top-0 bottom-0 left-0 right-0"></div>
        <div className="absolute bottom-4 left-4">
          <WatchButton />
        </div>
        <div className="absolute top-4 right-4 flex gap-2 items-center text-lg text-white">
          <Eye />
          2.4M
        </div>
      </div>
    </div>
  );
}
