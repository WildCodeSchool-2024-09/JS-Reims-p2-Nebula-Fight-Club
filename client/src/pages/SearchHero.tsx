import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getHeroByName } from "../data/getHeroByName";
import type { Heroe } from "../types/Hero";

function SearchHero() {
  const [name, setName] = useState("");
  const [heroes, setHeroes] = useState<Heroe[]>();

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
      <h3>Search</h3>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Recherche par nom"
        className="input-search"
      />
      <div className="pokecards">
        {heroes && heroes.length >= 1 ? (
          heroes.map((heroe) => {
            return (
              <Card
                key={heroe.id}
                image={heroe?.image?.url}
                name={heroe?.name}
                gender={heroe?.appearance.gender}
                onClick={() => console.log("test")}
              />
            );
          })
        ) : (
          <div style={{ color: "red" }}>Aucune donnée</div>
        )}
      </div>
    </div>
  );
}
export default SearchHero;
