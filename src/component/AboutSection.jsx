import { motion } from "framer-motion";
import React from "react";

const AboutSection = React.forwardRef(({ isActive }, ref) => {
    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
    };

    return (
        <section className=" about min-h-screen flex items-center justify-center"
            ref={ref}>
            <motion.div
                variants={contentVariants}
                initial="hidden"
                animate={isActive? "visible" : "hidden"}>
                <h1>This is about section</h1>
            </motion.div>
        </section>
    )
})

AboutSection.displayName = "AboutSection"
export default AboutSection