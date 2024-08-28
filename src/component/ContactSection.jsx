import { motion, useAnimation } from "framer-motion";
import { forwardRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ContactSection = forwardRef((props, ref) => {
    const [isActive, setIsActive] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [contactRef, contactInView] = useInView({
        threshold: 0.5,
    })

    const controls = useAnimation();
    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    useEffect(()=> {
        if(contactInView) setIsActive(true)
    }, [contactInView])

    useEffect(()=> {
        if(isActive && !hasAnimated){
            controls.start('visible')
            setHasAnimated(true)
        }
    }, [isActive, hasAnimated, controls])
    

    return (
        <section id="contact" className="contact max-w-about-max flex flex-col items-center
                 mx-auto my-0 "
                 ref={(node) => {
                    contactRef(node)
                    if(typeof ref === 'function') ref(node)
                    else if(ref) ref.current = node
                 }}>
            <h2 className=" text-lightest-slate contact-heading">
                What&apos;s next?
            </h2>
            <motion.div 
                variants={contentVariants}
                initial='hidden'
                animate={controls}>
                <h2 className="title">Get In Touch</h2>
                <p>Currently, I am looking for the full-stack developer role and if you&apos;re looking for a driven, skilled professional to join your team, feel free to reach out!</p>
                <a className="email-link" href="mailto:myatthihanaing.mthn@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
            </motion.div>
        </section>
    )
})

ContactSection.displayName = "ContactSection"
export default ContactSection