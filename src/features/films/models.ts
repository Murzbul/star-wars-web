import {IPeopleApiResponse} from "@/features/people/models";
import {IPlanetApiResponse} from "@/features/planets/models";
import {IStarshipApiResponse} from "@/features/starship/models";

export interface IFilmApiResponse
{
    id: string;
    title: string;
    episodeUd: string;
    openingCrawl: string;
    director: string;
    producer: string;
    releaseDate: string;
    characters: IPeopleApiResponse[];
    planets: IPlanetApiResponse[];
    starships: IStarshipApiResponse[];
    url: string;
    createdAt: number;
    updatedAt: number;
}
