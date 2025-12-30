import { Container, Flex, Text, Image, Stack, Center, Grid, Button, Box } from "@mantine/core";
import Card from "./Card";
import DownloadFileButton from '../DownloadFileButton'
import { useState, useEffect, useRef } from "react";
import home from '../../assets/css/home.module.css';
// import dw from '../../assets/vectors/Download.svg';  
import BumbCircle from "./BumbCircle";
import Circle from "./Circle";
import { useMantineTheme } from "@mantine/core";
import CardMob from "./CardMob";
import useScrollHandler from "./useScrollHandler";
import { useTranslation } from "react-i18next";
import { useMantineColorScheme } from "@mantine/core";
import * as framer from 'framer-motion';

const ImageMotion = framer.motion(Image);

const Home = ({images}) => {
    const theme = useMantineTheme();
    const { colorScheme } = useMantineColorScheme();
    // const color = colorScheme === 'dark' ?  '#fff'  :  '#08454C';
    const [text, setText] = useState('');
    const [text2,setText2] = useState('');
    const [visible, setVisible] = useState(false); 
    const [visible2,setVisible2] = useState(false);
    const [visible3,setVisible3] = useState(false);
    const [visible4,setVisible4] = useState(false);
    const [showCursor, setShowCursor] = useState(false); 
    const [showCursor2,setShowCursor2] = useState(false);
    const hasScrolled = useRef(false);
    const fullText = " Mustafa Hasan";
    const typingSpeed = 70; 
     const { t, i18n } = useTranslation();
    // const fullText2 = t('Informatics engineer specializing in software engineering,I study at Homs University, I have strong experience and knowledge in various programming languages and mastered the work in the field of front-end, specialized in React.');
    const typingSpeed2 = 30;    
    

    

      const isScrolled = useScrollHandler(360); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true); 
        }, 200);

        return () => clearTimeout(timer); 
    }, []);

  
    useEffect(() => {
        if (visible) {
            let index = 0;
            const cursorInterval = setInterval(() => {
                setShowCursor(true); 
            }, 0); 

            const intervalId = setInterval(() => {
                if (index < fullText.length) {
                    const currentChar = fullText.charAt(index);
                    setText((prev) => prev + currentChar);
                    index++;
                } else {
                    clearInterval(intervalId);
                    clearInterval(cursorInterval);
                    setInterval(() => {
                      setShowCursor((prev) => !prev); 
                      setVisible2(true)
                      setVisible3(true)
                  }, 800);
                }
            }, typingSpeed);

            return () => {
                clearInterval(intervalId);
                clearInterval(cursorInterval);
                
            };
        }
    }, [visible]); 

    useEffect(() => {
        if (visible2) {
            let index = 0;
            setText2(''); 

            const fullText2 = t('Informatics engineer specializing in software engineering, I study at Homs University, I have strong experience and knowledge in various programming languages and mastered the work in the field of front-end, specialized in React.');

            const cursorInterval = setInterval(() => {
                setShowCursor2(prev => !prev); 
            }, 0); 

            const intervalId = setInterval(() => {
                if (index < fullText2.length) {
                    const currentChar = fullText2.charAt(index);
                    setText2(prev => prev + currentChar);
                    index++;
                } else {
                    clearInterval(intervalId);
                    clearInterval(cursorInterval);
                    setInterval(() => {
                        setShowCursor2(false); 
                    }, 0);
                    
                    
                }
            }, typingSpeed2);

            return () => {
                clearInterval(intervalId);
                clearInterval(cursorInterval);
            };
        }
    }, [visible2, i18n.language, t])

    useEffect(()=>{
        if(visible3){
            setTimeout(()=>{
                setVisible4(true);
            },10000)
        }
    },[visible3])

    // const easing = {
    //     easeIn: t => t * t,                
    //     easeOut: t => t * (2 - t),        
    //     easeInOut: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    //     bounce: t => {                    
    //       if (t < 1 / 2.75) return 7.5625 * t * t;
    //       if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    //       if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    //       return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    //     }
    //   }
    //   const hasScrolled = useRef(false);

      useEffect(() => {
        if (visible2 && !hasScrolled.current) {
          window.scrollBy({
            top: 280,
            behavior: 'smooth'
          });
          hasScrolled.current = true;
        }
      }, [visible2]);
      
    return (
        <>
            <Container fluid w='100%' px={{ base: '0px', sm: '0px', md: '4.5vw', lg: '4.5vw' }} 
             style={{perspective:'500px',transformStyle:'preserve-3d',overflow:'hidden'}}>
                <Container m={0} className={` ${home.fade2}   ${visible3 ? home.visible : ''}`}  >
                <Circle
                     w={8}
                     color1={theme.colors.primary}
                     color2={theme.colors.secondary}
                     degree='45deg'
                     top='6%'
                     right='35%'
                     translateX={0}
                     translateY={0}
                     className="first"
                     duration='3s'
                 />
                 <Circle
                     w={4}
                     color1={theme.colors.secondary}
                     color2={theme.colors.primary}
                     degree='145deg'
                     top='30%'
                     right='18%'
                     translateX={-2}
                     translateY={4}
                     className="second"
                     duration='4s'
                 />
                    <Circle
                     w={2}
                     color1={theme.colors.secondary}
                     color2={theme.colors.primary}
                     degree='45deg'
                     top='70%'
                     right='12%'
                     translateX={-1}
                     translateY={5}
                     className="third"
                     duration='5s'
                 />
                   {/* <Circle
                     w={3}
                     color1={theme.colors.secondary}
                     color2={theme.colors.primary}
                     degree='45deg'
                     top='100%'
                     right='52%'
                     translateX={-1}
                     translateY={5}
                     className="forth"
                     duration='5s'
                 /> */}
                </Container>
                <Grid p={40} pt={60}  justify="flex-start" >
                    <Grid.Col pos={'relative'} span={{md:3,lg:3,sm:12,xs:12}} style={{zIndex:8,
                        perspective:'700px',transformStyle:'preserve-3d'
                    }} >
                        
                    <Box pos={'relative'} p={0} m={0} w={{base:'8rem',md:'10vw'}}>
                        <ImageMotion
                        initial={{opacity:0,y:-30,rotateZ:-5,filter: 'drop-shadow(0px 0px 0px transparent)'}}
                        animate={{opacity:1,y:0 ,filter: 'drop-shadow(0px 0px 0px transparent)'}}
                        whileHover={{scale:1.2 , filter: 'drop-shadow(0px 2px 6px #ee1010)'}}
                        whileTap={{scale:1.2}}
                        transition={{
                            scale:{delay:0, duration:0.2},
                            duration:0.3,delay:0.3}}
                        src={images[4]} 
                        w={{base:'9rem',md:'11vw'}} pos={'absolute'} left={'125%'} top={'-24%'} style={{zIndex:100}}/>
                        <Image          
                        className={`${home.fade} ${visible ? home.visibleAnm : ''}`}
                        src={colorScheme==='dark'? images[3]:images[0] } 
                        w={{base:'16rem',md:'20vw'}}
                        radius={15} 
                        bd={{base:'0.3rem solid #08454C' ,md:'0.3vw solid #08454C' }}
                        style={{ filter: 'drop-shadow(7px 10px 4.3px rgba(0, 0, 0, 0.25))' }}
                    />
                    </Box>
                    
                    </Grid.Col>
                    <Grid.Col span={{md:7,lg:7,sm:12,xs:12}} align='start' ml={{base:'7px',lg:'3vw',md:'4vw'}} style={{zIndex:8}}>
                    <Text mb={{base:'1.4rem',md:'6vw'}} fz={{base:'1.2rem',md:'2.8vw'}}  className={`${home.fade} ${visible ? home.visible : ''}`}>
                            {t("Hi there !..")}
                        </Text>
                        <Text fz={{base:'1.3rem',md:'2.8vw'}}
                         style={{cursor:'pointer'}}  className={`${home.SpText} ${home.fade} ${visible ? home.visible : ''}`}>
                                {t('I am')}
                                {Array.from(text).map((char, index) => (
                                    <span key={index} style={{ color: theme.colors.primary }}>
                                        {char}
                                    </span>
                                ))}
                                {showCursor && <span className={home.cursor} style={{ color: theme.colors.primary,marginLeft:5 }}> </span>} {/* Cursor */}
                            </Text>
                            <Text fz={{base:'1.3rem',md:'2.8vw',xs:'1rem'}}  className={`${home.SpText} ${home.fade} ${visible ? home.visible : ''}`}>
                                {t('A front-end developer')}
                            </Text>
                    </Grid.Col>
                </Grid>

                        <Flex justify={'flex-start'} px={40} gap={{base:10,md:'0.7vw'}} align={'center'} className={`${home.fade2} ${visible2 ? home.visible : ''}`} style={{zIndex:8}}>
                        <span className={home.span} ></span>
                        <Text fz={{base:'1.4rem',md:'1.7vw'}} c={'#08454C'} fw={800} className="title " >{t('Summary')}</Text>
                        </Flex>

                    <Text px={40} fz={{base:'1.2rem',md:'1.6vw'}} mt={'1rem'} align='start' h={'3rem'} mb={'2rem'} className={home.SpText}>
                    {Array.from(text2).map((char, index) => (
                                    <span key={index} style={{position:'relative',zIndex:8}} >
                                        {char}
                                    </span>
                    ))}
                </Text> 
                <Center>
                   <DownloadFileButton visible4={visible4}/>
                </Center>
            </Container>
            <Container visibleFrom="md"  p={0} mt={'10rem'} fluid w='100%' pos='relative'>
                <Card isScrolled={isScrolled} images={images}/>
            <Center  p={0} m={0} style={{overflow:'hidden', zIndex:1}} w='100%' h='110vh' >
            <BumbCircle 
              active={isScrolled} 
            />
                
               </Center>
            </Container>
            <Container hiddenFrom="md"  mt={'4rem'} fluid w='100%' pos='relative' style={{transformStyle:'preserve-3d',
                perspective:'1000px'
            }}>
            
             <CardMob isScrolled={isScrolled}/>
            </Container>
        </>
    );
}

export default Home;