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
import { useTranslation } from 'react-i18next';
import { useMantineColorScheme } from '@mantine/core';
const Card =({isScrolled,images}) => {
    // const { colorScheme } = useMantineColorScheme();
    // const borderColor = colorScheme === 'dark' ? '#16AABB'  :  '#08454C';
    const {t,i18n} = useTranslation();
    const [show,setShow] = useState(false);
    const [currentCircleIndex, setCurrentCircleIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null); // Track which circle is active


    const [showPuppels,setShowPuppels] = useState(false);

    const circles = useMemo(()=>[
        
            { 
              short: t('Study'), 
              info: t('IT'),
              className: 'e1',
              to: { x: 20, y: -2 },
              icon: education 
            },
            { 
              short: t('Address'), 
              info: t('Syria-Homs'),
              className: 'e2',
              to: { x: 23, y: 12 },
              icon: address
            },
            { 
              short: t('Age'), 
              info: t('24 years'),
              className: 'e3',
              to: { x: 9, y: 22 },
              icon: age 
            },
            { 
              short: t('University'), 
              info: t('Homs-University'),
              className: 'e4',
              to: { x: -9, y: 22 },
              icon: university 
            },
            { 
              short: t('E-mail'), 
              info: 'mustafa@gmail.com',
              className: 'e5',
              to: { x: -23, y: 12 },
              icon: email
            },
            { 
              short: t('Phone'), 
              info: '+963 9819283222',
              className: 'e6',
              to: { x: -20, y: -2 },
              icon: phone 
            }

    ],[t, i18n.language]) 

    useEffect(()=>{
        setTimeout(()=>{
            if(isScrolled==true){
                setShow(true);
            }
        },2000)
    },[isScrolled])

    useEffect(()=>{
        if(show===true){
            setTimeout(()=>{
                setShowPuppels(true)
            },1500)
            
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

    // console.log(active.activity,active.keyC);

    return(
        <>
        <Container  className={show ? card.con :''} fluid p={0} m={0} style={{zIndex:2}}>
        <Center>
            {show && (
            <Stack gap={30} pos={'relative'}>
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
            <Text size='xl' c='#fff' tt='uppercase' className={card.name}>Moustafa Hasan</Text>
            </Stack>
            )}
        </Center>   
        </Container>
       

        
        </>
    )


}
export default Card;