import { useEffect, useState } from "react";
import { Flex, Image, Text } from "@mantine/core";
import Age from '../../assets/vectors/Age.svg'
import MiniCircles from "./MiniCircles";

const CircleProfileMob = ({className, info}) => {
    // const isActive = activeIndex === index;
    // useEffect(()=>{
    //     console.log(activeIndex)
    // },[activeIndex])

    // const circles = [
    //     {
    //       className: 'c1',
    //       duration: 4,
    //       translateX: 10,
    //       translateY: 15
    //     },
    //     {
    //       className: 'c2',
    //       duration: 5,
    //       translateX: -10,
    //       translateY: 14
    //     },
    //     {
    //       className: 'c3',
    //       duration: 4,
    //       translateX: -10,
    //       translateY: 12.5
    //     },
    //     {
    //       className: 'c4',
    //       duration: 6,
    //       translateX: 8,
    //       translateY: 12
    //     },
    //     {
    //       className: 'c5',
    //       duration: 5,
    //       translateX: 10,
    //       translateY: -8
    //     },
    //     {
    //       className: 'c6',
    //       duration: 3,
    //       translateX: -8,
    //       translateY: -6
    //     },
    //     {
    //       className: 'c7',
    //       duration: 4,
    //       translateX: -13,
    //       translateY: 5
    //     },
    //     {
    //       className: 'c8',
    //       duration:6,
    //       translateX: 13,
    //       translateY: 4
    //     },
    //     {
    //         className: 'c9',
    //         duration:8,
    //         translateX: 13,
    //         translateY: -4
    //       },
    //       {
    //         className: 'c10',
    //         duration:5,
    //         translateX: 0,
    //         translateY: 10
    //       }
    //   ];

    return (
        <>
            <style>
                {`
                @keyframes show-${className} {
                    from {
                        transform: translate(-5rem, 0) scaleX(1);
                        opacity:0;
                    }
                    to {
                        transform: translate(0rem , 0rem ) scaleX(1);
                        opacity:1;
                        max-width:100%;
                        border-radius: 40px;
                    }
                }



                .circleProfileMob-${className} {
                    border-radius: 50%;
                    background-color: #fff;
                    overflow: hidden;
                    border: 2px solid #08454C;
                    width: auto;
                    max-width: 5rem;
                    height: 3rem;
                    
                    transform: translate(-50%, -50%) scaleX(1);
                    align-content: center;
                    z-index: 2;
                    white-space: nowrap;
                    animation: ${ `show-${className}`} 1.5s ease-in-out forwards;
                    transition: all 0.5s ease-out;
                }

            
                `}
            </style>

            {/* {circles.map((circle,index)=>(
                <MiniCircles
                key={index}
                className={circle.className}
                duration={circle.duration}
                activeIndex={activeIndex}
                translateX={circle.translateX}
                translateY={circle.translateY} />
            ))} */}
            <Flex
                align={'center'}
                gap={'3rem'}
                justify={'flex-start'}
                
                className={`circleProfileMob-${className}`}
            >
                
                <Image ml={22} src={Age} w={20} />
                {/* <Text c={'#08454C'} size="lg">{short}</Text>    */}
                <Text c={'#08454C'} size="sm">{info}</Text>   
            </Flex>
        </>
    );
};

export default CircleProfileMob;