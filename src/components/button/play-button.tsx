import { Triangle } from "lucide-react";
import { buttonType } from "./constant";

export default function PlayButton({ fill, background }: buttonType) {
  return (
    <div
      className={`rounded-full bg-opacity-80 bg-${background} p-2 text-${fill}`}
    >
      <Triangle className="rotate-90" fill={fill} size={14} />
    </div>
  );
}
