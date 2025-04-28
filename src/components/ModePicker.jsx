import sun from '../assets/vectors/Sun.svg'
import sun1 from '../assets/vectors/Sun1.svg'
import moon from '../assets/vectors/Moon.svg'
import moon1 from '../assets/vectors/Moon1.svg'
import { useEffect, useState } from 'react'
import { Image } from '@mantine/core'
import nav from '../assets/css/nav.module.css';

import { useMantineColorScheme } from '@mantine/core';
const ModePicker = ({mob}) => {
    // const [isDayMode, setIsDayMode] = useState(true)
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const [selectedImg, setSelectedImg] = useState('');

  useEffect(() => {
    if (mob) {
      setSelectedImg(colorScheme === 'dark' ? moon1 : sun1);
    } else {
      setSelectedImg(colorScheme === 'dark' ? moon : sun);
    }
  }, [mob, colorScheme]);

    return (
        <Image 
            mt={3}
            className={nav.mode}
            src={selectedImg} 
            w={{base:20,md:25}} 
            onClick={() => toggleColorScheme()}
            style={{ cursor: 'pointer' }}
        />
    )
}

export default ModePicker