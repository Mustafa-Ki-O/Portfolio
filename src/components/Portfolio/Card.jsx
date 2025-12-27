import image from '../../assets/images/profile.jpg'
import { Center, Container, Image, Title ,Text,Stack} from '@mantine/core';
import card from '../../assets/css/card.module.css'
import { useEffect, useState,useMemo } from 'react';
import CircleProfile from './CircleProfile';
import phone from '../../assets/vectors/Phone.svg'
import university from '../../assets/vectors/University.svg'
import age from  '../../assets/vectors/Age.svg'
import email from  '../../assets/vectors/Email.svg'
import education from  '../../assets/vectors/Education.svg'
import address from  '../../assets/vectors/Location.svg'
import phonem from '../../assets/vectors/Phonem.svg'
import universitym from '../../assets/vectors/Universitym.svg'
import agem from  '../../assets/vectors/Agem.svg'
import emailm from  '../../assets/vectors/Emailm.svg'
import educationm from  '../../assets/vectors/Educationm.svg'
import addressm from  '../../assets/vectors/Locationm.svg'
import { useTranslation } from 'react-i18next';
import { useMantineColorScheme } from '@mantine/core';
const Card =({isScrolled,images}) => {
    
    const { colorScheme } = useMantineColorScheme();
    
    const {t,i18n} = useTranslation();
    const [show,setShow] = useState(false);
    const [currentCircleIndex, setCurrentCircleIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null); 


    const [showPuppels,setShowPuppels] = useState(false);

    const circles = useMemo(()=>[
        
            { 
              short: t('Study'), 
              info: t('IT'),
              className: 'e1',
              to: { x: 22, y: -4 },
              icon: colorScheme === 'dark'? educationm:education ,
              
            },
            { 
              short: t('Address'), 
              info: t('Syria-Homs'),
              className: 'e2',
              to: { x: 25, y: 14 },
              icon: colorScheme === 'dark'? addressm: address
            },
            { 
              short: t('Age'), 
              info: t('23 years'),
              className: 'e3',
              to: { x: 11, y: 24 },
              icon: colorScheme === 'dark'? agem: age 
            },
            { 
              short: t('University'), 
              info: t('Homs-University'),
              className: 'e4',
              to: { x: -11, y: 24 },
              icon: colorScheme === 'dark'? universitym: university 
            },
            { 
              short: t('E-mail'), 
              info: 'mustafahasn002 @gmail.com',
              className: 'e5',
              to: { x: -25, y: 14 },
              icon: colorScheme === 'dark'? emailm : email
            },
            { 
              short: t('Phone'), 
              info: '+963 981554251',
              className: 'e6',
              to: { x: -22, y: -4 },
              icon: colorScheme === 'dark'? phonem: phone 
            }

    ],[t, i18n.language]) 

    useEffect(()=>{
        setTimeout(()=>{
            if(isScrolled==true){
                setShow(true);
            }
        },900)
    },[isScrolled])

    useEffect(()=>{
        if(show===true){
            setTimeout(()=>{
                setShowPuppels(true)
            },900)
            
        }
    },[show])

    useEffect(() => {
        if (showPuppels) {
            const interval = setInterval(() => {
                setCurrentCircleIndex((prevIndex) => {
                    if (prevIndex < circles.length - 1) {
                        return prevIndex + 1;
                    } else {
                        clearInterval(interval); 
                        return prevIndex; 
                    }
                });
            }, 700); 

            return () => clearInterval(interval); 
        }
    }, [showPuppels]);


    return(
        <>
        <Container  className={show ? card.con :''} fluid p={0} m={0} style={{zIndex:2}}>
        <Center>
            {show && (
            <Stack gap={'2vw'} pos={'relative'}>
               {activeIndex !== null ? (
                  <Text size='lg' c={'white'} ta={'center'} className={card.profile}  >
                     {circles[activeIndex].info}
                  </Text>
                ):(
                  <Image src={images[1]} className={card.img}  />
                )}
            
            {showPuppels && (
                            <>
                                {circles.slice(0, currentCircleIndex + 1).map((circle, index) => (
                                    <CircleProfile
                                    setActive={setActiveIndex}
                                    activeIndex={activeIndex}
                                    index={index} 
                                    key={index} short={circle.short} className={circle.className} info='' to={circle.to} icon={circle.icon}/>
                                ))}
                               
                            </>
                        )}
            <Text size='xl' c='#fff' tt='uppercase' className={card.name}>Mustafa Hasan</Text>
            </Stack>
            )}
        </Center>   
        </Container>
       

        
        </>
    )


}
export default Card;