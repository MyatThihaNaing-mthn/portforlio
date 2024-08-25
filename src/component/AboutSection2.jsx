import { motion, useAnimation} from "framer-motion";
import { useEffect, useState } from "react";
import profileImg from '../assets/me.png';
import PropTypes from 'prop-types';
import { useInView } from "react-intersection-observer";

const AboutSection2 = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isActive, setActive] = useState(false);

    const [about2Ref, about2InView] = useInView({
        threshold : 0.5,
    });

    const controls = useAnimation();
    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    useEffect(() => {
        if(about2InView){
            setActive(true)
        }
    }, [about2InView])

    useEffect(() => {
        if (isActive && !hasAnimated) {
            controls.start('visible')
            setHasAnimated(true)
        }
    }, [isActive, hasAnimated, controls])


    return (
        <section className=" about  max-w-about-max flex items-start
                 mx-auto my-0"
            ref={about2Ref}>
            <motion.div
                variants={contentVariants}
                initial="hidden"
                animate={controls}>
                <h2 className=" section-heading text-lightest-slate">About Me</h2>
                <div className=" inner">
                    <div className=" about-me-txt block">
                        <div>
                            <p>
                                Hello! My name is Myat Thiha Naing and I enjoy creating things that live on the internet.
                                My interest in web development started back in 2012 when I decided to try editing custom
                                Tumblr themes — turns out hacking together a custom reblog button taught me a
                                lot about HTML & CSS!
                            </p>
                            <p>
                                Fast-forward to today, and I’ve had the privilege of working at an advertising agency,
                                a start-up, a huge corporation, and a student-led design studio. My main focus these days is
                                building accessible, inclusive products and digital experiences at Upstatement for a variety
                                of clients.
                            </p>
                            <p>
                                I also recently launched a course that covers everything you need to build a web app with the Spotify
                                API using Node & React.
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
                            <img src={profileImg} className=" about-img w-full" alt="profile" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

AboutSection2.displayName = "AboutSection2"
AboutSection2.propTypes = {
    isActive: PropTypes.bool.isRequired,
};
export default AboutSection2