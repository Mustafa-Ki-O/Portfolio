import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./TiltedCard.css";
import { Anchor, Flex, Stack, Text ,Image, Group, Tooltip } from "@mantine/core";
import web from '../../assets/vectors/Website.svg'
import done from '../../assets/vectors/done.svg'
import spinner from '../../assets/vectors/Spinner.svg'
const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  info='',
  url='',
  lang='',
  state='',
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null);
 const [ active,setActive] = useState(false)
  const x = useMotionValue();
  const y = useMotionValue();
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    setActive(true)
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    setActive(false);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className={"tilted-card-figure"}
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="tilted-card-mobile-alert">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="tilted-card-inner"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        
      
        />

      <motion.div
        
        initial={{ 
          scaleY: 0, 
          opacity: 0,
          y: "-100%",
          transformOrigin: "top center"
        }} 
        animate={{
          scaleY: active ? 1 : 0,
          opacity: active ? 1 : 0,
          y: active ? "0%" : "0%",
          transformOrigin: "top center"
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#16aabb",
          borderRadius: "25px",
          overflow: "hidden" 
        }}
      >
        <Stack justify="space-between" p={20} >
          <Flex justify={'space-between'}>

            <Tooltip label={state}>
                <Image src={state==='Developed'?done:spinner} w={25} />
            </Tooltip>
                   
        <Anchor
          ta={'start'}
          href={url} 
          target="_blank"
          fz="0.6rem" 
          c="#fff"
          underline="hover"
          display={'flex'}
          style={{justifyContent:'center',alignItems:'center'}}
        >
          Visit
          <Image src={web} w={20} ml={5}/>
        </Anchor>
          </Flex>
        
        <Text ml={10} className="pointer" ta={'start'} fz={'0.7rem'} c={'#fff'}>
          {info}
        </Text>
       
        <Text ml={10} className="pointer" ta={'start'} fz={'0.7rem'} c={'#fff'}>
          {lang}
        </Text>
        </Stack>
        
      </motion.div>
       {displayOverlayContent && overlayContent && (
         <motion.div className="tilted-card-overlay" onMouseEnter={()=>setActive(false)} onMouseLeave={()=>setActive(null)}>
           {overlayContent}
         </motion.div>
       )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="tilted-card-caption"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
          
        >
          {captionText}
        </motion.figcaption>
      )}

    </figure>
    
  );
}
