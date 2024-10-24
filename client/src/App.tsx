import "./App.css";
import Body from "../src/components/Body";
import Card from "./components/Card.tsx";
import Navbar from "./components/NavBar.tsx";
import Backbanner from "./components/Banner.tsx";
import Fightbutton from "./components/FightButton.tsx";

function App() {
  return (
    <>
      <Backbanner />
      <Navbar />
      <Body />
      <Card
        image="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        firstName="Bruce Wayne"
        alias="Batman"
      />
      <Card
        image="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        firstName="Bruce Wayne"
        alias="Batman"
      />
      <Card
        image="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        firstName="Bruce Wayne"
        alias="Batman"
      />
      <Card
        image="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        firstName="Bruce Wayne"
        alias="Batman"
      />
      <Fightbutton />
    </>
  );
}

export default App;
