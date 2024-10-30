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
    <div>
      <button
        className="body-card"
        type="button"
        onClick={props.onClick}
        onKeyDown={handleKeyDown}
      >
        <img className="image-card" src={props.image} alt={props.name} />
        <ul className="hero-data">
          <li>{props.name}</li>
          <li>{props.genre}</li>
        </ul>
      </button>
    </div>
  );
}

export default Card;
