import { Container, Flex, Grid, Text } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";
import home from '../../assets/css/home.module.css'
import Card from "./Card";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

const ContactCard = ({ isScrolled }) => {
    const { colorScheme } = useMantineColorScheme(); 
    
    const [show, setShow] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        setTimeout(() => {
            if (isScrolled === true) {
                setShow(true);
            }
        }, 700)
    }, [isScrolled]);

    return (
        <Container fluid px={40} className={`${home.fade} ${show ? home.visibleFromL :''}`}>
            <Flex justify={'flex-start'} gap={10} align={'center'} mb={'6rem'}>
                <span className={home.span}></span>
                <Text fz={{ base: '1.1rem', md: '1.4rem' }} c={'#08454C'} fw={600} className="title">
                    {t("Contact Me")}!
                </Text>
            </Flex>
            <Grid gutter={'3rem'} >
                <Grid.Col 
                    span={{ base: 12, lg: 6, md: 6, sm: 12 }}
                    style={{
                        borderRadius: '3rem',
                        background: colorScheme === 'dark' 
                            ? 'transparent' 
                            : 'linear-gradient(90deg,#16aabb30,#fff)',
                    }}
                    
                >
                    <Card />
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 6, md: 6, sm: 12 }}>
                    <ContactForm />
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default ContactCard;