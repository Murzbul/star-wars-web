import { useState } from "react";
import { TiArrowForward, TiArrowBack } from "react-icons/ti";

import "./CardSimpleDetail.css";
import {IPlanetApiResponse} from "@/features/planets/models";

interface PlanetProps
{
    planets: IPlanetApiResponse[];
}

const Planet = (props: PlanetProps) =>
{
    const { planets } = props;
    const [currentShip, setCurrentShip] = useState(0);

    const handleNext = () =>
    {
        if (currentShip === planets.length - 1) return;
        setCurrentShip(currentShip + 1);
    };

    const handlePrev = () =>
    {
        if (currentShip !== 0) setCurrentShip(currentShip - 1);
    };

    return (
        <div className="container">
            <div className="bg">
            <h2>PLANETS</h2>
                <div className="btns">
                    <button
                        className={`${currentShip === 0 && "disabled"}`}
                        onClick={handlePrev}
                    >
                        <TiArrowBack />
                    </button>
                    <button
                        className={`${currentShip === planets.length - 1 && "disabled"}`}
                        onClick={handleNext}
                    >
                        <TiArrowForward />
                    </button>
                </div>
            </div>
            <div>
                <h3>
                    Name - <span>{planets[currentShip]?.name}</span>
                </h3>
                <h3>
                    Terrain - <span>{planets[currentShip]?.terrain}</span>
                </h3>
                <h3>
                    Population - <span>{planets[currentShip]?.population}</span>
                </h3>
                <h3>
                    Terrain - <span>{planets[currentShip]?.terrain}</span>
                </h3>
            </div>
        </div>
    );
};

export default Planet;
