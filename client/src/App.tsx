import Body from "../src/components/Body";

import "./App.css";
import Navbar from "./components/NavBar.tsx";
import Backbanner from "./components/banner";

function App() {
  return (
    <>
      <Backbanner />
      <Navbar />
      <Body />
    </>
  );
}

export default App;
