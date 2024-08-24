import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import { useInView } from "react-intersection-observer";
import HeroAnimation from "./HeroAnimation";
import Navbar from "./NavBar";
import ExpSection from "./ExpSection";

function useSectionVisibility(){
    const [activeSection, setActiveSection] = useState('hero');

    const [heroRef, heroInView] = useInView({
        threshold: 0.5,
    })
    const [aboutRef, aboutInView] = useInView({
        threshold: 0.5,
    })
    const [expRef, expInView] = useInView({
        threshold: 0.5,
    })

    useEffect(()=> {
        if (heroInView) setActiveSection('hero');
    else if (aboutInView) setActiveSection('about');
    else if (expInView) setActiveSection('experience')
    }, [heroInView, aboutInView, expInView])

    return {activeSection, heroRef, aboutRef, expRef}
}

export default function IntroPage() {
    const [isSVGVisible, setSVGVisible] = useState(true)

    const { activeSection, heroRef, aboutRef, expRef } = useSectionVisibility();

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
        }, 1000); // Duration to ensure complete SVG animation
    };

    return (
        <div className=" main flex flex-col items-center justify-center">
            {isSVGVisible ? (
                <HeroAnimation onAnimationComplete={handleSVGAnimationComplete} />
            ) : (
                <main>
                    <Navbar/>
                    <HeroSection ref={heroRef} isActive={activeSection === 'hero'}/>
                    <AboutSection ref={aboutRef} isActive={activeSection === 'about'}/>
                    <ExpSection ref={expRef} isActive={activeSection === 'experience'}/>
                </main>
            )}
        </div>
    )
}