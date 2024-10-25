import Footer from "./components/Footer.tsx";
import "./App.css";
import { useEffect, useState } from "react";
import Body from "../src/components/Body";
import Backbanner from "./components/Banner.tsx";
import Card from "./components/Card.tsx";
import Fightbutton from "./components/FightButton.tsx";
import Navbar from "./components/NavBar.tsx";
import { getAllHeroes } from "./data/getAllHeroes.ts";

interface Heroe {
  id: number;
  name: string;
  genre: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  image: {
    url: string;
  };
}

interface Powerstats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

interface Biography {
  placeOfBirth: string;
  firstAppearance: string;
  universe: string;
  alignement: string;
}

interface Appearance {
  gender: string;
  race: string;
}

function App() {
  const [heroes, setHeroes] = useState<Heroe[]>();
  useEffect(() => {
    const fetchHeroes = async () => {
      const data = await getAllHeroes();
      setHeroes(data);
    };

    fetchHeroes();
  }, []);

  return (
    <>
      <div className="overtop">
        <Backbanner />
        <Navbar />
      </div>
      <Body />
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
      <Fightbutton />
      <Footer />
    </>
  );
}

export default App;
