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
        <li>Première règle: On ne parle PAS du fightclub.</li>
        <li>Seconde règle: Salvia paye toujours ses kebabs.</li>
        <li>Troisième règle: Thomas a TOUJOURS raison.</li>
        <li>Quatrième règle: Si Thomas a tord, référez vous à la règle 3.</li>
        <li>Cinquième règle: Géraldine s'essaye au vaudou sur Thomas.</li>
      </ul>
    </div>
  );
};

export default FightButton;
