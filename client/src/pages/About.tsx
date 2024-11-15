import { useEffect, useState } from "react";
import CardUs from "../components/CardUs";
import FightButton from "../components/FightButton";
import { getOurHeroes } from "../data/getOurHeroes";
import type { Heroe } from "../types/Hero";

function About() {
  const [heroes, setHeroes] = useState<Heroe[]>();
  useEffect(() => {
    const fetchHeroes = async () => {
      const data = await getOurHeroes();
      setHeroes(data);
    };

    fetchHeroes();
  }, []);
  return (
    <div>
      <section className="Greuh">
        <div className="item-culum">
          <h2> Géraldine !</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            cumque itaque inventore vero quas architecto est possimus nostrum
            hic, temporibus iusto, ex, ipsam veniam! Repellendus, corrupti.
            Cupiditate aliquam tenetur, deserunt cumque, non vero autem,
            necessitatibus provident nihil vitae eaque magnam unde officiis.
            Corporis rem eum aut iste accusantium ut harum.
          </p>
        </div>
        <div className="pokecards">
          <section className="ourpokecards">
            {heroes && heroes.length >= 2 && (
              <>
                <CardUs
                  image={heroes[0].image?.url}
                  firstName={heroes[0].name}
                  description={"Tagazok"}
                />
                <CardUs
                  image={heroes[1].image?.url}
                  firstName={heroes[1].name}
                  description={"Tagazok"}
                />
              </>
            )}
          </section>
        </div>
      </section>
      <section className="Greuh">
        <div className="item-culum">
          <h2> Thomas !</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            cumque itaque inventore vero quas architecto est possimus nostrum
            hic, temporibus iusto, ex, ipsam veniam! Repellendus, corrupti.
            Cupiditate aliquam tenetur, deserunt cumque, non vero autem,
            necessitatibus provident nihil vitae eaque magnam unde officiis.
            Corporis rem eum aut iste accusantium ut harum.
          </p>
        </div>
        <div className="pokecards">
          <section className="ourpokecards">
            {heroes && heroes.length >= 2 && (
              <>
                <CardUs
                  image={heroes[2].image?.url}
                  firstName={heroes[2].name}
                  description={"Tagazok"}
                />
                <CardUs
                  image={heroes[3].image?.url}
                  firstName={heroes[3].name}
                  description={"Tagazok"}
                />
              </>
            )}
          </section>
        </div>
      </section>
      <section className="Greuh">
        <div className="item-culum">
          <h2> Salvia !</h2>
          <p>
            Nebula et Goku incarnent des valeurs essentielles : la résilience ,
            le courage , la quête de rédemption et l'amélioration de soi .
            Ensemble, ils montrent que peu importe les défis ou les erreurs du
            passé, il est toujours possible de grandir et de devenir une
            meilleure personne. Ils enseignent l'importance de faire face aux
            difficultés , de ne jamais abandonner , et de se battre pour ce qui
            est juste, tout en gardant l' espoir et une attitude positive Leur
            force ne réside pas seulement dans leurs capacités, mais dans leur
            capacité à surmonter les obstacles.
          </p>
        </div>
        <div className="pokecards">
          <section className="ourpokecards">
            {heroes && heroes.length >= 2 && (
              <>
                <CardUs
                  image={heroes[4].image?.url}
                  firstName={heroes[4].name}
                  description={"Tagazok"}
                />
                <CardUs
                  image={heroes[5].image?.url}
                  firstName={heroes[5].name}
                  description={"Tagazok"}
                />
              </>
            )}
          </section>
        </div>
      </section>
      <FightButton />
    </div>
  );
}

export default About;
