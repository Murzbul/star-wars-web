'use client'

import { useState } from "react";
import { TiArrowForward, TiArrowBack } from "react-icons/ti";

import "./CardSimpleDetail.css";
import {IPeopleApiResponse} from "@/features/people/models";

interface PeopleProps
{
    people: IPeopleApiResponse[];
}

const People = (props: PeopleProps) =>
{
    const { people } = props;
    const [currentShip, setCurrentShip] = useState(0);

    const handleNext = () =>
    {
        if (currentShip === people.length - 1) return;
        setCurrentShip(currentShip + 1);
    };

    const handlePrev = () =>
    {
        if (currentShip !== 0) setCurrentShip(currentShip - 1);
    };

    return (
        <div className="container">
            <div className="bg">
            <h2>STARSHIP</h2>
                <div className="btns">
                    <button
                        className={`${currentShip === 0 && "disabled"}`}
                        onClick={handlePrev}
                    >
                        <TiArrowBack />
                    </button>
                    <button
                        className={`${currentShip === people.length - 1 && "disabled"}`}
                        onClick={handleNext}
                    >
                        <TiArrowForward />
                    </button>
                </div>
            </div>
            <div>
                <h3>
                    Name - <span>{people[currentShip]?.name}</span>
                </h3>
                <h3>
                    Hair color - <span>{people[currentShip]?.hairColor}</span>
                </h3>
                <h3>
                    Skin color - <span>{people[currentShip]?.skinColor}</span>
                </h3>
                <h3>
                    Birth year - <span>{people[currentShip]?.birthYear}</span>
                </h3>
                <h3>
                    Gender - <span>{people[currentShip]?.gender}</span>
                </h3>
            </div>
        </div>
    );
};

export default People;
