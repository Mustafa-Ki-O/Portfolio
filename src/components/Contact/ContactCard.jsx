import { Container,Flex,Grid,Text } from "@mantine/core";
import { useEffect,useState } from "react";
import home from '../../assets/css/home.module.css'
import Card from "./Card";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";
const ContactCard = ({isScrolled}) => {

    
    const[show,setShow] = useState(false);
    const {t,i18n} = useTranslation()
        useEffect(()=>{
            setTimeout(()=>{
                if(isScrolled==true){
                    setShow(true);
                }
            },2000)
        },[isScrolled])

    return(
        <>
        <Container fluid px={40} style={{opacity:show?1:0,transition:'all 0.7s'}}>
          <Flex justify={'flex-start'}  gap={10} align={'center'} mb={'6rem'}>
                          <span className={home.span} ></span>
                          <Text fz={{base:'1.1rem',md:'1.4rem'}} c={'#08454C'} fw={600} >{t("Contact Me")} !</Text>
            </Flex> 
        <Grid gutter={'3rem'}>
            <Grid.Col span={{base:12,lg:6,md:6,sm:12}} style={{
                borderRadius:'3rem',
                // boxShadow:'0 3px 4px #00000050',
                background:'linear-gradient(90deg,#16aabb30,#fff)',
               
            }}>
             <Card/>
            </Grid.Col>
            <Grid.Col span={{base:12,lg:6,md:6,sm:12}}  >
              <ContactForm/>
            </Grid.Col>
        </Grid>
        </Container>
        </>
    )
}
export default ContactCard;