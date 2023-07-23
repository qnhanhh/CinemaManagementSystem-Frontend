"use client";

import { getMovieById } from "@/api/movies";
import Image from "next/image";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ImgBaseURL, YoutubeBaseURL } from "@/utils/constants";
import { Badge } from "../ui/badge";
import { ChevronRight, Heart, Plus, Quote, Star } from "lucide-react";
import TextButton from "../button/text-button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Rating from "./rating";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import MovieList from "../movie-list";
import StateHandler, { States } from "@/components/state-handler";
import {
  ActorType,
  AddToFavUserType,
  CompanyType,
  GenreType,
  RateType,
} from "@/types";
import Link from "next/link";
import CommentItem from "./comment-item";
import { splitDate } from "@/utils/function";
import { useEffect, useState } from "react";
import { addToUserFavorite, removeFromUserFavorite } from "@/api/users";
import { toast } from "../ui/use-toast";
import { Toaster } from "../ui/toaster";

export default function MovieDetail({ id }: { id: string }) {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (localStorage) {
      setToken(localStorage.getItem("token") || "");
      setUserId(localStorage.getItem("user-id") || "");
    }
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getMovieDetail", id],
    queryFn: () => getMovieById(id),
  });

  const removeFromFav = useMutation(
    (data: AddToFavUserType) => removeFromUserFavorite(data),
    {
      onSuccess: (res) => {
        toast({
          title: "Removed to favorites!",
        });
        setAdd(false);
        window.location.reload();
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

  const addToFav = useMutation(
    (data: AddToFavUserType) => addToUserFavorite(data),
    {
      onSuccess: (res) => {
        toast({
          title: "Added to favorites!",
        });
        setAdd(true);
        window.location.reload();
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

  const toggleFav = () => {
    if (!add) {
      addToFav.mutate({
        movieId: id,
        userId: userId,
      });
    } else if (add) {
      removeFromFav.mutate({
        movieId: id,
        userId: userId,
      });
    }
  };

  const calculateAvgRate = (arr: any[]) => {
    return arr.reduce((acc, current) => (acc += current.rating), 0);
  };

  if (isLoading) return <StateHandler state={States.Loading} />;

  return (
    <div className="w-full px-10">
      <div className="relative w-full h-[400px]">
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black/60"></div>
        <Image
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
          src={`${ImgBaseURL}${data.backDropUrl}`}
          alt=""
          fill
        />
        <div className="relative w-full z-20 h-[400px] top-1/2">
          <Image
            style={{
              objectFit: "contain",
            }}
            src={`${ImgBaseURL}${data.imageUrl}`}
            alt=""
            fill
          />
          <div className="relative top-full p-4 text-white text-center">
            <div className="text-4xl font-bold text-center">
              {data.title}
              <Badge className="ml-2">{data.ageRequired}+</Badge>
            </div>
            <div className="text-sm text-slate-400 mt-5">
              {data.genres?.map((item: GenreType) => (
                <Link
                  href={`/movies/genre/${item.id}`}
                  replace
                  key={item.id}
                  className="mr-2 border border-slate-600 p-2 rounded-full"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex gap-16 justify-center mt-12">
              <div className="text-left">
                <p className="text-xl font-bold">About the film</p>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Release Date</TableCell>
                      <TableCell>{splitDate(data.releaseDate)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Starring</TableCell>
                      <TableCell>
                        {data.actors.length > 0
                          ? data.actors.map(
                              (item: ActorType, index: number) => (
                                <span className="mr-2" key={item.id}>
                                  {item.name}
                                  <span>
                                    {index !== data.actors.length - 1 && ","}
                                  </span>
                                </span>
                              )
                            )
                          : "-"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Publisher</TableCell>
                      <TableCell>
                        {data.companies.length > 0
                          ? data.companies.map(
                              (item: CompanyType, index: number) => (
                                <span className="mr-2" key={item.id}>
                                  {item.name}
                                  <span>
                                    {index !== data.companies.length - 1 && ","}
                                  </span>
                                </span>
                              )
                            )
                          : "-"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="my-8 mx-auto italic text-center text-lg max-w-2xl">
                  <Quote size={14} className="inline-block mx-3" />
                  {data.description}
                  <Quote size={14} className="inline-block mx-3" />
                </p>
              </div>
              <div className="text-left">
                {data.rates.length > 0 ? (
                  <div className="text-xl font-bold flex gap-1 items-center">
                    {calculateAvgRate(data.rates) / data.rates.length}
                    <Star fill="orange" className="text-orange-400" size={20} />
                    <span className="text-slate-400 text-sm items-end">
                      / 5
                    </span>
                  </div>
                ) : (
                  "No reviews yet."
                )}
                <div className="my-4 flex gap-2 justify-between items-center">
                  {token ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex gap-1 items-center text-black"
                        >
                          <Plus size={18} />
                          Write your review
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <Rating movieId={id} userId={userId || ""} />
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <div>Log in to write review</div>
                  )}
                  <div>
                    <Sheet>
                      <SheetTrigger className="flex gap-1 items-center text-blue-700">
                        Read reviews
                        <ChevronRight size={18} />
                      </SheetTrigger>
                      <SheetContent className="bg-black p-4">
                        <ScrollArea className="h-full w-full mt-5">
                          <SheetDescription>
                            {data.rates.length > 0
                              ? data.rates.map(
                                  (item: RateType, index: number) => (
                                    <CommentItem
                                      key={index}
                                      id={item.id}
                                      rating={item.rating}
                                      comment={item.comment}
                                      movieId={id}
                                      userId={userId || ""}
                                    />
                                  )
                                )
                              : "No reviews yet."}
                          </SheetDescription>
                        </ScrollArea>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
                <div
                  className="flex gap-8 justify-center my-6"
                  onClick={toggleFav}
                >
                  {token &&
                    (add ? (
                      <TextButton text="Added to favorites" icon={Heart} />
                    ) : (
                      <TextButton text="Add to favorites" icon={Plus} />
                    ))}
                </div>
              </div>
            </div>
            <div className="w-full h-[600px] bg-white">
              <iframe
                className="w-full h-full"
                src={`${YoutubeBaseURL}${data.trailerUrl}?&autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-6">
              <MovieList
                header="More like this"
                movieSize="md"
                direction="row"
                index={0}
              />
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
