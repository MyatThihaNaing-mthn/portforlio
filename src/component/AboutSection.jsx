import { motion, useAnimation } from "framer-motion";
import { forwardRef, useEffect, useState } from "react";
import profileImg from '../assets/me.png';
// import PropTypes from 'prop-types';
import { useInView } from "react-intersection-observer";

const AboutSection = forwardRef((props, ref) => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [aboutRef, aboutInView] = useInView({
        threshold: 0.2
    });

    const controls = useAnimation();
    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    useEffect(() => {
        if(aboutInView){
            setIsActive(true)
        }
    }, [aboutInView])

    useEffect(() => {
        if (isActive && !hasAnimated) {
            controls.start('visible')
            setHasAnimated(true)
        }
    }, [isActive, hasAnimated, controls])


    return (
        <section className=" about  max-w-about-max flex flex-col items-start
                 mx-auto my-0"
                 id="about"
            ref={(node) => {
                // Assign the ref from useInView
                aboutRef(node);
                // Assign the forwarded ref
                if (typeof ref === 'function') ref(node);
                else if (ref) ref.current = node;
            }}>
            <h2 className=" section-heading text-lightest-slate">About Me</h2>
            <motion.div
                variants={contentVariants}
                initial="hidden"
                animate={controls}>
                <div className=" inner">
                    <div className=" about-me-txt block">
                        <div>
                            <p>
                                Hello! My name is Myat Thiha Naing, a passionate software engineer who loves to craft things that can solve the real world challenges.
                                I specialize in full-stack development with hands-on experience in technologies like React, Spring Boot, Firebase, and Redux Toolkit, and I enjoy crafting efficient, scalable applications. 
                            </p>
                            <p>
                                Previously, I worked as an Android security engineer at <a href="https://www.v-key.com/" rel="noopener noreferer" className=" cursor-pointer text-green">V-Key Pte Ltd</a>. These days, my focus is on developing accessible web applications that provide seamless user experiences. I’m passionate about building software that not only looks great but is also optimized for performance and accessibility.
                            </p>
                            <p>Here are a few technologies I’ve been working with recently:</p>
                        </div>
                        <ul className="skills-list">
                            <li>Spring-boot</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Docker</li>
                            <li>ASP.NET</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                    <div className=" about-me-img">
                        <div className=" img-wrapper">
                            <img src={profileImg} className=" about-img w-full" alt="profile image"/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
})

AboutSection.displayName = "AboutSection"
// AboutSection.propTypes = {
//     isActive: PropTypes.bool.isRequired,
// };
export default AboutSection