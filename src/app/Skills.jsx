import { Container } from "@mantine/core"
import Skill from "../components/Skills/Skill"
import { useState,useEffect ,useCallback} from "react";
const Skills = ()=>{

        const useScrollHandler = (threshold = 1200) => {
            const [isScrolled, setIsScrolled] = useState(false);
          
            const handleScroll = useCallback(() => {

              const scrollPosition = Math.max(
                window.pageYOffset,
                document.documentElement.scrollTop,
                document.body.scrollTop
              );
          
// console.log(scrollPosition)
              const buffer = 10;
              const shouldBeScrolled = scrollPosition >= threshold - buffer;
          

              if (shouldBeScrolled !== isScrolled) {
                setIsScrolled(shouldBeScrolled);
              }
            }, [ threshold]);
          
            useEffect(() => {

              handleScroll();
          

              window.addEventListener('scroll', handleScroll, { passive: true });
          

              return () => {
                window.removeEventListener('scroll', handleScroll);
              };
            }, [handleScroll]);
          
            return isScrolled;
          };
    
          const isScrolled = useScrollHandler(1200); 
    return(
        <>
        <Container mt={'10rem'} fluid w={'100%'} px={{ base: '0px', sm: '0px', md: '4.5vw', lg: '4.5vw' }}>
         <Skill isScrolled={isScrolled}/>
        </Container>
        </>
    )
}
export default Skills