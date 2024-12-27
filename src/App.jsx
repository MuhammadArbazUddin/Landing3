import CardVerticalSlider from "./components/CardVerticalSlider";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Videos from "./components/Videos";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Videos />
        <CardVerticalSlider />
        <Footer />
      </div>
    </>
  );
}
