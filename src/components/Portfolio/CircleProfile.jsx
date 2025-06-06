import { Flex, Image, Text } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import MiniCircles from "./MiniCircles";

const CircleProfile = ({ short, to, className, setActive, index, activeIndex,icon }) => {
    const isActive = activeIndex === index;
    const { colorScheme } = useMantineColorScheme();
    const borderColor = colorScheme === 'dark' ?  '#08454C'  :  '#08454C';
    const bgColor = colorScheme === 'dark' ? '#242424'  :  '#fff';
    const color = colorScheme === 'dark' ? '#fff'  :  '#08454C';
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
                        transform: translate(calc(${to.x}vw - 50%), calc(${to.y}vw - 50%)) scaleX(1);
                    }
                }

                @keyframes hide-${className} {
                from {
                        transform: translate(calc(${to.x}vw - 50%), calc(${to.y}vw - 50%)) scaleX(1);
                    }
                    to {
                        transform: translate(-50%, -50%) scaleX(1);
                    }
                }

                .circleP.circleProfile-${className} {
                    border-radius: 50%;
                    background-color: ${bgColor} ;
                    overflow: hidden;
                    border: 0.3vw solid ${borderColor};
                    width: auto;
                    max-width: 6vw;
                    height: 6vw;
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

            
              .circleP.circleProfile-${className}:hover {
                    border-radius: 8vw;
                    padding-right: 2vw;
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
                gap={'2vw'}
                onMouseEnter={() => setTimeout(()=>{
                    setActive(index)
                },200)}
                onMouseLeave={() => setTimeout(()=>{
                  setActive(null)
                },200)}
                onTouchStart={() => setActive(index)}
                onTouchEnd={() => setActive(null)}
                className={`circleP circleProfile-${className}`}
            >
                
                <Image ml={'1.7vw'} src={icon} w={'2vw'} />
                <Text c={color} fz={'1.5vw'}>{short}</Text>    
            </Flex>
        </>
    );
};

export default CircleProfile;