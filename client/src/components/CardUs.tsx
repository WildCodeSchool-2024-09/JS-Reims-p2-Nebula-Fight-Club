import "./About.css";

interface CardPropsUs {
  image: string;
  firstName: string;
  description: string;
}

function CardUs(props: CardPropsUs) {
  return (
    <section className="container">
      <div className="body-card">
        <img className="image-card" src={props.image} alt={props.firstName} />
        <div className="about-us-container">
          <p>{props.firstName}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  );
}

export default CardUs;
