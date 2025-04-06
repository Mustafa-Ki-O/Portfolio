import { useEffect, useState } from "react";
import { Flex, Image, Text } from "@mantine/core";
import Age from '../../assets/vectors/Age.svg'

const CircleProfile = ({ short, to, className, setActive, index, activeIndex }) => {
    const isActive = activeIndex === index;

    return (
        <>
            <style>
                {`
                @keyframes show-${className} {
                    from {
                        transform: translate(-50%, -50%) scaleX(1);
                    }
                    to {
                        transform: translate(calc(${to.x}rem - 50%), calc(${to.y}rem - 50%)) scaleX(1);
                    }
                }
                    @keyframes show-miniCircle1 {
                    from {
                        transform: translate(-50%, -50%) scaleX(1);
                    }
                    to {
                        transform: translate(calc(11rem - 50%), calc(8rem - 50%)) scaleX(1);
                    }
                }
                    @keyframes hide-miniCircle1 {
                     from {
                        transform: translate(calc(11rem - 50%), calc(8rem - 50%)) scaleX(1);
                    }
                    to {
                        transform: translate(-50%, -50%) scaleX(1);
                    }
                   
                }
                    @keyframes show-miniCircle2 {
                    from {
                        transform: translate(-50%, -50%) scaleX(1);
                    }
                    to {
                        transform: translate(calc(10rem - 50%), calc(-4rem - 50%)) scaleX(1);
                    }
                }
                    @keyframes hide-miniCircle2 {
                     from {
                        transform: translate(calc(10rem - 50%), calc(-4rem - 50%)) scaleX(1);
                    }
                    to {
                        transform: translate(-50%, -50%) scaleX(1);
                    }
                   
                }
                    @keyframes show-miniCircle3 {
                    from {
                        transform: translate(-50%, -50%) scaleX(1);
                    }
                    to {
                        transform: translate(calc(9rem - 50%), calc(9rem - 50%)) scaleX(1) ;
                    }
                }
                    @keyframes hide-miniCircle3 {
                     from {
                        transform: translate(calc(9rem - 50%), calc(9rem - 50%)) scaleX(1);
                    }
                    to {
                        transform: translate(-50%, -50%) scaleX(1);

                    }
                   
                }
                    @keyframes show-miniCircle4 {
                    from {
                        transform: translate(-50%, -50%) scaleX(1);
                    }
                    to {
                        transform: translate(calc(-12rem - 50%), calc(9rem - 50%)) scaleX(1);
                    }
                }
                    @keyframes hide-miniCircle4 {
                     from {
                        transform: translate(calc(-12rem - 50%), calc(9rem - 50%)) scaleX(1);
                    }
                    to {
                        transform: translate(-50%, -50%) scaleX(1);
                    }
                   
                }
  
                @keyframes hide-${className} {
                from {
                        transform: translate(calc(${to.x}rem - 50%), calc(${to.y}rem - 50%)) scaleX(1);
                    }
                    to {
                        transform: translate(-50%, -50%) scaleX(1);
                    }
                }

                .circleProfile-${className} {
                    border-radius: 50%;
                    background-color: #fff;
                    color: #08454C;
                    overflow: hidden;
                    border: 4px solid #08454C;
                    width: auto;
                    max-width: 5rem;
                    height: 5rem;
                    position: absolute;
                    left: 50%;
                    top: 20%;
                    transform: translate(-50%, -50%) scaleX(1);
                    align-content: center;
                    z-index: 2;
                    white-space: nowrap;
                    animation: ${isActive ? `show-${className}` : activeIndex !== null ? `hide-${className}` : `show-${className}`} 0.5s ease-in-out forwards;
                    transition: all 0.5s ease-out;
                }

            
                .circleProfile-${className}:hover {
                    border-radius: 40px;
                    padding-right: 2rem;
                    max-width: 100%;
                    transition: all 0.6s ease-in;
                }
                   .miniCircle1 {
                    position: absolute;
                    left: 50%;
                    top: 20%;
                    transform: translate(-50%, -50%);
                    z-index: 2; 
                    display: inline-block;
                    width: 0.5rem;
                    height: 0.5rem;
                    background-color: #fff;
                    border-radius: 50%;
                    animation: ${activeIndex !== null ? `show-miniCircle1` : `hide-miniCircle1`} 0.6s ease-in-out forwards;
                    }
                     .miniCircle2 {
                    position: absolute;
                    left: 50%;
                    top: 20%;
                    transform: translate(-50%, -50%);
                    z-index: 2; 
                    display: inline-block;
                    width: 0.5rem;
                    height: 0.5rem;
                    background-color: #fff;
                    border-radius: 50%;
                    animation: ${activeIndex !== null ? `show-miniCircle2` : `hide-miniCircle2`} 0.6s ease-in-out forwards;
                    }
                     .miniCircle3 {
                    position: absolute;
                    left: 50%;
                    top: 20%;
                    transform: translate(-50%, -50%);
                    z-index: 2; 
                    display: inline-block;
                    width: 0.5rem;
                    height: 0.5rem;
                    background-color: #fff;
                    border-radius: 50%;
                    animation: ${activeIndex !== null ? `show-miniCircle3` : `hide-miniCircle3`} 0.6s ease-in-out forwards;
                    }
                    .miniCircle4 {
                    position: absolute;
                    left: 50%;
                    top: 20%;
                    transform: translate(-50%, -50%);
                    z-index: 2; 
                    display: inline-block;
                    width: 0.5rem;
                    height: 0.5rem;
                    background-color: #fff;
                    border-radius: 50%;
                    animation: ${activeIndex !== null ? `show-miniCircle4` : `hide-miniCircle4`} 0.6s ease-in-out forwards;
                    }
                `}
            </style>
            <div className="miniCircle1"></div>
            <div className="miniCircle2"></div>
            <div className="miniCircle3"></div>
            <div className="miniCircle4"></div>
            <Flex
                align={'center'}
                gap={40}
                onMouseEnter={() => setTimeout(()=>{
                    setActive(index)
                },200)}
                onMouseLeave={() => setTimeout(()=>{
                  setActive(null)
                },200)}
                onTouchStart={() => setActive(index)}
                onTouchEnd={() => setActive(null)}
                className={`circleProfile-${className}`}
            >
                
                <Image ml={22} src={Age} w={30} />
                <Text>{short}</Text>
                
            </Flex>
            <div className="miniCircle1"></div>
        </>
    );
};

export default CircleProfile;