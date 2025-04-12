import { Container,Text,Flex, Image, Center } from "@mantine/core"
import image from '../../assets/images/profile.jpg'
import CircleProfileMob from "./CircleProfileMob"
import { useMemo, useState , useEffect} from "react"
import Stack from "../FramerMotion/Stack"
import MiniCircles from "./MiniCircles"
const CardMob = ({isScrolled}) => {

    const[show,setShow]=useState(false);
        useEffect(()=>{
            setTimeout(()=>{
                if(isScrolled==true){
                    setShow(true);
                }
            },2000)
        },[isScrolled])
    
     const circles = useMemo(()=>[
            {id:1, info:'IT' ,short:'Study' }, 
            { id:2,  info:'Syria-Homs' ,short:'Address'},
            { id:3,  info:'24 years' ,short:'Age'},
            { id:4,  info:'Homs-University' ,short:'University'},
            { id:5, info:'mustafa@gmail.com' ,short:'E-mail'},
            { id:6,  info:'+963 9819283222' ,short:'Phone'},
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
            
        <Center mr={'lg'} style={{opacity:show ? 1:0,transition:'all 0.3s'}}>
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
    randomRotation={true}
     sensitivity={180}
     sendToBackOnClick={false}
     cardDimensions={{ width: '17rem', height: '17rem' }}
     cardsData={circles}
     animationConfig={{ stiffness: 260, damping: 20 }}
/>
          </Center>

        </>
    )
}
export default CardMob