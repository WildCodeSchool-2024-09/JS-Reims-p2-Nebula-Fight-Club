import { Link } from "react-router-dom";
import Aldenaire from "../assets/images/Aldenaire.png";

function click() {
  alert("Make your team, avaible soon");
}

const FightButton = () => {
  return (
    <div className="item-banniere">
      <Link to={"/fight"} onClick={click}>
        <img className="logo-nebula" src={Aldenaire} alt="logo-nfc" />
      </Link>
      <ul className="rules">
        <h3>Les règles du club</h3>
        <li>Première règle: On ne parle PAS du fightclub.</li>
        <li>
          Seconde règle: Si vous vous sentez audacieux, clickez sur le logo.
        </li>
        <li>
          Troisième règle: Sélectionnez vos personnages de coeur pour former une
          équipe.
        </li>
        <li>
          Quatrième règle: Une fois l'équipe choisie; vous affronterez quelques
          surprises...
        </li>
        <li>
          Cinquième règle: N'oubliez pas: que le sort vous soit favorable !
        </li>
      </ul>
    </div>
  );
};

export default FightButton;
