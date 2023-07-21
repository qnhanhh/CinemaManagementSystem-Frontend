import { Loader2Icon } from "lucide-react";

export const States = {
  Loading: "loading",
  Error: "error",
};

export default function StateHandler({ state }: { state: string }) {
  console.log("state handler");

  return (
    <div className="text-white absolute top-0 bottom-0 right-0 left-0 z-50 flex gap-2 justify-center items-center">
      {state == "loading" && (
        <>
          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
          Just a minute...
        </>
      )}
    </div>
  );
}
