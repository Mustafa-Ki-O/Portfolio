import { Container, Title, Text, Flex, Grid, Image, Anchor } from "@mantine/core";
import email from '../../assets/vectors/Email1.svg';
import phone from '../../assets/vectors/Phone1.svg';
import linkedin from '../../assets/vectors/LinkedIn.svg';
import facebook from '../../assets/vectors/Facebook.svg';
import form from '../../assets/css/contact.module.css'
const Card = () => {
    const info = [
        { icon: phone, data: 'tel:+963981xxxxxxx' }, // Use 'tel:' for phone links
        { icon: linkedin, data: 'https://www.linkedin.com/in/mustafa-hasan11?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
        { icon: facebook, data: '' }, // Empty link (won't be clickable)
        { icon: email, data: 'mailto:mustafahasan002@gmail.com' }
    ];

    return (
        <Grid px={{ base: 0, md: '2rem' }} style={{ zIndex: 100 }}>
            <Grid.Col span={12}>
                <Text ta={'start'} c={'#08454C'} fz={'1.7rem'} fw={'bold'}>
                    Let's Connect !
                </Text>
            </Grid.Col>
            <Grid.Col span={12}>
                <Text ta={'start'} mb={30} c={'#000'} fz={'1.4rem'}>
                    What are you looking for?
                </Text>
                <Text ta={'start'} mb={30} c={'#000'} fz={'1.2rem'}>
                    Accuracy? Beautiful designs? Flexibility and speed in the completion of projects ?
                </Text>
                <Text ta={'start'} mb={30} c={'#000'} fz={'1.4rem'}>
                    You can message me at any time throughout the day 💙
                </Text>
            </Grid.Col>
            <Grid.Col span={12}>
                <Flex  px={'0rem'} justify={'space-between'}>
                    {info.map((item, i) => (
                        item.data ? ( // Only make clickable if data exists
                            <Anchor 
                                key={i} 
                                href={item.data} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Image className={form.image} src={item.icon} w={'3rem'} style={{ cursor: 'pointer' }} />
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