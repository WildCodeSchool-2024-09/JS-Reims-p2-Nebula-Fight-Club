import "./Card.css";

interface CardsProps {
  image: string;
  firstName: string;
  alias: string;
}

function Card(props: CardsProps) {
  return (
    <div className="body-card">
      <img className="image-card" src={props.image} alt={props.firstName} />
      <ul>
        <li>{props.firstName}</li>
        <li>{props.alias}</li>
      </ul>
    </div>
  );
}

export default Card;
