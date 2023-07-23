import { MovieType } from "@/types"

export type listType = {
    header: string,
    movieSize: string,
    direction: string,
    index:number,
    scale?: boolean,
    genreId?:string,
    movieList?:MovieType[]
}