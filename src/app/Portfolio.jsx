import Home from "../components/Portfolio/Home";
import Projects from "./Projects";
// import Skills from "../components/Portfolio/Skills";
import Skills from "./Skills";
import Contact from "./Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Portfolio = ({images}) => {

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