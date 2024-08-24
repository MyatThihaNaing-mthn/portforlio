import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

const HeroSection = React.forwardRef(({ isActive }, ref) => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const controls = useAnimation();

    const h1Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
    };
    const h2Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
    };
    const h3Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } },
    };
    const paragraphVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } },
    };
    //TODO make wave gesture
    const waveVariants = {
        animate: { 
            rotate: [0, -15, 15, -15, 0],
            scale: [1, 1.5, 1.5, 1.5, 1],
            transition: { 
                duration: 1, 
                repeat: 1, 
                repeatType: "loop",
                delay: 1
            }
        }
    };

    useEffect(()=> {
        if(isActive && !hasAnimated){
            controls.start('visible')
            setHasAnimated(true)
        }
    },[hasAnimated, isActive, controls])
   
    return (
        <section ref={ref} className="hero min-h-screen h-screen max-w-section-max p-0 flex flex-col mx-auto my-0 items-start justify-center">
            <motion.div
                variants={h1Variants}
                initial="hidden"
                animate={controls}>
                <div>
                    <h1 className=" mb-5 ml-1 text-greeting text-green">
                        <motion.span
                            variants={waveVariants}
                            initial="hidden"
                            animate="animate"
                            style={{ display: 'inline-block', marginRight: '4px' }}>
                            👋 
                        </motion.span>  
                        Hi, my name is
                    </h1>
                </div>
            </motion.div>

            <motion.div
                variants={h2Variants}
                initial="hidden"
                animate={controls}>
                <div>
                    <h2 className=" big-heading mb-5 ml-1 text-2xl text-lightest-slate
                             leading-h2-line-height ">Myat Thiha Naing.</h2>
                </div>
            </motion.div>

            <motion.div
                variants={h3Variants}
                initial="hidden"
                animate={controls}>
                <div>
                    <h3 className=" big-heading mb-5 ml-1 text-2xl text-slate
                         leading-h3-line-height">A Software Engineer.</h3>
                </div>
            </motion.div>

            <motion.div
                variants={paragraphVariants}
                initial="hidden"
                animate={controls}>
                <div>
                    <p className=" mt-5 mb-5 ml-1 text-sm md:text-base text-slate leading-p-line-height
                            max-w-p-width">
                        I am a passionate software engineer, deeply committed to designing and implementing digital solutions that address real-world challenges with creativity and precision.
                    </p>
                </div>
            </motion.div>

        </section>
    );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
