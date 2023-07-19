"use client";

import { getMovieById } from "@/api/movie";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { ImgBaseURL } from "@/utils/constants";
import { Badge } from "../ui/badge";
import { ChevronRight, Play, Plus, Quote, Star } from "lucide-react";
import TextButton from "../button/text-button";
import { Separator } from "../ui/separator";
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
import Comments from "./comments";

export default function MovieDetail({ id }: { id: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getMovieDetail", id],
    queryFn: () => getMovieById(id),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full px-10">
      <div className="relative w-full h-[400px]">
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black/60"></div>
        <Image
          style={{ objectFit: "cover", objectPosition: "top" }}
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
              Action | Adventure | Sci-Fi | Thriller | Fantasy | Drama | Comedy
            </div>
            <div className="flex gap-16 justify-center mt-12">
              <div className="text-left">
                <p className="text-xl font-bold">About the film</p>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Release Date</TableCell>
                      <TableCell>
                        {data.releaseDate.toString().split("T")[0]}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Starring</TableCell>
                      <TableCell>John, Amy, Tom</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Publisher</TableCell>
                      <TableCell>Walt Disney Pictures</TableCell>
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
                <div className="text-xl font-bold flex gap-1 items-center">
                  3.5
                  <Star fill="orange" className="text-orange-400" size={20} />
                  <span className="text-slate-400 text-sm items-end">/ 5</span>
                </div>
                <div className="my-4 flex justify-between items-center">
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
                      <Rating />
                    </DialogContent>
                  </Dialog>
                  <div>
                    <Sheet>
                      <SheetTrigger className="flex gap-1 items-center text-blue-700">
                        Read reviews
                        <ChevronRight size={18} />
                      </SheetTrigger>
                      <SheetContent className="bg-black p-4">
                        <ScrollArea className="h-full w-full mt-5">
                          <SheetDescription>
                            <Comments movieId={id} />
                          </SheetDescription>
                        </ScrollArea>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
                <div className="flex gap-8 justify-center my-6">
                  <TextButton text="Watch now" icon={Play} />
                  <TextButton text="Add to favorites" icon={Plus} />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <MovieList
                header="More like this"
                movieSize="md"
                direction="row"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
