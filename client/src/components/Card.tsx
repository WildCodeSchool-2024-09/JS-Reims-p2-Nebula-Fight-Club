import "./Card.css";

interface CardsProps {
  image: string;
  firstName: string;
}

function Card(props: CardsProps) {
  return (
    <div className="card-container">
      <img className="image-card" src={props.image} alt={props.firstName} />
      <p className="card-p">{props.firstName}</p>
    </div>
  );
}

export default Card;
