import PlayButton from "./play-button";

export default function WatchButton() {
  return (
    <div className="group flex items-center gap-2 p-3 text-sm rounded-lg bg-[#F36F45] w-fit">
      <PlayButton fill="white" background="black" />
      <p className="text-white">Watch now</p>
    </div>
  );
}
