import { Card, Flex, Image, Text, Tooltip, Title, Box } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import * as framer from 'framer-motion';
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { useTranslation } from "react-i18next";



const Ribbon = framer.motion(Box);
const CardMotion = framer.motion(Card);
// const TextMotion = framer.motion(Text);

const ribbonVariants = {
    initial: { scaleX: 0, transformOrigin: "left" },
    hover: { scaleX: 1 }
};

const CardProject = ({ project }) => {
    const {t} = useTranslation()
    const { text, image, lang, id } = project;
    const [selectedProj,setSelectedProj] = useState({});
    const [opened,{open , close}] = useDisclosure()
    // const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <>
        <ProjectModal opened={opened} close={close} project={selectedProj}/>
         <Tooltip label={t("Click for more details")} withArrow position="top" color="#16aabb" display={id !==5 ?'block':'none'}>
            <CardMotion
                id={id}
                p={0}
                m={'auto'}
                w={{base:'90%',md:'100%'}}
                h={{base:'18rem',lg:'20rem'}}
                style={{ justifyContent: 'flex-end', cursor: 'pointer', overflow: 'hidden' ,border:'1px solid #08454C'}}
                pos={'relative'}
                radius={'1.5rem'}
                withBorder
                onClick={()=>{
                    if (id !== 5){
                        setSelectedProj(project);
                        open();
                    }
                    
                }}
                initial="initial"
                whileHover="hover"
                animate='floating'
                whileInView="view"
                whileTap={{ scale: 0.98 }}
                variants={{
                    initial: { opacity: 0,x:-15, boxShadow: '0 0px 0px 0px #16aabb99' },
                    hover: { y:0, scale: 1.05, boxShadow: '0 5px 7px 1px #16aabb99' },
                    view: {opacity:1,x:0,transition: { 
                              duration: 0.7,
                              delay:id*0.1, 
                              ease: "easeOut" 
                            }},
                    floating: {
                    y: [0, -10, 0], 
     
                    transition: {
                        duration: 3, 
                        delay:id*0.5,    
                        repeat: Infinity, 
                        ease: "easeInOut"
                    }
                  },
                }}
               
                
            >
                <Ribbon
                    variants={ribbonVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '0.7rem',
                        background: 'linear-gradient(90deg, #16aabb 55%, #08454C 100%)',
                        zIndex: 200
                    }}
                />

                <Image
                    objectFit="cover"
                    src={image}
                    alt={text}
                    w={'100%'}
                    h={'100%'}
                    style={{ zIndex: 100 }}
                />

                <Flex
                    className="infoCard"
                    p={{ base: '0.7rem', lg: '1.3rem' }}
                    style={{
                        background: 'linear-gradient(90deg, #16aabb 85%, #08454C 100%)',
                        boxShadow: '0 5px 18px 4px #00000090',
                        zIndex: 150,
                        // overflow: 'hidden'
                    }}
                    h={'fit-content'}
                    direction={'column'}
                    gap={'0.5rem'}
                    justify={'flex-end'}
                    align={'start'}
                >
                    <Title ta={'start'} ff={'Nico Moji'} fz={{base:'12px',lg:'16px'}}  c={'#08454C'} fw={'bold'}>{text}</Title>
                    {/* <Box  style={{ 
                      overflow: 'hidden', 
                      whiteSpace: 'nowrap', 
                      width: '100%',
                      position: 'relative', 
                      display: 'block'
                    }}> */}
                        <Tooltip label={lang} withArrow position="top">
                        <Text 
                          ff={'monospace'} 
                          size="sm" 
                          c={'#ffffff'} 
                          ta={'start'}
                          truncate="end"
                          w={'100%'}
                          style={{ 
                            cursor: 'pointer', 
                            whiteSpace: 'nowrap', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis' 
                          }}
                        >
                          {
                          lang
                          }
                        </Text>
                      </Tooltip> 
                      {/* </Box> */}
                    
                    {/* <Text ff={'monospace'} ta={'start'} size="xs" c={'#ffffff'}>{url}</Text> */}
                </Flex>
            </CardMotion>
        </Tooltip>
        
        </>
       
    );
}

export default CardProject;