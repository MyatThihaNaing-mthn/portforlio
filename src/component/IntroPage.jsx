import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import { useInView } from "react-intersection-observer";
import HeroAnimation from "./HeroAnimation";
import ExpSection from "./ExpSection";
import Navbar from "./NavBar";

function useSectionVisibility() {
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


    useEffect(() => {
        if (heroInView) setActiveSection('hero');
        else if (aboutInView) setActiveSection('about');
        else if (expInView) setActiveSection('experience');
    }, [heroInView, aboutInView, expInView])

    console.log("about ref "+ aboutRef)
    return { activeSection, heroRef, aboutRef, expRef }
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

    const scrollToSection = (ref) => {
        console.log("Scrolling to section", ref); // Debug log
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn("Ref is not attached to an element yet"); // Debug warning
        }
    };

    const handleNavigation = (section) => {
        console.log("Navigating to", section);

        switch (section) {
            case 'about':
                console.log(aboutRef)
                scrollToSection(aboutRef)
                break
            case 'experience':
                console.log(expRef)
                scrollToSection(expRef)
                break
            case 'work':
                console.log("work section")
                break
            case 'contact':
                console.log("contact section")
                break
        }
    }

    return (
        <div className=" main flex flex-col items-center justify-center">
            {isSVGVisible ? (
                <HeroAnimation onAnimationComplete={handleSVGAnimationComplete} />
            ) : (
                <main>
                    <Navbar onNavigation={handleNavigation} />
                    <HeroSection ref={heroRef} isActive={activeSection === 'hero'} />
                    <AboutSection ref={aboutRef} isActive={activeSection === 'about'} />
                    <ExpSection ref={expRef} isActive={activeSection === 'experience'} />
                </main>
            )}
        </div>
    )
}