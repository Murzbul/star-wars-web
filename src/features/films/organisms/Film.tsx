import Image from 'next/image';

import defaultPicture from "../../../../public/episodeDefault.jpg";

import "./Film.css";
import {IFilmApiResponse} from "@/features/films/models";

interface FilmProps
{
    film: IFilmApiResponse;
}

const Film = (props: FilmProps) =>
{
  const { film } = props;

  return (
    <div className="container-film">
        <>
          <div className="bg-container-film">
            <div className="film-header">
              <h2>Episode {film.episodeUd}</h2>
            </div>
            <div className="film-extra-detail">
              <cite>{film.openingCrawl}</cite>
              <hr />
              <div>
                <p>
                  <span>Director</span> - {film.director} <br />
                  <span>Producer</span> - {film.producer} <br />
                  <span>Release Date</span> - {film.releaseDate}
                </p>
              </div>
            </div>
          </div>
          <Image
            className="img-detail"
            loading="lazy"
            src={defaultPicture}
            alt="portrait"
          />
        </>
    </div>
  );
};

export default Film;
