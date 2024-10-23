import Body from "../src/components/Body";

import "./App.css";
import Navbar from "./components/NavBar.tsx";
import Backbanner from "./components/banner";
import Card from "./components/Card.tsx";

function App() {
  return (
    <>
      <Backbanner />
      <Navbar />
      <Body />
      <Card
        image="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        firstName="Batman"
      />
            <Card
        image="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        firstName="Batman"
      />
            <Card
        image="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        firstName="Batman"
      />
            <Card
        image="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        firstName="Batman"
      />
    </>
  );
}

export default App;
