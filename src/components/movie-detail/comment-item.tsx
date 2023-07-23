import { deleteRate } from "@/api/ratings";
import { RateType } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { Star, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "../ui/use-toast";
import { Toaster } from "../ui/toaster";

export default function CommentItem({ rating, comment, userId, id }: RateType) {
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    if (localStorage) {
      setCurrentId(localStorage.getItem("user-id") || "");
    }
  }, []);

  const commentDelete = useMutation((id: string) => deleteRate(id), {
    onSuccess: () => {
      toast({
        title: "Delete comment successfully!",
      });
      window.location.reload()
    },
    onError: (err: any) => {
      let errMessage = "";
      if (err.response) {
        errMessage = err.response.data["ErrorMessage"];
      } else if (err.request) {
        errMessage = err.request["responseText"];
      } else {
        console.log("err", err.message);
        errMessage = "Please try again!";
      }
      console.log(err.config);
      toast({
        title: "Oh no something is wrong!",
        description: errMessage,
      });
    },
  });

  return (
    <>
      <div className="border-solid border-2 border-slate-500 w-full rounded p-4 my-3 flex justify-between items-center">
        <div>
          <div className="text-2xl font-bold flex gap-1 items-center text-white">
            {rating}
            <Star fill="orange" className="text-orange-400" size={20} />
            <span className="text-slate-300 text-sm items-end">/ 5</span>
          </div>
          <div className="text-slate-200 mt-2">{comment}</div>
        </div>
        {userId == currentId && (
          <Trash
            className="cursor-pointer"
            onClick={() => commentDelete.mutate(id)}
          />
        )}
      </div>
      <Toaster />
    </>
  );
}
