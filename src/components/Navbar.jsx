import { AppShell, Burger, Flex, Image, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react"; // Import useState
import nav from '../assets/css/nav.module.css';
import logo from '../../public/Logo.svg';
import { useMantineTheme } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
const Navbar = () => {
    
    const theme= useMantineTheme();
    const [activeButton, setActiveButton] = useState('home');
    const [opened, { toggle }] = useDisclosure();
    const [openedDrawer, { open,close }] = useDisclosure(false);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    useEffect(()=>{
        if(opened){
            open();
        }
        else{
            close();
        }
    },[opened])
    return (
        <>
        <AppShell navbar={{ width: '100%'}}  mb='25vw' hiddenFrom="md">
                <AppShell.Navbar
                    bg='#fff'
                    h='auto'
                    px='lg'
                    py='sm'
                    style={{
                        boxShadow: "0px 15px 18px  #00000025"
                    }}>
                    <Flex justify='space-between' align="center">
                        <a href="#home">
                            <Image src={logo} w='10vw' style={{
                        filter:'drop-shadow(0px 5px 6px  #00000025)'
                    }}/>
                        </a>
                        <Burger color='#08454C' lineSize={4} size="xl" opened={opened} onClick={toggle} aria-label="Toggle navigation" />
                    </Flex>
                </AppShell.Navbar>
            </AppShell>
        <Drawer opened={openedDrawer} onClose={close}  overlayProps={{ backgroundOpacity: 0.2, blur: 15 }}>
           <Stack>
            {/* <Text c='#16AABB' size="md" ta='left' className="">
              Home
            </Text> */}
            <a href="#home" onClick={() => handleButtonClick('home')}>
                    <Text c='#16AABB' size="xl"  ta='left' className={`${activeButton === 'home' ? nav.activeDrawer : ''}`} >Home</Text>
            </a>
            <a href="#skills" onClick={() => handleButtonClick('skills')}>
                    <Text c='#16AABB' size="xl"   ta='left' className={`${activeButton === 'skills' ? nav.activeDrawer : ''}`} >Skills</Text>
            </a>
            <a href="#projects" onClick={() => handleButtonClick('projects')}>
                    <Text c='#16AABB' size="xl"   ta='left' className={`${activeButton === 'projects' ? nav.activeDrawer : ''}`} >Projects</Text>
            </a>
            <a href="#contact" onClick={() => handleButtonClick('contact')}>
                    <Text c='#16AABB' size="xl"   ta='left' className={`${activeButton === 'contact' ? nav.activeDrawer : ''}`} >Contact-us</Text>
            </a>
           </Stack>
        </Drawer>
            <AppShell navbar={{ width: '100%'}}  mb='9.75vw' visibleFrom="md">
                <AppShell.Navbar
                    bg='#08454C'
                    h='auto'
                    px='1.7vw'
                    py='0.375vw'
                    style={{
                        boxShadow: "0 0.075vw 0.225vw 0 #000"
                    }}>
                    <Flex justify='space-between' align="center" px={70} >
                        <a href="#home">
                            <Image src={logo} w='5.4vw' />
                        </a>
                        <Flex gap='4.125vw' >
                            <a href="#home" onClick={() => handleButtonClick('home')}>
                                <Text className={`${nav.button} ${activeButton === 'home' ? nav.active : ''}`} fz={theme.fontSizes.f1} c="white">Home</Text>
                            </a>
                            <a href="#skills" onClick={() => handleButtonClick('skills')}>
                                <Text className={`${nav.button} ${activeButton === 'skills' ? nav.active : ''}`} fz={theme.fontSizes.f1} c="white">Skills</Text>
                            </a>
                            <a href="#projects" onClick={() => handleButtonClick('projects')}>
                                <Text className={`${nav.button} ${activeButton === 'projects' ? nav.active : ''}`} fz={theme.fontSizes.f1} c="white">Projects</Text>
                            </a>
                            <a href="#contact" onClick={() => handleButtonClick('contact')}>
                                <Text className={`${nav.button} ${activeButton === 'contact' ? nav.active : ''}`} fz={theme.fontSizes.f1} c="white">Contact-Us</Text>
                            </a>
                        </Flex>
                    </Flex>
                </AppShell.Navbar>
            </AppShell>
        </>
    );
}

export default Navbar;