import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import TopBar from "./components/TopBar";
import useMyRoute from "./store/store";

function App() {
  const { routeInfo } = useMyRoute();
  return (
    <div className="overflow-x-hidden">
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
