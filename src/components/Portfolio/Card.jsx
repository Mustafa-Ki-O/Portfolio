import image from '../../assets/images/profile.jpg'
import { Center, Container, Image, Title ,Text,Stack} from '@mantine/core';
import card from '../../assets/css/card.module.css'
import { useEffect, useState,useMemo } from 'react';
import CircleProfile from './CircleProfile';

const Card =({isScrolled}) => {

    const [show,setShow] = useState(false);
    const [currentCircleIndex, setCurrentCircleIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null); // Track which circle is active

    // const [active,setActive] = useState({
    //     keyC:'',
    //     activity:false
    // })

    const [showPuppels,setShowPuppels] = useState(false);
    // const [keyC,setKeyC] = useState()
    const circles = useMemo(()=>[
        { short: 'Study', info:'IT' ,className: 'e1' , to: { x: 20, y: -2 } }, 
        { short: 'Address', info:'Syria-Homs',className: 'e2' ,to: { x: 23, y: 12 } },
        { short: 'Age', info:'24 years',className: 'e3' ,to: { x: 9, y: 22 } },
        { short: 'University', info:'Homs-University',className: 'e4' ,to: { x: -9, y: 22 } },
        { short: 'Email', info:'mustafa@gmail.com',className: 'e5' ,to: { x: -23, y: 12 } },
        { short: 'Phone', info:'+963 9819283222',className: 'e6' ,to: { x: -20, y: -2 } },
    ],[]) 

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
            <Stack gap={30} >
               {activeIndex !== null ? (
                  <Text size='lg' c={'white'} ta={'center'} className={card.profile}  >
                     {circles[activeIndex].info}
                  </Text>
                ):(
                  <Image src={image} className={card.img}  />
                )}
            
            {showPuppels && (
                            <>
                                {circles.slice(0, currentCircleIndex + 1).map((circle, index) => (
                                    <CircleProfile
                                    setActive={setActiveIndex}
                                    activeIndex={activeIndex}
                                    index={index} 
                                    key={index} short={circle.short} className={circle.className} info='' to={circle.to} />
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