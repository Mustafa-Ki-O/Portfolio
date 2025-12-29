import logoLight from '../assets/vectors/fullLogo.svg';
import logoDark from '../assets/vectors/fullLogoDesktop.svg';
import { Center, Flex, Image, Stack, useMantineColorScheme } from '@mantine/core';
// import start from '../assets/css/start.module.css';
import reactlogo from '../assets/vectors/ReactM.svg'
import MB from '../assets/vectors/MM.svg'
import MW from '../assets/vectors/MML.svg'
import USATAFB from '../assets/vectors/T1.svg'
import USATAFW from '../assets/vectors/T1L.svg'
import HASANB from '../assets/vectors/T2.svg'
import HASANW from '../assets/vectors/T2L.svg'
import * as framer from 'framer-motion';


const ImageMotion = framer.motion(Image);

const StartP = () => {
    const { colorScheme } = useMantineColorScheme();
    // const logo = colorScheme === 'dark' ? logoDark : logoLight;
    
    return (
        <>
        {colorScheme === 'dark' ? (
            <Center>
                <Flex  align="center" justify="center" gap="2px" h={'100%'} style={{transform:'scale(1.9)',overflow:'hidden'}} >
                <ImageMotion 
                initial={{x:-40,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{ duration: 0.7,  ease: "linear" }}
                src={MW} alt='M-Logo'  w={44} />
                <Stack gap={1} justify='start' align='space-between' h={'100%'}>
                    <ImageMotion 
                    initial={{y:40,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{ duration: 0.5, delay:0.2 , ease: "linear" }}
                    src={USATAFW} alt='USATAFW-Logo'  w={100} mb={3} />
                    <Flex align="center" justify="start" gap={2} >
                        <ImageMotion
                        initial={{ rotate: 0,opacity:0 ,y:80 }}
                        animate={{ rotate: [0, 360] ,opacity:1,y:0}}
                        transition={{ 
                             rotate: {
                               duration: 3,
                               repeat: Infinity,
                               ease: "linear",
                               delay: 2,
                             },
                             opacity: {
                               duration: 0.6,
                               ease: "easeOut",
                               delay: 1.2,
                             },
                              y: {
                               duration: 0.6,
                               ease: "easeOut",
                               delay: 1.2,
                             }
                            }}
                        src={reactlogo} alt='React-Logo'  w={15} />
                        <ImageMotion
                        initial={{x:40,opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{ duration: 0.5, delay:1 , ease: "linear" }}
                        src={HASANW} alt='HASANW-Logo'  w={83} />
                    </Flex>
                </Stack>
                </Flex>
            </Center>
        ) :(
            <Center>
                <Flex  align="center" justify="center" gap="2px" h={'100%'} style={{transform:'scale(1.9)',overflow:'hidden'}} >
                <ImageMotion 
                initial={{x:-40,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{ duration: 0.7,  ease: "linear" }}
                src={MB} alt='M1-Logo'  w={44} />
                <Stack gap={1} justify='start' align='space-between' h={'100%'}>
                    <ImageMotion 
                    initial={{y:40,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{ duration: 0.5, delay:0.2 , ease: "linear" }}
                    src={USATAFB} alt='USATAFB-Logo'  w={100} mb={3} />
                    <Flex align="center" justify="start" gap={2} >
                        <ImageMotion
                        initial={{ rotate: 0,opacity:0 ,y:80 }}
                        animate={{ rotate: [0, 360] ,opacity:1,y:0}}
                        transition={{ 
                             rotate: {
                               duration: 3,
                               repeat: Infinity,
                               ease: "linear",
                               delay: 2,
                             },
                             opacity: {
                               duration: 0.6,
                               ease: "easeOut",
                               delay: 1.2,
                             },
                              y: {
                               duration: 0.6,
                               ease: "easeOut",
                               delay: 1.2,
                             }
                            }}
                        src={reactlogo} alt='React-Logo'  w={15} />
                        <ImageMotion
                        initial={{x:40,opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{ duration: 0.5, delay:1 , ease: "linear" }}
                        src={HASANB} alt='HASANB-Logo'  w={83} />
                    </Flex>
                </Stack>
                </Flex>
            </Center>
        )}
            
        </>
    );
};

export default StartP;