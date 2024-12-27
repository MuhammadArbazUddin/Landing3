import CardVerticalSlider from "./components/CardVerticalSlider";
import CreativeWorks from "./components/CreativeWorks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Videos from "./components/Videos";

export default function App() {
  return (
    <>
      <div>
        <Hero />
        <CreativeWorks />
        <Videos />
        <CardVerticalSlider />
        <Footer />
      </div>
    </>
  );
}
