import './Card.css';

interface CardStarshipProps
{
    name: string,
    terrain: string,
    population: string,
    diameter: string,
}

const Card = (props: CardStarshipProps) =>
{
  const { name, terrain, population, diameter } = props;

  return (
    <div className="card_container">
    <h1>{name}</h1>
    <div className="div-card" />
    <div className="extra-detail-card">
      <span>Terrain: {terrain}</span>
      <span>Population: {population}</span>
      <span>Diameter: {diameter}</span>
    </div>
  </div>
  );
};

export default Card;
