import { motion } from "framer-motion";
import React from "react";

const HeroSection = React.forwardRef(({ isActive }, ref) => {
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
        rotate : { rotate: -15}
    }

    return (
        <section ref={ref} className="hero inline-block min-h-screen h-screen max-w-section-max p-0 flex flex-col mx-auto my-0 items-start justify-center">
            <motion.div
                variants={h1Variants}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}>
                <div>
                    <h1 className=" mb-5 ml-1 text-greeting text-green">👋 Hi, my name is</h1>
                </div>
            </motion.div>

            <motion.div
                variants={h2Variants}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}>
                <div>
                    <h2 className=" big-heading mb-5 ml-1 text-2xl text-lightest-slate
                             leading-h2-line-height ">Myat Thiha Naing.</h2>
                </div>
            </motion.div>

            <motion.div
                variants={h3Variants}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}>
                <div>
                    <h3 className=" big-heading mb-5 ml-1 text-2xl text-slate
                         leading-h3-line-height">A Software Engineer.</h3>
                </div>
            </motion.div>

            <motion.div
                variants={paragraphVariants}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}>
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
