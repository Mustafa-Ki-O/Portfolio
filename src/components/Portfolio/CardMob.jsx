import { Container,Text,Flex, Image, Center } from "@mantine/core"
import image from '../../assets/images/profile.jpg'
import CircleProfileMob from "./CircleProfileMob"
import { useMemo, useState , useEffect} from "react"
import Stack from "../FramerMotion/Stack"
import MiniCircles from "./MiniCircles"
import phone from '../../assets/vectors/Phone.svg'
import university from '../../assets/vectors/University.svg'
import age from  '../../assets/vectors/Age.svg'
import email from  '../../assets/vectors/Email.svg'
import education from  '../../assets/vectors/Education.svg'
import address from  '../../assets/vectors/Location.svg'
import { useTranslation } from "react-i18next"


const CardMob = ({isScrolled}) => {
 const {t,i18n} = useTranslation();
    const[show,setShow]=useState(false);
        useEffect(()=>{
            setTimeout(()=>{
                if(isScrolled==true){
                    setShow(true);
                }
            },2000)
        },[isScrolled])
    
     const circles = useMemo(()=>[
            {id:1, info:t('IT') ,short:t('Study'),icon:education }, 
            { id:2,  info:t('Syria-Homs') ,short:t('Address') ,icon:address},
            { id:3,  info:t('23 years') ,short:t('Age'),icon:age},
            { id:4,  info:t('Homs-University') ,short:t('University'),icon:university},
            { id:5, info:'mustafa@gmail.com' ,short:t('E-mail'),icon:email},
            { id:6,  info:'+963 981xxxxxx' ,short:t('Phone'),icon:phone},
        ],[]) 

        const circles2 = [
            {
              className: 'c1',
              duration: 7,
              translateX: 10,
              translateY: 7
            },
            {
              className: 'c2',
              duration: 5,
              translateX: -10,
              translateY: -3
            },
            {
              className: 'c3',
              duration: 5,
              translateX: -17,
              translateY: 0
            },
            {
              className: 'c4',
              duration: 6,
              translateX: 15,
              translateY: 0
            },
            {
              className: 'c5',
              duration: 5,
              translateX: 10,
              translateY: -8
            },
            {
              className: 'c6',
              duration: 5,
              translateX: -8,
              translateY: -16
            },
            {
              className: 'c7',
              duration: 5,
              translateX: -10,
              translateY: -15
            },
            {
              className: 'c8',
              duration:6,
              translateX: 1,
              translateY: -14
            },
            {
                className: 'c9',
                duration:4,
                translateX: 13,
                translateY: -14
              },
              {
                className: 'c10',
                duration:5,
                translateX: 0,
                translateY: 18
              },
              {
                className: 'c11',
                duration:5,
                translateX: 1,
                translateY: 18
              },
              {
                className: 'c12',
                duration:6,
                translateX: 1,
                translateY: 20
              },
              {
                className: 'c13',
                duration:8,
                translateX: -4,
                translateY: 20
              },
              {
                className: 'c14',
                duration:7,
                translateX: -8,
                translateY: 20
              },
          ];

    return(
        <>
            
        <Center mr={'lg'} style={{opacity:show ? 1:0,transition:'all 0.3s',position: 'relative',
           overflow: 'hidden',minHeight:'50vh'}}>
            {circles2.map((circle,index)=>(
                <MiniCircles
                key={index}
                className={circle.className}
                duration={circle.duration}
                activeIndex={1}
                translateX={circle.translateX}
                translateY={circle.translateY}
                color={'#08454C'} />
            ))}
     <Stack
    randomRotation={false}
     sensitivity={180}
     sendToBackOnClick={false}
     cardDimensions={{ width: '15rem', height: '15rem' }}
     cardsData={circles}
     animationConfig={{ stiffness: 260, damping: 20 }}
/>
          </Center>

        </>
    )
}
export default CardMob