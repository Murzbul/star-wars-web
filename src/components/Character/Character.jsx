import Film from "./Film.jsx";
import Starship from "./Starship.jsx";
import Specie from "./Specie.jsx";
import "./styles/Character.css";

const Character = ({ name, gender, homeworld, species, films, starships }) => {
  return (
    <div className="container-character">
      <div className="detail-character">
        <div>
          <h1 className="name">{name}</h1>
          <span className="gender-text">
            {gender?.charAt(0).toUpperCase() + gender?.slice(1)}
          </span>
        </div>

        <div className="extra-detail">
          <div className="bg-homeworld">
            <h2>HOMEWORLD</h2>
            <h3>
              Name - &apos; <span>{homeworld?.name}</span> &apos; <br />
              Climate - &apos;{" "}
              <span>
                {homeworld?.climate?.charAt(0).toUpperCase() +
                  homeworld.climate?.slice(1)}
              </span>{" "}
              &apos; <br />
              Terrain - &apos;{" "}
              <span>
                {homeworld.terrain?.charAt(0).toUpperCase() +
                  homeworld.terrain?.slice(1)}
              </span>{" "}
              &apos; <br />
              Population - &apos; <span>{homeworld.population}</span> &apos; <br />
            </h3>
          </div>

          {species.length ? <Specie species={species} /> : null}
          {starships.length ? <Starship starships={starships} /> : null}
        </div>
      </div>

      <Film film={films} />
    </div>
  );
};

export default Character;
