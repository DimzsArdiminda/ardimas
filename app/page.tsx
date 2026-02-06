import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Experience from "@/components/Experience";
import Tech from "@/components/Tech";
import FitureProject from "@/components/FitureProject";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Stats/>
      <About/>
      <Experience/>
      <Tech/>
      <FitureProject/>
      <Footer/>
    </div>
  );
}
