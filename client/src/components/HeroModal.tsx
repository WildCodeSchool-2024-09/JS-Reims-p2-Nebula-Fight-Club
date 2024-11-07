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
        <button type="button" onClick={onClose} style={{ float: "right" }}>
          ❌
        </button>
        <div className="modal-top">
          <img className="modal-image" src={hero.image.url} alt={hero.name} />
          <h2>{hero.name}</h2>
        </div>
        <section className="stats-container">
          <ul className="offensive-stats">
            <li>
              COMBAT :{" "}
              {hero.powerstats.combat !== "null"
                ? hero.powerstats.combat
                : "???"}
            </li>
            <li>
              STRENGTH :{" "}
              {hero.powerstats.strength !== "null"
                ? hero.powerstats.strength
                : "???"}
            </li>
            <li>
              POWER :{" "}
              {hero.powerstats.power !== "null" ? hero.powerstats.power : "???"}
            </li>
          </ul>
          <ul className="defensive-stats">
            <li>
              SPEED :{" "}
              {hero.powerstats.speed !== "null" ? hero.powerstats.speed : "???"}
            </li>
            <li>
              INTELLIGENCE :{" "}
              {hero.powerstats.intelligence !== "null"
                ? hero.powerstats.intelligence
                : "???"}
            </li>
            <li>
              DURABILITY :{" "}
              {hero.powerstats.durability !== "null"
                ? hero.powerstats.durability
                : "???"}
            </li>
          </ul>
          <div className="card-data">
            <p>
              Alignement :{" "}
              {hero.biography.alignment !== "-"
                ? hero.biography.alignment
                : "Unknown ☕"}
            </p>
            <p>
              {hero.biography.aliases === "-"
                ? hero.biography.aliases
                : "No alias 🍹"}
            </p>
            <h3>
              {hero.biography["first-appearance"] !== "-"
                ? hero.biography["first-appearance"]
                : "Unknown 🍺"}
            </h3>
            <h3>
              {hero.biography.publisher !== "-"
                ? hero.biography.publisher
                : "Unknown 🥂"}
            </h3>
          </div>
        </section>
      </section>
    </section>
  );
}

export default HeroDetailsModal;
