import { useEffect, useRef, useState } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import HeroAnimation from "./HeroAnimation";
import ExpSection from "./ExpSection";
import Navbar from "./NavBar";
import ProjectSection from "./ProjectSection";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import ContactSection from "./ContactSection";


export default function IntroPage() {
    const [isSVGVisible, setSVGVisible] = useState(true)
    console.log('re rendered')
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const expRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    const navigationHandler = (section) => {
        switch(section){
            case 'hero':
                console.log(heroRef)
                break
            case 'about':
                console.log(aboutRef)
                if(aboutRef && aboutRef.current) aboutRef.current.scrollIntoView({behavior: 'smooth'})
                break
            case 'experience':
                console.log(expRef)
                if(expRef && expRef.current) expRef.current.scrollIntoView({behavior: 'smooth'})
                break
            case 'project':
                console.log(projectRef)
                if(projectRef && projectRef.current) projectRef.current.scrollIntoView({behavior: 'smooth'})
                break
            case 'contact':
                if(contactRef && contactRef.current) contactRef.current.scrollIntoView({behavior: 'smooth'})
                break
            default :
                console.log('default')

        }
    }


    useEffect(() => {
        if (!isSVGVisible) {
            const timer = setTimeout(() => {
                setSVGVisible(false)
                document.body.style.backgroundColor = "#0a192f"
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isSVGVisible]);

    const handleSVGAnimationComplete = () => {
        setTimeout(() => {
            setSVGVisible(false);
            document.body.style.backgroundColor = "#0a192f"
        }, 1000);
    };


    return (
        <div className=" main flex flex-col items-center justify-center">
            {isSVGVisible ? (
                <HeroAnimation  onAnimationComplete={handleSVGAnimationComplete} />
            ) : (
                <main>
                    <Navbar onNavigation={navigationHandler}/>
                    <HeroSection ref={heroRef} />
                    <AboutSection ref={aboutRef}/>
                    <ExpSection ref={expRef}/>
                    <ProjectSection ref={projectRef}/>
                    <ContactSection ref={contactRef}/>
                    <LeftPanel/>
                    <RightPanel/>
                </main>
            )}
        </div>
    )
}