import { Container, Flex, Text, Image, Stack, Center, Grid, Button } from "@mantine/core";
import Card from "./Card";
import { useState, useEffect } from "react";
import home from '../../assets/css/home.module.css';
import dw from '../../assets/vectors/Download.svg';  
import BumbCircle from "./BumbCircle";
import Circle from "./Circle";
import { useMantineTheme } from "@mantine/core";
import CardMob from "./CardMob";
import useScrollHandler from "./useScrollHandler";
import { useTranslation } from "react-i18next";
const Home = ({images}) => {
    const theme = useMantineTheme();
   
    const [text, setText] = useState('');
    const [text2,setText2] = useState('');
    const [visible, setVisible] = useState(false); 
    const [visible2,setVisible2] = useState(false);
    const [visible3,setVisible3] = useState(false);
    const [visible4,setVisible4] = useState(false);
    const [showCursor, setShowCursor] = useState(false); 
    const [showCursor2,setShowCursor2] = useState(false);
    const fullText = " Moustafa Hasan";
    const typingSpeed = 70; 
     const { t, i18n } = useTranslation();
    const fullText2 = t('Informatics engineer specializing in software engineering,I study at Homs University, I have strong experience and knowledge in various programming languages and mastered the work in the field of front-end, specialized in React.');
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
        if (visible) {
            
            let index = 0;


            const cursorInterval = setInterval(() => {
                setShowCursor2((prev) => !prev); 
            }, 0); 

            const intervalId2 = setInterval(() => {
                if (index < fullText2.length) {
                    const currentChar = fullText2.charAt(index);
                    setText2((prev) => prev + currentChar);
                    index++;
                } else {
                    clearInterval(intervalId2);
                    clearInterval(cursorInterval);
                    setInterval(() => {
                      setShowCursor2(false); 
                  }, 0);
                }
            }, typingSpeed2);


            return () => {
                clearInterval(intervalId2);
                clearInterval(cursorInterval);
            };
        }
    }, [visible2]);

    useEffect(()=>{
        if(visible3){
            setTimeout(()=>{
                setVisible4(true);
            },7000)
        }
    },[visible3])

    const[hovered,setHovered] = useState(false);

    return (
        <>
            <Container fluid w='100%' px={{ base: '0px', sm: '0px', md: '4.5vw', lg: '4.5vw' }}>
                <Container m={0} className={` ${home.fade2}   ${visible3 ? home.visible : ''}`} >
                <Circle
                     w={8}
                     color1={theme.colors.primary}
                     color2={theme.colors.secondary}
                     degree='45deg'
                     top='22%'
                     right='30%'
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
                     top='39%'
                     right='13%'
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
                </Container>
                <Grid p={40}   justify="flex-start" className={`${home.fade} ${visible ? home.visible : ''}`} >
                    <Grid.Col span={{md:3,lg:3,sm:12,xs:12}} style={{zIndex:8}}>
                    <Image 
                        src={hovered?images[2]:images[0]} 
                        w='16rem'
                        radius={15} 
                        bd='4px solid #08454C' 
                        style={{ filter: 'drop-shadow(7px 10px 4.3px rgba(0, 0, 0, 0.25))' }}
                        onMouseEnter={()=>setHovered(true)}
                        onMouseLeave={()=>setHovered(false)}
                    />
                    </Grid.Col>
                    <Grid.Col span={{md:7,lg:7,sm:12,xs:12}} align='start' ml={{base:'7px',lg:'3rem',md:'4rem'}} style={{zIndex:8}}>
                    <Text mb={{base:'2rem',md:'6rem'}} fz={{base:'1.1rem',md:'2rem'}}>
                            {t("Hi there !..")}
                        </Text>
                        <Text fz={{base:'1.1rem',md:'2rem'}}  onMouseEnter={()=>setHovered(true)}
                        onMouseLeave={()=>setHovered(false)}  style={{cursor:'pointer'}}>
                                {t('I am')}
                                {Array.from(text).map((char, index) => (
                                    <span key={index} style={{ color: theme.colors.primary }}>
                                        {char}
                                    </span>
                                ))}
                                {showCursor && <span className={home.cursor} style={{ color: theme.colors.primary,marginLeft:5 }}> </span>} {/* Cursor */}
                            </Text>
                            <Text fz={{base:'1.1rem',md:'2rem'}}>
                                {t('A front-end developer')}
                            </Text>
                    </Grid.Col>
                </Grid>

                        <Flex justify={'flex-start'} px={40} gap={10} align={'center'} className={`${home.fade2} ${visible2 ? home.visible : ''}`} style={{zIndex:8}}>
                        <span className={home.span} ></span>
                        <Text fz={{base:'1.1rem',md:'1.4rem'}} c={'#08454C'} fw={600} className="title" >{t('Summary')}</Text>
                        </Flex>

                    <Text px={40} fz={{base:'14px',md:'1.3rem'}} mt={'1rem'} align='start' >
                    {Array.from(text2).map((char, index) => (
                                    <span key={index} style={{position:'relative',zIndex:8}} >
                                        {char}
                                    </span>
                                ))}
                </Text> 
                <Center>
                    <Button mt={'4rem'} radius={'md'} variant={'filled'} color={'#08454C'} size="xl" className={`${home.fadeButton} ${visible4 ? home.visibleButton : ''}`} >
                        {t('Download CV')}
                        <Image className={visible4 ? home.download: ''} ml={10} src={dw} w={25}/>
                    </Button>
                </Center>
            </Container>
            <Container visibleFrom="md"  p={0} mt={'10rem'} fluid w='100%' pos='relative'>
                <Card isScrolled={isScrolled} images={images}/>
            <Center  p={0} m={0} style={{overflow:'hidden', zIndex:1}} w='100%' h='110vh' >
            <BumbCircle 
              active={isScrolled} 
            //   size={150}  
            />
                
               </Center>
            </Container>
            <Container hiddenFrom="md"  mt={'7rem'} fluid w='100%' pos='relative'>
            
             <CardMob isScrolled={isScrolled}/>
            </Container>
        </>
    );
}

export default Home;