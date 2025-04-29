import React, { useState, useEffect } from 'react';
import styles from '../../assets/css/BumbCircle.module.css';
import { useMantineColorScheme } from '@mantine/core';
const BumbCircle = ({ active = false, size = 200, gradientColors = ['#16AABB', '#08454C'] }) => {
  const [hasActivated, setHasActivated] = useState(false);
    const { colorScheme } = useMantineColorScheme();
    gradientColors = colorScheme === 'dark' ? ['#08454C','#08454C']  :  ['#16AABB', '#08454C'];
  useEffect(() => {
    if (active) {
      setHasActivated(true);
    }
  }, [active]);

  const circleStyle = {
    width: `${size}px`,
    height: `${size}px`,
    background: `linear-gradient(270deg, ${gradientColors[0]}, ${gradientColors[1]})`,
  };

  return (
    <span 
      className={`${styles.bumbCircle} ${hasActivated ? styles.active : ''}`}
      style={circleStyle}
    ></span>
  );
};

export default BumbCircle;