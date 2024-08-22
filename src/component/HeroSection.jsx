import { motion } from "framer-motion";
import React from "react";

const HeroSection = React.forwardRef(({ isActive }, ref) => {
    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
    };

    return (
        <section ref={ref} className="hero min-h-screen flex items-center justify-center">
            <motion.div
                variants={contentVariants}
                initial="hidden"
                animate={isActive? "visible" : "hidden"}>
                <h1>Welcome to the Main Content</h1>
                <p>This is the content that shows up after the SVG animation.</p>
            </motion.div>
        </section>
    );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
