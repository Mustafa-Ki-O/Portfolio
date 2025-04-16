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
            
          }

          .skill-content {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            cursor:pointer;
          }

          .skill-text, .skill-image {
            position: absolute;
            min-width:2rem;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            
          }

          .skill-text {
            transform: rotateY(0deg);
          }

          .skill-image {
            
            transform: rotateY(180deg);
          }

          .active .skill-content {
            transform: rotateY(180deg);
          }
        `}
      </style>

      <Grid.Col span={{ base: 12, lg: 4 ,md :6 ,sm:6 }} mb={'4rem'} className={`skill-container ${active ? 'active' : ''}`}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          onTouchStart={() => setActive(!active)}>
        {/* <div 
          
        > */}
          <div className="skill-content">
            <div className="skill-text">
              <Text fz={{base:'2.5rem',md:'3rem'}} fw={'bolder'} c={'#16aabb'}>
                {name}
              </Text>
            </div>
            <div className="skill-image">
              <Image 
                src={image} 
                alt={name}
              />
            </div>
          </div>
        {/* </div> */}
      </Grid.Col>
    </>
  );
};

export default SkillCard;