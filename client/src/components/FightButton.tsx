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
        <li>
          <strong>Première règle:</strong> On ne parle PAS du fightclub.
        </li>
        <li>
          <strong>Seconde règle:</strong> Si vous vous sentez audacieux, clickez
          sur le logo.
        </li>
        <li>
          <strong>Troisième règle:</strong> Sélectionnez vos personnages de
          coeur pour former une équipe.
        </li>
        <li>
          <strong>Quatrième règle:</strong> Une fois l'équipe choisie; vous
          affronterez quelques surprises...
        </li>
        <li>
          <strong>Cinquième règle:</strong> N'oubliez pas: que le sort vous soit
          favorable !
        </li>
      </ul>
    </div>
  );
};

export default FightButton;
