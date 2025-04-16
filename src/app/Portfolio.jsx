import Home from "../components/Portfolio/Home";
import Projects from "../components/Portfolio/Projects";
// import Skills from "../components/Portfolio/Skills";
import Skills from "./Skills";
import Contact from "../components/Portfolio/Contact";
import Navbar from "../components/Navbar";

const Portfolio = () => {

    return(
        <>
        <Navbar/>
        <div id="home"><Home /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
        </>
    )


}
export default Portfolio;