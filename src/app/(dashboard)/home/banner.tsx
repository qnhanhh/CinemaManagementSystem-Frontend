import WatchButton from "@/components/button/watch-button";
import Image from "next/image";

export default function Banner() {
  return (
    <div>
      <div className="relative rounded-xl mx-auto w-2/3 h-[300px] p-6 bg-white">
        <Image
          className="w-full object-contain rounded-xl"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e2fd9882892035.5d2c3c960586e.jpg"
          alt=""
          fill
        />
        <div className="absolute bottom-0">
          <WatchButton />
        </div>
      </div>
    </div>
  );
}
