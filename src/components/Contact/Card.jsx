import { Text, Flex, Grid, Image, Anchor } from "@mantine/core";
import email from '../../assets/vectors/Email1.svg';
import phone from '../../assets/vectors/Phone1.svg';
import linkedin from '../../assets/vectors/LinkedIn.svg';
import gitHub from '../../assets/vectors/GitHub.svg';
import form from '../../assets/css/contact.module.css'
import { useTranslation } from "react-i18next";

const Card = () => {
    const { t } = useTranslation();
    const info = [ 
        { icon: phone, data: 'tel:+963981xxxxxxx' }, 
        { icon: linkedin, data: 'https://www.linkedin.com/in/mustafa-hasan11' },
        { icon: gitHub, data: 'https://github.com/Mustafa-Ki-O/' }, 
        { icon: email, data: 'mailto:mustafahasan002@gmail.com' } 
    ];

    return (
        <Grid px={{ base: '0.6rem', md: '2rem' }} style={{ zIndex: 100 }} justify="space-between"  gutter={'1rem'}>
            <Grid.Col span={12}  style={{zIndex:100}}>
                <Text ta={'start'} c={'#08454C'} fz={'1.6rem'} fw={'bold'} className="title"  style={{zIndex:1000}}>
                    {t("Let's Connect")}!
                </Text>
            </Grid.Col>
            <Grid.Col span={12} style={{zIndex:10}}>
                <Text ta={'start'} mb={30} fz={'1.3rem'} style={{zIndex:100}}>
                    {t("What are you looking for?")}
                </Text>
                <Text ta={'start'} mb={30}  fz={'1.1rem'}>
                    {t("Accuracy? Beautiful designs? Flexibility and speed in the completion of projects?")}
                </Text>
                <Text ta={'start'} mb={30} fz={'1.3rem'}>
                    {t("You can message me at any time throughout the day.")}
                </Text>
            </Grid.Col>
            <Grid.Col span={12}>
                <Flex  px={'0rem'} justify={'space-between'}>
                    {info.map((item, i) => (
                        item.data ? ( 
                            <Anchor 
                                key={i} 
                                href={item.data} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Image className={form.image} src={item.icon}  w={item.icon === phone ? '2.4rem' : '2.9rem'}  style={{ cursor: 'pointer' }} mt={item.icon === phone ? 3 :0 } />
                            </Anchor>
                        ) : (
                            <Image key={i} src={item.icon} w={'3rem'} />
                        )
                    ))}
                </Flex>
            </Grid.Col>
        </Grid>
    );
};

export default Card;