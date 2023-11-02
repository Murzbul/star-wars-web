import { MagicMotion } from "react-magic-motion";
import CardPeople from "./shared/atoms/CardPeople";

import "./ListCharacter.css";

const ListCharacter = (props: any) =>
{
    return (
        <MagicMotion>
            <div className="container-listCharacter">
                {props.characters.map((character: any) => (
                    <CardPeople
                        key={character?.id}
                        name={character?.name}
                        mass={character?.mass}
                        height={character?.height}
                        gender={character?.gender}
                        homeWorld={character?.homeWorld.name}
                    />
                ))}
            </div>
        </MagicMotion>
    );
};

export default ListCharacter;
