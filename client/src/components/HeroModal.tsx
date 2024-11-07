import type { Heroe } from "../types/Hero";

import "./Modal.css";

function HeroDetailsModal({
  hero,
  onClose,
}: { hero: Heroe; onClose: () => void }) {
  function handleKeyDown(): void {
    throw new Error("Function not implemented.");
  }
  return (
    <section
      className="modal-overlay"
      onKeyDown={handleKeyDown}
      onClick={onClose}
    >
      <section
        className="modal"
        onKeyDown={handleKeyDown}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-toto"
          type="button"
          onClick={onClose}
          style={{ float: "right" }}
        >
          ❌
        </button>
        <div className="modal-top">
          <img className="modal-image" src={hero.image.url} alt={hero.name} />
          <p>{hero.name}</p>
        </div>
        <section className="stats-container">
          <div className="tartiflette">
            <ul className="offensive-stats">
              <li>COMBAT : {hero.powerstats.combat}</li>
              <li>STRENGTH : {hero.powerstats.strength}</li>
              <li>POWER : {hero.powerstats.power}</li>
            </ul>
            <ul className="defensive-stats">
              <li>SPEED : {hero.powerstats.speed}</li>
              <li>INTELLIGENCE : {hero.powerstats.intelligence}</li>
              <li>DURABILITY : {hero.powerstats.durability}</li>
            </ul>
          </div>
          <div className="card-data">
            <p>Alignement : {hero.biography.alignment}</p>
            <p>{hero.biography.aliases}</p>
            <p>{hero.biography["first-appearance"]}</p>
            <p>{hero.biography.publisher}</p>
          </div>
        </section>
      </section>
    </section>
  );
}

export default HeroDetailsModal;
