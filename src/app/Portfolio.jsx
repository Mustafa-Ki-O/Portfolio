import Home from "../components/Portfolio/Home";
import Projects from "./Projects";
// import Skills from "../components/Portfolio/Skills";
import Skills from "./Skills";
import Contact from "./Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from 'react';
const Portfolio = ({images}) => {


        useEffect(()=>{
        const hash = window.location.hash
        if (hash) {
          requestAnimationFrame(() => {
            document
              .getElementById(hash.slice(1))
              ?.scrollIntoView({ behavior: "smooth" });
          });
        }
      }, []);
    return(
        <>
        <Navbar/>
        <section id="home"><Home images={images}/></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <Footer/>
        </>
    )


}
export default Portfolio;