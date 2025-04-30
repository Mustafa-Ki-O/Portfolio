import { Group, Text, Anchor } from "@mantine/core";
import footer from '../assets/css/footer.module.css';
import { useEffect, useRef, useState } from 'react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false);
    const footerRef = useRef(null);
    const circleRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    if (footerRef.current && observerRef.current) {
                        observerRef.current.unobserve(footerRef.current);
                    }


                    setTimeout(() => {
                        setTextVisible(true);
                    }, 570);
                    

                    setTimeout(() => {
                        setIsVisible(false);
                    }, 4000);
                }
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        if (footerRef.current && observerRef.current) {
            observerRef.current.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current && observerRef.current) {
                observerRef.current.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <Group 
            ref={footerRef}
            w={'100%'} 
            pos={'relative'} 
            h={'10rem'} 
            bg={'#08454C'} 
            justify="center"
            style={{ overflow: 'hidden' }}
        >
            <Text fz={'1rem'} className={textVisible ? footer.textShown : footer.textHide}>
                This code is by
                <Anchor 
                    display={'block'}
                    href={'https://www.linkedin.com/in/mustafa-hasan11'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    c={'#fff'}
                    fz={'1.3rem'}
                    mt={'sm'}
                >
                    Moustafa Hassan
                </Anchor>
            </Text>
            <div 
                ref={circleRef}
                className={`${footer.circle} ${isVisible ? footer.visible : ''}`}
            ></div>
        </Group>
    );
}

export default Footer;