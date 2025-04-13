import logo from '../assets/vectors/fullLogo.svg'
import { Center, Image } from '@mantine/core'
import start from '../assets/css/start.module.css';
const Start =()=>{

    return(
        <>
        <Center>
            <Image src={logo} alt='Portfolio-Logo' className={start.logo} w={200}/>
        </Center>
        </>
    )

}
export default Start