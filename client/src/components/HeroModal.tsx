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
    <div>
      <section
        className="modal-overlay"
        onKeyDown={handleKeyDown}
        onClick={onClose}
      >
        <div>
          <section
            className="modal"
            onKeyDown={handleKeyDown}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" onClick={onClose} style={{ float: "right" }}>
              Fermer
            </button>
            <img className="img-char" src={hero.image.url} alt={hero.name} />
            <h2>{hero.name}</h2>
            <section className="stats-container">
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
            </section>
            <section className="card-data">
              <p>Alignement : {hero.biography.alignment}</p>
              <p>{hero.biography.aliases}</p>
              <h3>{hero.biography["first-appearance"]}</h3>
              <h3>{hero.biography.publisher}</h3>
            </section>
          </section>
        </div>
      </section>
    </div>
  );
}

export default HeroDetailsModal;
