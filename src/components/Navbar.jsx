import { AppShell, Burger, Flex, Image, Stack, Text,Select, Group } from "@mantine/core";
import { useEffect, useState,useRef } from "react"; // Import useState
import nav from '../assets/css/nav.module.css';
import logo from '../assets/vectors/fullLogoDesktop.svg'
import fullLogo from '../assets/vectors/fullLogo.svg'
// import { useWindowScroll } from '@mantine/hooks';
import { useMantineTheme } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { LanguagePicker } from "./LanguagePicker";
import { useTranslation } from "react-i18next";
import ModePicker from "./ModePicker";
import { useMantineColorScheme } from "@mantine/core";
const Navbar = () => {
        const { colorScheme } = useMantineColorScheme();
        const logoMob = colorScheme === 'dark' ?  logo  : fullLogo;
        const bgColor = colorScheme === 'dark' ?  '#242424'  :  '#08454C';
    const {t,i18n} = useTranslation()
    const theme= useMantineTheme();
    const [activeButton, setActiveButton] = useState('home');
    const [openBurger,setOpenBurger] = useState(false);
    const [openedDrawer, { open,close }] = useDisclosure(false);
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
        close()
    };
    const handleBurger = () => {
        setOpenBurger(!openBurger);
    }

    useEffect(() => {
        if (openBurger===true) {
            open();
        }else{close()}
    }, [openBurger]);

    useEffect(()=>{
        if(!openedDrawer){
          setOpenBurger(openedDrawer);
        }
    },[ openedDrawer])

    // const [scroll, scrollTo] = useWindowScroll();
    // const [navbarVisible, setNavbarVisible] = useState(true);
    // const [prevY, setPrevY] = useState(0); 
    // useEffect(() => {
    //   if (scroll.y > 100 && scroll.y > prevY) {
    //     console.log(navbarVisible)
    //     setNavbarVisible(false);
    //   } else if (scroll.y < prevY) {
    //     setNavbarVisible(true);
    //   }
    // }, [scroll.y]);

    return (
        <>
        <AppShell className="navs" navbar={{ width: '100%' }}   mb='25vw' hiddenFrom="md" >
                <AppShell.Navbar
                    // bg='#fff'
                    h='auto'
                    px='lg'
                    py='xs'
                    style={{
                        boxShadow: "0px 15px 18px #00000025",
                        // position: 'fixed',
                        // top: navbarVisible ? 0 : -60,
                        // transition: 'top 0.3s ease-in-out',
                        width: '100%',
                        zIndex: 300,
                      }}>
                    <Flex justify='space-between' align="center" >
                        <Group>
                        <a href="#home">
                            <Image src={logoMob} w='25vw' style={{
                        filter:'drop-shadow(0px 5px 6px  #00000025)'
                    }}/>
                        </a>
                        <LanguagePicker/>
                        <ModePicker mob={true}/>
                        </Group>
                        <Burger color='#08454C' lineSize={3} size="md" opened={openBurger} onClick={handleBurger} />
                    </Flex>
                </AppShell.Navbar>
            </AppShell>
        <Drawer  pos={'relative'} opened={openedDrawer} onClose={close}  overlayProps={{ backgroundOpacity: 0.2, blur: 15 }}>
           <Stack mt={'5rem'} gap={'0.5rem'}>
            <a href="#home" onClick={() => handleButtonClick('home')}>
                    <Text c='#16AABB' size="xl"  ta='left' className={`${activeButton === 'home' ? nav.activeDrawer : ''}`} >{t("Home")}</Text>
            </a>
            <a href="#skills" onClick={() => handleButtonClick('skills')}>
                    <Text c='#16AABB' size="xl"   ta='left' className={`${activeButton === 'skills' ? nav.activeDrawer : ''}`} >{t("Skills")}</Text>
            </a>
            <a href="#projects" onClick={() => handleButtonClick('projects')}>
                    <Text c='#16AABB' size="xl"   ta='left' className={`${activeButton === 'projects' ? nav.activeDrawer : ''}`} >{t("Projects")}</Text>
            </a>
            <a href="#contact" onClick={() => handleButtonClick('contact')}>
                    <Text c='#16AABB' size="xl"   ta='left' className={`${activeButton === 'contact' ? nav.activeDrawer : ''}`} >{t("Contact-us")}</Text>
            </a>
            
           </Stack>
           <Image src={logoMob} w={'10rem'} pos={'absolute'} bottom={'10%'}/>
        </Drawer>
            <AppShell className="navs" navbar={{ width: '100%'}}  mb='9.75vw' visibleFrom="md">
                <AppShell.Navbar
                    bg={bgColor}
                    h='auto'
                    px='1.7vw'
                    py='0.375vw'
                    style={{
                        boxShadow: "0 0.075vw 0.225vw 0 #000", zIndex: 300
                    }}>
                    <Flex justify='space-between' align="center" px={70} >
                        <a href="#home">
                            <Image src={logo} w='13.4vw' />
                        </a>
                        <LanguagePicker/>
                        <ModePicker mob={false}/>
                        <Flex gap='4.125vw' >
                            <a href="#home" onClick={() => handleButtonClick('home')}>
                                <Text className={`${nav.button} ${activeButton === 'home' ? nav.active : ''}`} fz={theme.fontSizes.f1} c="white">{t("Home")}</Text>
                            </a>
                            <a href="#skills" onClick={() => handleButtonClick('skills')}>
                                <Text className={`${nav.button} ${activeButton === 'skills' ? nav.active : ''}`} fz={theme.fontSizes.f1} c="white">{t("Skills")}</Text>
                            </a>
                            <a href="#projects" onClick={() => handleButtonClick('projects')}>
                                <Text className={`${nav.button} ${activeButton === 'projects' ? nav.active : ''}`} fz={theme.fontSizes.f1} c="white">{t("Projects")}</Text>
                            </a>
                            <a href="#contact" onClick={() => handleButtonClick('contact')}>
                                <Text className={`${nav.button} ${activeButton === 'contact' ? nav.active : ''}`} fz={theme.fontSizes.f1} c="white">{t("Contact-Us")}</Text>
                            </a>
                        </Flex>
                    </Flex>
                </AppShell.Navbar>
            </AppShell>
        </>
    );
}

export default Navbar;