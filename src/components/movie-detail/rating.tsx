import { Button } from "../ui/button";
import { DialogTitle } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { rateValues } from "@/utils/constants";
import { CreateRateType } from "@/types";
import { rateSchema } from "@/types/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useMutation } from "@tanstack/react-query";
import { createRate } from "@/api/ratings";
import { toast } from "../ui/use-toast";
import { Toaster } from "../ui/toaster";

export default function Rating({movieId, userId}:{movieId:string, userId:string}) {
  const form = useForm<CreateRateType>({
    resolver: zodResolver(rateSchema),
    defaultValues: {
      rating: 3,
      comment: "Phim yeu thich nhat",
      movieId: movieId,
      userId: userId
    },
  });

  const { mutate: create, isLoading } = useMutation(
    (data: CreateRateType) => createRate(data),
    {
      onSuccess: (res) => {
        console.log(res);
        toast({
          title: "Comment successfully!",
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
    }
  );

  const onSubmit = () => {
    console.log(form.getValues());
    create(form.getValues());
  };

  if(isLoading) return <div>Loading...</div>
  return (
    <>
      <DialogTitle>Rate the movie</DialogTitle>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="text-2xl my-2 font-bold flex gap-1 justify-center items-center text-slate-700">
                    {field.value}
                    <Star fill="orange" className="text-orange-400" size={20} />
                    <span className="text-slate-500 text-sm items-end">
                      / 5
                    </span>
                  </div>
                </FormLabel>
                <FormControl>
                  <div className="flex justify-between">
                    {rateValues.map((item) => {
                      return (
                        <motion.div
                          key={item.value}
                          whileHover={{
                            scale: 1.2,
                          }}
                          className={`text-4xl cursor-pointer ${
                            field.value == item.value && `text-5xl`
                          }`}
                          onClick={() => field.onChange(item.value)}
                          id={item.value.toString()}
                        >
                          {item.icon}
                        </motion.div>
                      );
                    })}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Write your comment here</FormLabel>
                <FormControl>
                  <Textarea placeholder={field.value} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" onClick={onSubmit}>
            Comment
          </Button>
        </form>
      </Form>
      <Toaster />
    </>
  );
}
