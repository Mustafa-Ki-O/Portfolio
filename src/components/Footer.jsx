import { Group, Text } from "@mantine/core";
import footer from '../assets/css/footer.module.css';

const Footer = () => {
    return (
        <Group 
            w={'100%'} 
            pos={'relative'} 
            h={'10rem'} 
            bg={'#08454C'} 
            justify="center"
            style={{ overflow: 'hidden' }}  // Added to prevent horizontal scroll
        >
            <div className={footer.circle}></div>
            <Text c='#fff' fz={'1.3rem'}> ... THANK YOU ... </Text>
        </Group>
    );
}

export default Footer;