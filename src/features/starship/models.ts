
export interface IStarshipApiResponse
{
    id: string;
    name: string;
    model: string;
    manufacturer: string;
    costInCredits: string;
    length: string;
    maxAtmospheringSpeed: string;
    crew: string;
    passengers: string;
    cargoCapacity: string;
    consumables: string;
    hyperdriveRating: string;
    mglt: string;
    starshipClass: string;
    pilots: [
        {
            id: string;
            name: string;
            height: string;
            mass: string;
            hairColor: string;
            skinColor: string;
            eyeColor: string;
            birthYear: string;
            gender: string;
            url: string;
            createdAt: number;
            updatedAt: number;
        }
    ],
    url: string;
    createdAt: number;
    updatedAt: number;
}
