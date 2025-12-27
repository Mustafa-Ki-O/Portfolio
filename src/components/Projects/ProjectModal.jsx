import { Box, Button, Flex, Modal,Stack,Text, Title } from "@mantine/core"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ws from '../../assets/vectors/Website.svg'
import { useHref } from "react-router";
import { useMediaQuery } from "@mantine/hooks";

const ProjectModal = ({project,opened,close}) => {
  
    

    const { text, image, lang, id,url,problem,goal,solution } = project;

    const isMobile = useMediaQuery('(max-width: 768px)');
     const {t} = useTranslation()
    return(
        <>
         <Modal
         
        size={isMobile ? "100%" : "70%"}
        fullScreen={isMobile ? true : false}
        centered
        radius={20}
        opened={opened}
        onClose={close}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 2,
        }}
        style={{ position: "absolute", left: 0,zIndex:500}}
      >
        <Stack pb={20} dir="rtl"  w="90%" m="auto" gap={10} >
          <Title ff={'Nico Moji'} order={2} fw={900} ta="center" c={'#16aabb'}>
           {t(text)}
          </Title>
          <Text  ff={'monospace'} size="lg" fw={700}  ta="center" >
           {t(lang)}
          </Text>

          <Box ta="left" mt={'2rem'}>
   
              <Text  fw={800} size="sm" c="#16aabb" tt="uppercase" lts={1} mb={4}>
                {t('The Problem')}
              </Text>
              <Text  ff={'inter'} mb={'lg'} size="lg" fw={500}  ta="left" style={{ lineHeight: 1.6 }}>
                {problem} 
              </Text>
            
   
              <Text fw={800} size="sm" c="#16aabb" tt="uppercase" lts={1} mb={4} >
                {t('The Goal')}
              </Text>
              <Text ff={'inter'} mb={'lg'} size="lg" fw={500}  ta="left" style={{ lineHeight: 1.6 }}>
                {goal}
              </Text>
            
    
              <Text fw={800} size="sm" c="#16aabb" tt="uppercase" lts={1} mb={4}>
                {t('The Solution')}
              </Text>
              <Text ff={'inter'} mb={'lg'} size="lg" fw={500}  ta="left" style={{ lineHeight: 1.6 }}>
                {solution}
              </Text>
            </Box>
          <Flex gap={30} mt={'1.4rem'} w='100%' justify='space-between'>
           <Button 
             leftSection={<img src={ws} style={{width:'1.5rem'}} />}
              component="a" 
              href={url} 
              target="_blank"
              size="lg" 
              radius={10} 
              variant="filled" 
              color="#16aabb"
            >
              {t('Visit')}
            </Button>
           <Button size="lg" radius={10}  variant="outline" color="#08454C" onClick={close}>
             {t('Close')}
           </Button>
          </Flex>
        </Stack>
      </Modal>
        </>
    )


}
export default ProjectModal