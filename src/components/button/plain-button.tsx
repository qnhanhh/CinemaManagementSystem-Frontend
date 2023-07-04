import { Triangle } from "lucide-react";
import { plainButtonType } from "./constant";

export default function PlainButton({ fill, background, icon }: plainButtonType) {
  const CustomTag=icon||Triangle;

  return (
    <div
      className={`rounded-full bg-opacity-80 bg-${background} p-2 text-${fill}`}
    >
      <CustomTag fill={fill} size={14} />
    </div>
  );
}
