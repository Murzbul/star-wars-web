import Card from "../atoms/Card";

import "./List.css";
import {IFilmApiResponse} from "@/features/films/models";

interface ListFilmProps
{
    films?: IFilmApiResponse[]
}

const List = (props: ListFilmProps) =>
{
    return (
        <div className="container-list">
            {props.films && props.films.map((starship: IFilmApiResponse) => (
                <Card
                    key={starship?.id}
                    id={starship?.id}
                    title={starship?.title}
                    episodeUd={starship?.episodeUd}
                    openingCrawl={starship?.openingCrawl}
                    releaseDate={starship?.releaseDate}
                />
            ))}
        </div>
    );
};

export default List;
