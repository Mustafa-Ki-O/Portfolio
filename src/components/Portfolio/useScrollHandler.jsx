// useScrollHandler.js
import { useState, useEffect, useCallback } from 'react';

const useScrollHandler = (threshold = 470) => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    const handleScroll = useCallback(() => {
        const scrollPosition = Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
        );
    
        const buffer = 10;
        const shouldBeScrolled = scrollPosition >= threshold - buffer;
    
        if (shouldBeScrolled !== isScrolled) {
            setIsScrolled(shouldBeScrolled);
        }
    }, [threshold, isScrolled]);
  
    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
  
    return isScrolled;
};

export default useScrollHandler;