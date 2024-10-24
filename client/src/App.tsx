import Body from "../src/components/Body";
import "./App.css";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/NavBar.tsx";
import Backbanner from "./components/banner";

function App() {
  return (
    <>
      <Backbanner />
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}

export default App;
