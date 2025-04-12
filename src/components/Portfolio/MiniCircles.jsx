import { useEffect, useState } from "react"

const MiniCircles = ({ duration, translateX, translateY, className, activeIndex,color }) => {
    const [active,setActive] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setActive(true)
        },5000)
    },[])
    
    return (
        <>
            <style>
                {`
                    @keyframes show-miniCircle-${className} {
                        from {
                            transform: translate(-50%, -50%) scaleX(1);
                            opacity:1;
                        }
                        to {
                            transform: translate(calc(${translateX}rem - 50%), calc(${translateY}rem - 50%)) scaleX(1);
                             opacity:0;
                            }
                    }

                    @keyframes hide-miniCircle-${className} {
                        from {
                            transform: translate(calc(${translateX}rem - 50%), calc(${translateY}rem - 50%)) scaleX(1);
                            opacity:0;
                            }
                        to {
                            transform: translate(-50%, -50%) scaleX(1);
                            opacity:1;
                            }
                    }

                    .miniCircle-${className} {
                        position: absolute;
                        left: 50%;
                        top: 40%;
                        transform: translate(-50%, -50%);
                        z-index: 1;  // Changed to 1 to appear behind main circle
                        display: inline-block;
                        width: 8px;
                        height: 8px;
                        background-color: ${color};
                        border-radius: 50%;
                        animation: ${ activeIndex !== null ? `show-miniCircle-${className}` : `hide-miniCircle-${className}` } ${duration}s  infinite ease-in-out backwards;
                    }
                `}
            </style>
            <div className={`miniCircle-${className}`}></div>
        </>
    )
}
export default MiniCircles