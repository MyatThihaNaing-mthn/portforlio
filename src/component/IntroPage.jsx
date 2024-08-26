import { useEffect, useState } from "react";
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
                    <Navbar/>
                    <HeroSection/>
                    <AboutSection/>
                    <ExpSection/>
                    <ProjectSection/>
                    <ContactSection/>
                    <LeftPanel/>
                    <RightPanel/>
                </main>
            )}
        </div>
    )
}