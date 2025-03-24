import Image from "next/image";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";


export default function Home() {
  return (
  <section>
    <HomePage/>
    <AboutUs/>
    <Services/>
  </section>
  );
}
