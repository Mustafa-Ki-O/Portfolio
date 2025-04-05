import { useEffect, useState } from "react";
import { Flex, Image, Text } from "@mantine/core";
import Age from '../../assets/vectors/Age.svg'
const CircleProfile = ({ short, to, className ,setActive,index}) => {



    return (
        <>
            <style>
                {`
                @keyframes show-${className} {
                    from {
                        transform: translate(-50%, -50%) scaleX(1); /* Start from the center of the viewport */
                    }
                    to {
                        transform: translate(calc(${to.x}rem - 50%), calc(${to.y}rem - 50%)) scaleX(1); /* Move to the target position */
                    }
                }

  .circleProfile-${className} {
                    
                    border-radius: 50%;
                    background-color: #fff;
                    color: #08454C;
                    overflow:hidden;
                    border: 4px solid #08454C;
                    width: 5rem;
                    height: 5rem;
                    position: absolute;
                    left: 50%; /* Center horizontally */
                    top: 20%;  /* Center vertically */
                    transform: translate(-50%, -50%) scaleX(1); /* Center the circle */
                    align-content: center;
                    z-index: 2;
                    animation: show-${className} 0.5s ease-in-out forwards;
                    transition: all 1s; 
                }
                    .circleProfile-${className}:hover{
                       border-radius:60px;
                       width:240px;
                       transition: all 1s; 
                    }
                `}
            </style>
            <Flex 
            // justify={'space-between'}
            align={'center'}
            gap={40}
              onMouseEnter={() => setActive({activity:true,keyC:index})}
              onMouseLeave={() => setActive({activity:false,keyC:index})}
              onTouchStart={() => setActive({activity:true,keyC:index})}
              onTouchEnd={() => setActive({activity:false,keyC:index})}
            className={`circleProfile-${className}`}>

                <Image ml={22} src={Age} w={30} />
                <Text>
                    {short}
                </Text>
            </Flex>
        </>
    );
};

export default CircleProfile;