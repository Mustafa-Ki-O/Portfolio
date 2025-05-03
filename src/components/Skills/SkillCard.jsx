import { Flex, Grid, GridCol, Group, Text, Image } from "@mantine/core";
import { useState } from "react";

const SkillCard = ({ name, image }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <style>
        {`
          .skill-container {
          
            position: relative;
            width: 100%;
            height: 100%;
            perspective: 1000px;
            z-index:10;
            
          }

          .skill-content {
            position: relative;
            display : flex;
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            cursor: pointer;
          }

          .skill-text, .skill-image {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
             z-index:10;
          }

          .skill-text {
            transform: rotateY(180deg);
          }

          .skill-image {

            transform: rotateY(0deg);
          }
             .skill-image img{
             width:auto;
             height:auto;
             }

          .active .skill-content {
            transform: rotateY(180deg);
          }


          .skill-text {
            animation: shining 4s infinite 1s ease-in forwards;
          }

          @keyframes shining {
            0% {
              filter: drop-shadow(0 0 0 #fff);
            }
            50% {
              filter: drop-shadow(0 0 0.7vw #fff) drop-shadow(0 0 1.4vw #16aabb90);
            }
            100% {
              filter: drop-shadow(0 0 0 #16aabb);
            }
          }
        `}
      </style>

      <Grid.Col 
        span={{ base: 12, lg: 3, md: 6, sm: 6 }} 
        mb={{base:'5rem',md:'7vw'}} 
        // h={{ base: '200px', md: '5vw' }} 
        className={`skill-container ${active ? 'active' : ''}`}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onTouchStart={() => setActive(!active)}
      >
        <div className="skill-content">
          <div className="skill-text">
            <Text fz={{base:'2.5rem',md:'4vw'}} fw={'bolder'} c={'#16aabb'}>
              {name}
            </Text>
          </div>
          <div  className="skill-image">
            <Image 
              src={image} 
              alt={name}
              miw={{base:'auto',md:'7vw'}}
            />
          </div>
        </div>
      </Grid.Col>
    </>
  );
};

export default SkillCard;