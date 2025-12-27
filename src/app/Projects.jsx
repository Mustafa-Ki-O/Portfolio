import { Center,Title ,Container} from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { useState,useEffect ,useRef} from "react";
import Circle from "../components/Portfolio/Circle";
import ProjectsGal from "../components/Projects/ProjectsGal";
import useScrollHandler from "../components/Portfolio/useScrollHandler";
const Projects = () => {

    const[active,setActive] = useState(false);
           
        // console.log(window.pageYOffset);
              const isScrolled = useScrollHandler(2000); 
    
              const theme = useMantineTheme();
    
              useEffect(()=>{
                if(isScrolled){
                  setTimeout(()=>{
                    setActive(true);
                  },700)
                }
              },[isScrolled])
    return(
        <>
        <Container pos={'relative'} mt={'10rem'} fluid w={'100%'} h={'fit-content'} px={{ base: '0px', sm: '0px', md: '4.5vw', lg: '4.5vw' }} >
        {/* <Container fluid w={'100%'} m={0} style={{opacity:active ?1:0,transition:'all 0.8s'}}   >
                <Circle
                     w={1}
                     color1={theme.colors.primary}
                     color2={theme.colors.secondary}
                     degree='10deg'
                     top='22%'
                     right='60%'
                     translateX={0}
                     translateY={0}
                     className="first1"
                     duration='3s'
                 />
                 <Circle
                     w={2}
                     color1={theme.colors.secondary}
                     color2={theme.colors.primary}
                     degree='145deg'
                     top='9%'
                     right='13%'
                     translateX={-2}
                     translateY={4}
                     className="second2"
                     duration='4s'
                 /> */}
                    {/* <Circle
                     w={1}
                     color1={theme.colors.secondary}
                     color2={theme.colors.primary}
                     degree='45deg'
                     top='70%'
                     right='12%'
                     translateX={-1}
                     translateY={5}
                     className="third3"
                     duration='5s'
                 />
                 <Circle
                     w={1}
                     color1={theme.colors.secondary}
                     color2={theme.colors.primary}
                     degree='245deg'
                     top='85%'
                     right='62%'
                     translateX={-5}
                     translateY={5}
                     className="forth4"
                     duration='5s'
                 />
                 <Circle
                     w={1}
                     color1={theme.colors.secondary}
                     color2={theme.colors.primary}
                     degree='25deg'
                     top='60%'
                     right='32%'
                     translateX={-5}
                     translateY={5}
                     className="fifth5"
                     duration='4s'
                 /> */}
                {/* </Container> */}
         {/* <Skill/> */}
         <ProjectsGal active={active}/>
        </Container>
        </>
    )
}
export default Projects;