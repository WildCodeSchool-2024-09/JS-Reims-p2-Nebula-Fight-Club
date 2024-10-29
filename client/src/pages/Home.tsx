import { useEffect, useState } from "react";
import Card from "../components/Card";
import FightButton from "../components/FightButton";
import Intro from "../components/intro";
import { getAllHeroes } from "../data/getAllHeroes";
import type { Heroe } from "../types/Hero";

function Home() {
  const [heroes, setHeroes] = useState<Heroe[]>();
  useEffect(() => {
    const fetchHeroes = async () => {
      const data = await getAllHeroes();
      setHeroes(data);
    };

    fetchHeroes();
  }, []);

  return (
    <div>
      <Intro />
      <div className="pokecards">
        {heroes?.map((heroe) => {
          return (
            <Card
              key={heroe.id}
              image={heroe?.image?.url}
              name={heroe?.name}
              genre={heroe?.appearance.gender}
            />
          );
        })}
      </div>
      <FightButton />
    </div>
  );
}

export default Home;
