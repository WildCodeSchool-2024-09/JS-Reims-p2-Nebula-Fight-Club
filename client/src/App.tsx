import Body from "../src/components/Body";

import "./App.css";
import Navbar from "./components/NavBar.tsx";
import Backbanner from "./components/banner";
import Fightbutton from "./components/fightbutton.tsx";

function App() {
  return (
    <>
      <Backbanner />
      <Navbar />
      <Body />
      <Fightbutton />
    </>
  );
}

export default App;
