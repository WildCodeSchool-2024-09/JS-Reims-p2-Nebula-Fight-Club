import "./Card.css";

interface CardsProps {
  image: string;
  name: string;
  genre: string;
}

function Card(props: CardsProps) {
  return (
    <div className="body-card">
      <img className="image-card" src={props.image} alt={props.name} />
      <ul>
        <li>{props.name}</li>
        <li>{props.genre}</li>
      </ul>
    </div>
  );
}

export default Card;
