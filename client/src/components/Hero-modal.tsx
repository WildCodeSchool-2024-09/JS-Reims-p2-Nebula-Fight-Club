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
    <div className="modal-overlay" onKeyDown={handleKeyDown} onClick={onClose}>
      <div
        className="modal"
        onKeyDown={handleKeyDown}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={onClose} style={{ float: "right" }}>
          ❌
        </button>
        <div className="modal-top-container">
          <img className="modal-image" src={hero.image.url} alt={hero.name} />
        </div>
        <div className="Stat-hero">
          <p>Vitesse = 20</p>
          <p>Rapidité = 10</p>
          <p>stat3 = 50</p>
          <p>stat4 = 20</p>
          <p>stat5 = 5</p>
          <p>stat6 = 200</p>
        </div>
        <div className="modal-bottom-container">
        <h2>{hero.name}</h2>
        <p>Comme l'a dit un grand philosophe... BASTOOOON !</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sit
          tempore, autem cumque similique possimus id itaque nulla minima
          placeat?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sit
          tempore, autem cumque similique possimus id itaque nulla minima
          placeat?
        </p>
        </div>
      </div>
    </div>
  );
}

export default HeroDetailsModal;
