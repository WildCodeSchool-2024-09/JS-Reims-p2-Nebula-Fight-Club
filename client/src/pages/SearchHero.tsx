import { useEffect, useState } from "react";
import Card from "../components/Card";
import HeroDetailsModal from "../components/HeroModal";
import { getHeroByName } from "../data/getHeroByName";
import type { Heroe } from "../types/Hero";
import "../components/Modal.css";

function SearchHero() {
  const [name, setName] = useState("");
  const [heroes, setHeroes] = useState<Heroe[]>();
  const [selectedHero, setSelectedHero] = useState<Heroe | null>(null);
  const handleCardClick = (heroe: Heroe) => {
    setSelectedHero(heroe);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  useEffect(() => {
    const fetchHeroes = async () => {
      const data = await getHeroByName(name);
      setHeroes(data.results);
    };

    fetchHeroes();
  }, [name]);

  return (
    <div className="search-bar">
      <div className="chocobon">
        <h3>Search</h3>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Recherche par nom"
          className="input-search"
        />
      </div>
      <div className="pokecards">
        {heroes && heroes.length >= 1 ? (
          heroes.map((heroe) => {
            return (
              <Card
                key={heroe.id}
                image={heroe?.image?.url}
                name={heroe?.name}
                gender={heroe?.appearance.gender}
                onClick={() => handleCardClick(heroe)}
              />
            );
          })
        ) : (
          <div style={{ color: "red" }}>Aucune donnée</div>
        )}
        {selectedHero && (
          <HeroDetailsModal
            hero={selectedHero}
            onClose={() => setSelectedHero(null)}
          />
        )}
      </div>
    </div>
  );
}
export default SearchHero;
