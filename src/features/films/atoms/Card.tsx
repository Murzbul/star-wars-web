import './Card.css';

interface CardProps
{
    title: string;
    episodeUd: string;
    openingCrawl: string;
    releaseDate: string;
}

const Card = (props: CardProps) =>
{
  const { title, episodeUd, releaseDate, openingCrawl } = props;

  return (
    <div className="card_container">
    <h1>{title}</h1>
    <div className="div-card" />
    <div className="extra-detail-card">
      <span>Episode: {episodeUd}</span>
      <span>Release Date: {releaseDate}</span>
      <span className="description">Description: {openingCrawl}</span>
    </div>
  </div>
  );
};

export default Card;
