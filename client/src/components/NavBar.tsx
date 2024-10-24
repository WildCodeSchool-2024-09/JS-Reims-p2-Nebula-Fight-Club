import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="my-button-container">
        <button className="navbutton" type="button">
          Accueil
        </button>
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
    </>
  );
}

export default NavBar;
