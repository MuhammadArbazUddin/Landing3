import CardVerticalSlider from "./components/CardVerticalSlider";
import CreativeWorks from "./components/CreativeWorks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Videos from "./components/Videos";
import WorkProcess from "./components/WorkProcess";

export default function App() {
  return (
    <>
      <div>
        <Hero />
        <WorkProcess />
        <CreativeWorks />
        <Videos />
        <CardVerticalSlider />
        <Footer />
      </div>
    </>
  );
}
