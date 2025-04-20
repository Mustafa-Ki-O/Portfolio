import { AppShell, Burger, Flex, Image, Stack, Text } from "@mantine/core";
import { useEffect, useState,useRef } from "react"; // Import useState
import nav from '../assets/css/nav.module.css';
import logo from '../assets/vectors/fullLogoDesktop.svg'
import fullLogo from '../assets/vectors/fullLogo.svg'
import { useMantineTheme } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
const Navbar = () => {
    
    const theme= useMantineTheme();
    const [activeButton, setActiveButton] = useState('home');
    // const [opened, { toggle }] = useDisclosure();
    const [openBurger,setOpenBurger] = useState(false);
    const [openedDrawer, { open,close }] = useDisclosure(false);
    // const [projectsSectionVisible, setProjectsSectionVisible] = useState(false);
    const observer = useRef();

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 
        };

        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveButton(entry.target.id);
                }
                 // Check if the visible section is the projects section
            }
            );
        }, options);

        sections.forEach(section => {
            observer.current.observe(section);
        });

        return () => {
            if (observer.current) {
                sections.forEach(section => {
                    observer.current.unobserve(section);
                });
            }
        };
    }, []);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };
    const handleBurger = () => {
        setOpenBurger(!openBurger);
    }

    useEffect(() => {
        if (openBurger) {
            open();
        }
    }, [openBurger]);

    useEffect(()=>{
        if(!openedDrawer){
          setOpenBurger(openedDrawer);
        }
    },[ openedDrawer])

    return (
        <>
        <AppShell navbar={{ width: '100%'}}  mb='25vw' hiddenFrom="md">
                <AppShell.Navbar
                    bg='#fff'
                    h='auto'
                    px='lg'
                    py='xs'
                    style={{
                        boxShadow: "0px 15px 18px  #00000025"
                    }}>
                    <Flex justify='space-between' align="center">
                        <a href="#home">
                            <Image src={fullLogo} w='25vw' style={{
                        filter:'drop-shadow(0px 5px 6px  #00000025)'
                    }}/>
                        </a>
                        <Burger color='#08454C' lineSize={3} size="md" opened={openBurger} onClick={handleBurger} />
                    </Flex>
                </AppShell.Navbar>
            </AppShell>
        <Drawer opened={openedDrawer} onClose={close}  overlayProps={{ backgroundOpacity: 0.2, blur: 15 }}>
           <Stack>
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
                            <Image src={logo} w='13.4vw' />
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