import './CardStarship.css';

interface CardStarshipProps
{
    name: string,
    model: string,
    starshipClass: string,
    costInCredits: string,
}

const CardStarship = (props: CardStarshipProps) =>
{
  const { name, model, starshipClass, costInCredits } = props;

  return (
    <div className="card_container">
    <h1>{name}</h1>
    <div className="div-card" />
    <div className="extra-detail-card">
      <span>Model: {model}</span>
      <span>Starship Class: {starshipClass}</span>
      <span>Cost in credits: {costInCredits}</span>
    </div>
  </div>
  );
};

export default CardStarship;
