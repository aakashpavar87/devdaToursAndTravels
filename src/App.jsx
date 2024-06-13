import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import TopBar from "./components/TopBar";
import { useEffect } from "react";
import useMyRoute from "./store/store";

function App() {
  const { routeInfo } = useMyRoute();
  useEffect(() => {
    console.log(routeInfo);
  });
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
