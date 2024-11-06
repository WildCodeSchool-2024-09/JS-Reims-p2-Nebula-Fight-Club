import "./Card.css";

interface CardsProps {
  image: string;
  name: string;
  gender: string;
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
        <div className="hero-data">
          <p>{props.name}</p>
          <p>{props.gender}</p>
        </div>
      </button>
    </div>
  );
}

export default Card;
