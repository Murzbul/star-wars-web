import { MagicMotion } from "react-magic-motion";
import CardPeople from "../atoms/CardPeople";

import "./ListPeople.css";
import {IPeopleApiResponse} from "@/features/people/models";

interface ListPeopleProps
{
    people?: IPeopleApiResponse[]
}

const ListPeople = (props: ListPeopleProps) =>
{
    return (
        <MagicMotion>
            <div className="container-list">
                {props.people && props.people.map((person: IPeopleApiResponse) => (
                    <CardPeople
                        key={person?.id}
                        name={person?.name}
                        mass={person?.mass}
                        height={person?.height}
                        gender={person?.gender}
                        homeWorld={person?.homeWorld.name}
                    />
                ))}
            </div>
        </MagicMotion>
    );
};

export default ListPeople;
