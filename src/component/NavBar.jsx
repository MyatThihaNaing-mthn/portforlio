import { useState, useEffect } from 'react';
import logoSvg from '../assets/logo.svg';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { RiMenu4Fill } from "react-icons/ri";
import Drawer from './Drawer';

const Navbar = ({onNavigation}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [lastScrollPos, setLastScrollPos] = useState(0);

    const logoVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } }
    }
    const aboutVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2, delay: 0.2 } }
    }
    const expVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2, delay: 0.4 } }
    }
    const workVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2, delay: 0.6 } }
    }
    const contactVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2, delay: 0.8 } }
    }
    const resumeVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2, delay: 1 } }
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos > lastScrollPos && currentScrollPos > 100) {
                // User is scrolling down and has scrolled 100px or more
                setIsVisible(false);
            } else {
                // User is scrolling up
                setIsVisible(true);
            }
            setLastScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPos]);

    return (
        <header>
            <nav
            className={`fixed top-0 py-4 bg-main-bg-color navbar-shadow z-50 left-0 
                w-full transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <motion.div
                            variants={logoVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            <img src={logoSvg} alt='logo' className=' w-10 h-10 sm:w-12 sm:h-16' />
                        </motion.div>

                    </div>
                    <div className='block md:hidden'>
                        <RiMenu4Fill
                            size={32}
                            onClick={()=>setMenuOpen(true)}
                        />
                    </div>
                    <Drawer isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} onNavigation={onNavigation}/>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <motion.div
                                variants={aboutVariant}
                                initial="hidden"
                                animate="visible"
                            >
                                <p className=" text-white hover:text-green px-3 py-2 rounded-md text-sm cursor-pointer font-medium"
                                    onClick={()=>onNavigation('about')}>
                                    About
                                </p>
                            </motion.div>
                            <motion.div
                                variants={expVariant}
                                initial="hidden"
                                animate="visible"
                            >
                                <p className="text-white hover:text-green px-3 py-2 rounded-md text-sm cursor-pointer font-medium"
                                    onClick={()=>onNavigation('experience')}>
                                    Experience
                                </p>
                            </motion.div>
                            <motion.div
                                variants={workVariant}
                                initial="hidden"
                                animate="visible"
                            >
                                <p className="text-white hover:text-green px-3 py-2 rounded-md text-sm cursor-pointer font-medium"
                                    onClick={()=>onNavigation('work')}>
                                    Work
                                </p>
                            </motion.div>
                            <motion.div
                                variants={contactVariant}
                                initial="hidden"
                                animate="visible"
                            >
                                <p className="text-white hover:text-green px-3 py-2 rounded-md text-sm cursor-pointer font-medium"
                                    onClick={()=> onNavigation('contact')}>
                                    Contact
                                </p>
                            </motion.div>
                            <motion.div
                                variants={resumeVariant}
                                initial="hidden"
                                animate="visible">
                                <a className=' resume-button'
                                    href='/src/assets/content/resume.pdf'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Resume
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </header>
    );
};

Navbar.propTypes = {
    onNavigation : PropTypes.func.isRequired
}

export default Navbar;
