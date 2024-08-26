import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function HeroAnimation({onAnimationComplete}){
    const svgVariants = {
        visible: { opacity: 1, scale: 1}, 
        exit: { opacity: 0, scale: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    };
    const pathVariants = {
        hidden: { opacity: 0, pathLength: 0 },
        visible: { opacity: 1, pathLength: 1, transition: { duration: 1 } }
    }
    const mPathVariants = {
        hidden: { opacity: 0, pathLength: 0 },
        visible: { opacity: 1, pathLength: 1, transition: { duration: 1, delay: 1 } }
    }
    return(
        <div className=" w-full h-screen flex items-center justify-center">
            <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    variants={svgVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onAnimationComplete={onAnimationComplete}
                >
                    <motion.path
                        fill="none"
                        stroke="#64ffda"
                        strokeWidth="4"
                        strokeLinecap="round"
                        d="M 50 10 L 80 30 L 80 70 L 50 90 L 20 70 L 20 30 Z"
                        variants={pathVariants}
                    />
                    <motion.path
                        fill="none" 
                        stroke="white" 
                        stroke-width="4"
                        variants={mPathVariants}
                        d="M 35 65 L 35 35 L 50 50 L 65 35 L 65 65"
                    />
                </motion.svg>
        </div>
    )
}

HeroAnimation.propTypes = {
    onAnimationComplete: PropTypes.func.isRequired
};