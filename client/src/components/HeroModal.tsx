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
        <button
          className="btt-modal"
          type="button"
          onClick={onClose}
          style={{ float: "right" }}
        >
          Fermer
        </button>
        <h2>{hero.name}</h2>
        <img src={hero.image.url} alt={hero.name} />
        <p>Comme l'a dit un grand philosophe... BASTOOOON !</p>
      </div>
    </div>
  );
}

export default HeroDetailsModal;
