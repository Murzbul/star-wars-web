
export interface IPeopleApiResponse
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
    homeWorld: {
        id: string;
        name: string;
        rotationPeriod: string;
        orbitalPeriod: string;
        diameter: string;
        climate: string;
        gravity: string;
        terrain: string;
        surfaceWater: string;
        population: string;
        url: string;
        createdAt: number;
        updatedAt: number;
    },
    url: string;
    createdAt: number;
    updatedAt: number;
}
