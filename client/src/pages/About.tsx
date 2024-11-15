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
      <section className="our-cards-container">
        <div className="item-culum">
          <h2> Géraldine !</h2>
          <p>
            Hello, moi c'est Géraldine, alias Gégé pour les intimes. Je suis fan
            de série télé et de cinéma, surtout des univers fantastiques. J'ai
            baigné dans l'univers des comics depuis mon enfance, grâce à mon
            papa. J'ai découvert les films avec lui. Je vous présente deux
            personnages que j'apprécie pour différentes raisons.
            <br />
            Pourquoi ai-je choisi Buffy Summers ? Buffy n'a pas une vie facile
            et bien qu'elle commence par la rejeté, elle l'accepte finalement et
            se bat pour réussir sa mission. J'adore ce personnage, car elle
            représente pour moi une femme forte et fragile en même temps. Elle
            est courageuse et je l'admire pour ça. Je pense que Buffy représente
            la femme que j'aurais voulu être pendant mon adolescence. Elle a un
            fort caractère, alors que moi je suis très effacée.
            <br />
            Pourquoi avoir choisi Thor ? J'aime beaucoup l'humour de ce
            personnage. Il est très fort, c'est un Dieu tout de même, mais il
            est aussi très maladroit. Je trouve que c'est un personnage
            intéressant, attachant et entier. Il essaye d'apprendre de ses
            erreurs et de guider son peuple du mieux qu'il peut. Je pense que je
            me suis attaché à lui, parce que je suis maman et que je dois aussi
            guider ma famille.
          </p>
        </div>
        <div className="pokecards">
          <section className="ourpokecards">
            {heroes && heroes.length >= 2 && (
              <>
                <CardUs
                  image={heroes[0].image?.url}
                  firstName={heroes[0].name}
                  description={"Gégé"}
                />
                <CardUs
                  image={heroes[1].image?.url}
                  firstName={heroes[1].name}
                  description={"Gégé"}
                />
              </>
            )}
          </section>
        </div>
      </section>
      <section className="our-cards-container">
        <div className="item-culum">
          <h2> Thomas !</h2>
          <p>
            Salut ! Moi c'est Thomas, ou "Greuh" pour les intimes 😉 Fan de
            comics, jeux vidéo, séries et j'en passe. Pour quelqu'un ayant un
            côté geek comme moi, ce projet était très intéressant et j'espère
            que vous prendrez plaisir à découvrir quelques infos sur vos
            personnages favoris ! En attendant, voici deux personnages que
            j'apprécie !<br />
            <br />
            J'aimerais vous présenter le personnage de Rogue. Pendant longtemps
            membre de l'équipe des X-men, elle a souvent pris son indépendance
            au fil des comics. Son pouvoir d'absorption de pouvoirs est souvent
            vécu comme un fardeau car elle copie également la mémoire de sa
            cible, l'obligeant à lutter pour rester elle-même. Elle reste malgré
            tout une personnalité forte, qui s'est confrontée à des personnages
            comme Magneto ou Apocalypse. <br />
            <br />
            Le choix n'a pas été simple, tant de personnages me tiennent à
            cœur... Mais Deadpool est sans doute le plus connu, surtout depuis
            qu'on le voit au cinéma ! Mais je l'apprécie davantage en version
            comics pour son côté plus sombre et profond. La folie est toujours
            présente, il brise allègrement le 4e mur (il sait qu'il est dans un
            comic après tout) mais c'est un personnage qui a réussi à rendre
            jaloux Thanos... Il aime également se "perdre" dans d'autres univers
            pour rendre visite à différents personnages ; Spider-man, Black
            Panther, Moon Knight, même chez les Teen Titans. Il est partout et
            nulle part à la fois, mais c'est ça, la folie de notre cher Deadpool
            !
          </p>
        </div>
        <div className="pokecards">
          <section className="ourpokecards">
            {heroes && heroes.length >= 2 && (
              <>
                <CardUs
                  image={heroes[2].image?.url}
                  firstName={heroes[2].name}
                  description={"Greuh"}
                />
                <CardUs
                  image={heroes[3].image?.url}
                  firstName={heroes[3].name}
                  description={"Greuh"}
                />
              </>
            )}
          </section>
        </div>
      </section>
      <section className="our-cards-container">
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
                  description={"Salvia"}
                />
                <CardUs
                  image={heroes[5].image?.url}
                  firstName={heroes[5].name}
                  description={"Salvia"}
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
