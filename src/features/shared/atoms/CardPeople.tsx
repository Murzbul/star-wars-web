import './Card.css';

interface CardPeopleProps
{
    name: string,
    gender: string,
    homeWorld: string,
    height: string,
    mass: string,
}

const CardPeople = (props: CardPeopleProps) =>
{
  const { name, gender, homeWorld, height, mass } = props;

  return (
    <div className="card_container">
    <h1>{name}</h1>
    <div className="div-card" />
    <div className="extra-detail-card">
      <span>
        Gender: {gender?.charAt(0).toUpperCase() + gender?.slice(1)}
      </span>
      <span>Height: {height}</span>
      <span>Mass: {mass}</span>
      <span>Homeworld: {homeWorld}</span>
    </div>
  </div>
  );
};

export default CardPeople;
