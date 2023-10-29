import React, {useRef, useEffect} from 'react'
import { inView, motion, useAnimation, useInView } from 'framer-motion'

const FadeIn = ({children, delay, direction, fullWidth, padding}) => {
    const ref = useRef();
    
    const isInView = useInView(ref, {once: true});
    const controls = useAnimation();

    useEffect(() => {
        if(inView){
            controls.start('visible');
        }


    }, [isInView, controls])


    return (
        <div ref={ref} className={`${fullWidth? "w-full" : "w-auto"} ${padding ? 'px-10' : 'px-0'} flex items-center justify-center`}>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        x: direction === "right"? -100 : direction === "left" ? 100 : 0,
                        y: direction === "up"? 100 : direction === "down" ? -100 : 0,
                    },
                    visible: {
                        opacity:1,
                        x:0,
                        y:0
                    } 
                }}
                initial="hidden"
                animate={controls}
                transition={{
                    duration: 1.25,
                    type: "tween",
                    delay: delay,
                    ease: [0.5, 0.25, 0.25, 0.75],
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default FadeIn