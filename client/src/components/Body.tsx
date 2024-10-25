import Aldenaire from "../assets/images/Aldenaire.png";

function Body() {
  return (
    <section>
      <h1 className="first-title">Nous sommes la team Nebula</h1>
      <p className="intro">
        Bienvenue dans le fight club des légendes.
        <br /> Ici vous trouverez des informations sur tout vos personnages
        favoris, et en découvrirez d'autres. <br />
        Un seul mot d'ordre: soyez curieux !
      </p>
      <div className="item-banniere">
        <img className="logo-nebula" src={Aldenaire} alt="logo-nfc" />
        <ul className="rules">
          <li>Première règle: On ne parle PAS du fightclub.</li>
          <li>Seconde règle: Salvia paye toujours ses kebabs.</li>
          <li>Troisième règle: Thomas a TOUJOURS raison.</li>
          <li>Quatrième règle: Si Thomas a tord, référez vous à la règle 3.</li>
          <li>
            Cinquième règle: Géraldine est devenue alcoolique à cause de Thomas.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Body;
