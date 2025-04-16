import { useEffect, useState } from "react";
import { Flex, Image, Text } from "@mantine/core";
import Age from '../../assets/vectors/Age.svg'
import MiniCircles from "./MiniCircles";

const CircleProfileMob = ({className, info}) => {
   
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