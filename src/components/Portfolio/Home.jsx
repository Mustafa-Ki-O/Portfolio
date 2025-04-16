import { Container, Flex, Text, Image, Stack, Center, Grid } from "@mantine/core";
import { useCallback } from "react";
import Card from "./Card";
import img from '../../assets/images/myImage.png';
import { useState, useEffect } from "react";
import home from '../../assets/css/home.module.css'; // Import your CSS module
import Circle from "./Circle";
import { useMantineTheme } from "@mantine/core";
import CardMob from "./CardMob";


const Home = () => {
    const theme = useMantineTheme();
   
    const [text, setText] = useState('');
    const [text2,setText2] = useState('');
    const [visible, setVisible] = useState(false); // State for visibility
    const [visible2,setVisible2] = useState(false);
    const [visible3,setVisible3] = useState(false)
    const [showCursor, setShowCursor] = useState(false); // State for cursor visibility
    const [showCursor2,setShowCursor2] = useState(false);
    const fullText = " Moustafa Hasan";
    const typingSpeed = 150; 

    const fullText2 = 'Informatics engineer specializing in software engineering,I study at Homs University, I have strong experience and knowledge in various programming languages and mastered the work in the field of front-end, specialized in React.';
    const typingSpeed2 = 30;    
    
    const useScrollHandler = (threshold = 470) => {
        const [isScrolled, setIsScrolled] = useState(false);
      
        const handleScroll = useCallback(() => {
          // طريقة متوافقة مع جميع المتصفحات للحصول على موقع التمرير
          const scrollPosition = Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          );
      
          // إضافة منطقة عازلة لمنع التذبذب عند الحد
          const buffer = 10;
          const shouldBeScrolled = scrollPosition >= threshold - buffer;
      
          // تحديث الحالة فقط إذا تغيرت
          if (shouldBeScrolled !== isScrolled) {
            setIsScrolled(shouldBeScrolled);
          }
        }, [ threshold]);
      
        useEffect(() => {
          // التحقق من الموقع الأولي عند التحميل
          handleScroll();
      
          // إضافة مستمع الأحداث مع خيار passive لتحسين الأداء
          window.addEventListener('scroll', handleScroll, { passive: true });
      
          // التنظيف عند إلغاء التثبيت
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, [handleScroll]);
      
        return isScrolled;
      };

      const isScrolled = useScrollHandler(360); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true); // Set visibility to true after 200ms
        }, 200);

        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    // Effect to start typing effect after the section is visible
    useEffect(() => {
        if (visible) {
            let index = 0;


            const cursorInterval = setInterval(() => {
                setShowCursor((prev) => !prev); // Toggle cursor visibility
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

            // Start blinking cursor
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
                        src={img} 
                        w='16rem'
                        radius={15} 
                        bd='4px solid #08454C' 
                        style={{ filter: 'drop-shadow(7px 10px 4.3px rgba(0, 0, 0, 0.25))' }} 
                    />
                    </Grid.Col>
                    <Grid.Col span={{md:7,lg:7,sm:12,xs:12}} align='start' ml={{base:'7px',lg:'3rem',md:'4rem'}} style={{zIndex:8}}>
                    <Text mb={{base:'2rem',md:'6rem'}} fz={{base:'1.1rem',md:'2rem'}}>
                            Hi there !..
                        </Text>
                        <Text fz={{base:'1.1rem',md:'2rem'}}>
                                I'm 
                                {Array.from(text).map((char, index) => (
                                    <span key={index} style={{ color: theme.colors.primary }}>
                                        {char}
                                    </span>
                                ))}
                                {showCursor && <span className={home.cursor} style={{ color: theme.colors.primary ,height:18}}> </span>} {/* Cursor */}
                            </Text>
                            <Text fz={{base:'1.1rem',md:'2rem'}}>
                                A front-end developer
                            </Text>
                    </Grid.Col>
                </Grid>

                        <Flex justify={'flex-start'} px={40} gap={10} align={'center'} className={`${home.fade2} ${visible2 ? home.visible : ''}`} style={{zIndex:8}}>
                        <span className={home.span} ></span>
                        <Text fz={{base:'1.1rem',md:'1.4rem'}} c={'#08454C'} fw={600} >Summary</Text>
                        </Flex>

                    <Text px={40} fz={{base:'14px',md:'1.3rem'}} mt={'1rem'} align='start' >
                    {Array.from(text2).map((char, index) => (
                                    <span key={index} style={{position:'relative',zIndex:8}} >
                                        {char}
                                    </span>
                                ))}
                </Text> 
            </Container>
            <Container visibleFrom="md"  p={0} mt={'10rem'} fluid w='100%' pos='relative'>
                <Card isScrolled={isScrolled}/>
            <Center  p={0} m={0} style={{overflow:'hidden', zIndex:1}} w='100%' h='110vh' >
               <span className={`${isScrolled ? home.bumbCircle : ''}`}></span>
                
               </Center>
            </Container>
            <Container hiddenFrom="md"  mt={'10rem'} fluid w='100%' pos='relative'>
            
             <CardMob isScrolled={isScrolled}/>
            </Container>
        </>
    );
}

export default Home;