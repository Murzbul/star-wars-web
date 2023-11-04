import Card from "../atoms/Card";

import "./List.css";
import {IPlanetApiResponse} from "@/features/planets/models";

interface ListStarshipProps
{
    planets?: IPlanetApiResponse[]
}

const List = (props: ListStarshipProps) =>
{
    return (
        <div className="container-list">
            {props.planets && props.planets.map((starship: IPlanetApiResponse) => (
                <Card
                    key={starship?.id}
                    name={starship?.name}
                    terrain={starship?.terrain}
                    population={starship?.population}
                    diameter={starship?.diameter}
                />
            ))}
        </div>
    );
};

export default List;
