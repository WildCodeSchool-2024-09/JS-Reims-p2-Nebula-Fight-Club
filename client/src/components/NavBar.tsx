import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="my-button-container">
      <Link to={"/"} className="navbutton">
        Accueil
      </Link>
      <button className="navbutton" type="button">
        Genre
      </button>
      <button className="navbutton" type="button">
        Camp
      </button>
      <button className="navbutton" type="button">
        Univers
      </button>
    </div>
  );
}

export default NavBar;
