import CardStarship from "../atoms/CardStarship";

import "./ListStarship.css";
import {IStarshipApiResponse} from "@/features/starship/models";

interface ListStarshipProps
{
    starships?: IStarshipApiResponse[]
}

const ListStarship = (props: ListStarshipProps) =>
{
    return (
        <div className="container-list">
            {props.starships && props.starships.map((starship: IStarshipApiResponse) => (
                <CardStarship
                    key={starship?.id}
                    name={starship?.name}
                    model={starship?.model}
                    starshipClass={starship?.starshipClass}
                    costInCredits={starship?.costInCredits}
                />
            ))}
        </div>
    );
};

export default ListStarship;
