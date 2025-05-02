import logoLight from '../assets/vectors/fullLogo.svg';
import logoDark from '../assets/vectors/fullLogoDesktop.svg';
import { Center, Image, useMantineColorScheme } from '@mantine/core';
import start from '../assets/css/start.module.css';

const StartP = () => {
    const { colorScheme } = useMantineColorScheme();
    const logo = colorScheme === 'dark' ? logoDark : logoLight;

    return (
        <>
            <Center>
                <Image src={logo} alt='Portfolio-Logo' className={start.logo} w={300} />
            </Center>
        </>
    );
};

export default StartP;