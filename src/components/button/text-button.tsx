import PlainButton from "./plain-button";
import { textButtonType } from "./constant";

export default function TextButton({text, icon}:textButtonType) {
  return (
    <div className="group flex items-center gap-2 p-3 text-sm rounded-lg bg-[#F36F45] w-fit">
      <PlainButton fill="white" background="black" icon={icon} />
      <p className="text-white">{text}</p>
    </div>
  );
}
