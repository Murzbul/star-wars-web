import "./FilmDetail.css";

import Film from "@/features/films/organisms/Film";
import Starship from "@/features/films/organisms/Starship";
import Planet from "@/features/films/organisms/Planet";
import People from "@/features/films/organisms/People";

const FilmDetail = (props: any) =>
{
    return (
        <div className="container-film-detail">
            <div className="detail-character">
                <div>
                    <h1 className="name">{props.detail.title}</h1>
                </div>
                <Film film={props.detail} />
                <div className="extra-detail">
                    {props.detail.characters.length ? <People people={props.detail.characters} /> : null}
                    {props.detail.planets.length ? <Planet planets={props.detail.planets} /> : null}
                    {props.detail.starships ? <Starship starships={props.detail.starships} /> : null}
                </div>
            </div>
        </div>
    );
};

export default FilmDetail;
