import "./Card.css";

interface CardsProps {
  image: string;
  name: string;
  genre: string;
  onClick: () => void;
}

function Card(props: CardsProps) {
  function handleKeyDown(): void {
    throw new Error("Function not implemented.");
  }
  return (
    <div
      className="body-card"
      onClick={props.onClick}
      onKeyDown={handleKeyDown}
    >
      <img className="image-card" src={props.image} alt={props.name} />
      <ul>
        <li>{props.name}</li>
        <li>{props.genre}</li>
      </ul>
    </div>
  );
}

export default Card;
