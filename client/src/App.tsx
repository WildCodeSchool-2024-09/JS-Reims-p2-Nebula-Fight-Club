import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
