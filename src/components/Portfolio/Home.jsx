import { Container, Flex, Text, Image, Stack } from "@mantine/core";
import img from '../../assets/images/profile.jpg';
import { useState, useEffect } from "react";
import home from '../../assets/css/home.module.css'; // Import your CSS module
import Circle from "./Circle";
import { useMantineTheme } from "@mantine/core";

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
                <div className={` ${home.fade2}   ${visible3 ? home.visible : ''}`} >
                <Circle
                     w={9}
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
                     w={5}
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
                     w={3}
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
                </div>
                <Stack gap='3.75vw' style={{zIndex:4}}>
                <Flex visibleFrom="md" justify='flex-start' gap='2.25vw' className={`${home.fade} ${visible ? home.visible : ''}`}>
                    <Image 
                        src={img} 
                        w='18vw'
                        radius={15} 
                        bd='4px solid #08454C' 
                        style={{ filter: 'drop-shadow(7px 10px 4.3px rgba(0, 0, 0, 0.25))' }} 
                    />
                    <Stack align="start" mt={12} gap='5.25vw'>
                        <Text fz={theme.fontSizes.f3}>
                            Hi there !..
                        </Text>
                        <Stack align="start">
                            <Text fz={theme.fontSizes.f3}>
                                I'm 
                                {Array.from(text).map((char, index) => (
                                    <span key={index} style={{ color: theme.colors.primary }}>
                                        {char}
                                    </span>
                                ))}
                                {showCursor && <span className={home.cursor} style={{ color: theme.colors.primary }}> </span>} {/* Cursor */}
                            </Text>
                            <Text fz={theme.fontSizes.f3}>
                                A front-end developer
                            </Text>
                        </Stack>
                    </Stack>
                </Flex>
                {/* mobile */}
                <Flex hiddenFrom="md" justify='flex-start' gap='1.5rem' className={`${home.fade} ${visible ? home.visible : ''}`}>
                    <Image 
                        src={img} 
                        w='8rem'
                        radius={18} 
                        bd='3px solid #08454C' 
                        style={{ filter: 'drop-shadow(7px 10px 4.3px rgba(0, 0, 0, 0.25))' }} 
                    />
                        <Text style={{alignSelf:'flex-end'}}mb={15} fz={20}>
                            Hi there !..
                        </Text>     
                </Flex>
                        <Stack align="start" my={15}>
                            <Text fz={20}>
                                I'm 
                                {Array.from(text).map((char, index) => (
                                    <span key={index} style={{ color: theme.colors.primary }}>
                                        {char}
                                    </span>
                                ))}
                                {showCursor && <span className={home.cursor} style={{ color: theme.colors.primary }}> </span>} {/* Cursor */}
                            </Text>
                            <Text fz={20}>
                                A front-end developer
                            </Text>
                        </Stack>
                <Flex justify='flex-start' gap={0} className={`${home.fade2} ${visible2 ? home.visible : ''}`}>
                <span className={home.span}></span>
                    <Text ml='1.5vw' fz={16} align='start' >
                    {Array.from(text2).map((char, index) => (
                                    <span key={index} >
                                        {char}
                                    </span>
                                ))}
                                {showCursor2 && <span className={home.cursor2} > </span>}
                </Text> 
                </Flex>
             </Stack>
            </Container>
        </>
    );
}

export default Home;