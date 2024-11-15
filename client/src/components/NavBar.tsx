import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="my-button-container">
      <Link to={"/"} className="navbutton">
        Accueil
      </Link>
      <Link to={"search"} className="navbutton">
        Recherche
      </Link>
      <Link to={"about"} className="navbutton">
        A propos
      </Link>
    </div>
  );
}

export default NavBar;
