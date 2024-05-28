import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import OurFleet from "./components/OurFleet";
import OurRates from "./components/OurRates";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="overflow-x-hidden">
      <TopBar />
      <Navbar />
      <Hero />
      <OurRates />
      <OurFleet />
      <Testimonial />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
