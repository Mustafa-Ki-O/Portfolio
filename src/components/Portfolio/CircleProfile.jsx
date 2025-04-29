
import { Flex, Image, Text } from "@mantine/core";

import MiniCircles from "./MiniCircles";

const CircleProfile = ({ short, to, className, setActive, index, activeIndex,icon }) => {
    const isActive = activeIndex === index;

    const circles = [
        {
          className: 'c1',
          duration: 4,
          translateX: 10,
          translateY: 15
        },
        {
          className: 'c2',
          duration: 5,
          translateX: -10,
          translateY: 14
        },
        {
          className: 'c3',
          duration: 4,
          translateX: -10,
          translateY: 12.5
        },
        {
          className: 'c4',
          duration: 6,
          translateX: 8,
          translateY: 12
        },
        {
          className: 'c5',
          duration: 5,
          translateX: 10,
          translateY: -8
        },
        {
          className: 'c6',
          duration: 3,
          translateX: -8,
          translateY: -6
        },
        {
          className: 'c7',
          duration: 4,
          translateX: -13,
          translateY: 5
        },
        {
          className: 'c8',
          duration:6,
          translateX: 13,
          translateY: 4
        },
        {
            className: 'c9',
            duration:8,
            translateX: 13,
            translateY: -4
          },
          {
            className: 'c10',
            duration:5,
            translateX: 0,
            translateY: 10
          }
      ];

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
                    background-color: #fff ;
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

                `}
            </style>

            {circles.map((circle,index)=>(
                <MiniCircles
                key={index}
                className={circle.className}
                duration={circle.duration}
                activeIndex={activeIndex}
                translateX={circle.translateX}
                translateY={circle.translateY}
                color={'white'} />
            ))}
            <Flex
                visibleFrom="md"
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
                
                <Image ml={22} src={icon} w={30} />
                <Text c={'#08454C'} size="lg">{short}</Text>    
            </Flex>
        </>
    );
};

export default CircleProfile;