import { useEffect, useRef } from "react";

const MiniCircles = ({ duration, translateX, translateY, className, activeIndex, color }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    // Generate unique animation names
    const showAnimationName = `miniCircleShow-${className}`;
    const hideAnimationName = `miniCircleHide-${className}`;

    // Create stylesheet for animations
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    
    const sheet = styleElement.sheet;
    sheet.insertRule(`
      @keyframes ${showAnimationName} {
        from {
          transform: translate(-50%, -50%) scaleX(1);
          opacity: 1;
        }
        to {
          transform: translate(calc(${translateX}rem - 50%), calc(${translateY}rem - 50%)) scaleX(1);
          opacity: 0;
        }
      }
    `, 0);

    sheet.insertRule(`
      @keyframes ${hideAnimationName} {
        from {
          transform: translate(calc(${translateX}rem - 50%), calc(${translateY}rem - 50%)) scaleX(1);
          opacity: 0;
        }
        to {
          transform: translate(-50%, -50%) scaleX(1);
          opacity: 1;
        }
      }
    `, 1);

    // Apply animation
    circle.style.animation = `
      ${activeIndex !== null ? showAnimationName : hideAnimationName} 
      ${duration}s infinite ease-in-out backwards
    `;

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [duration, translateX, translateY, className, activeIndex]);

  return (
    <div 
      ref={circleRef}
      className={`miniCircle-${className}`}
      style={{
        position: 'absolute',
        left: '50%',
        top: '40%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        width: '8px',
        height: '8px',
        backgroundColor: color,
        borderRadius: '50%',
        pointerEvents: 'none',
        isolation: 'isolate' // Prevents z-index conflicts
      }}
    />
  );
};

export default MiniCircles;