import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer";
import ProjectData from '../assets/content/project.json';
import PropTypes from 'prop-types';

export default function ProjectSection() {
    const [isActive, setIsActive] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [projectRef, projectInView] = useInView({
        threshold: 0.2
    })

    const projects = ProjectData.projects;

    const controls = useAnimation();
    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    useEffect(() => {
        if (projectInView) {
            setIsActive(true)
        }
    }, [projectInView])

    useEffect(() => {
        if (isActive && !hasAnimated) {
            controls.start('visible')
            setHasAnimated(true)
        }
    }, [isActive, hasAnimated, controls])

    return (
        <section className="project min-h-screen max-w-about-max flex flex-col items-start
                 mx-auto my-0"
            ref={projectRef}>
            <h2 className=" section-heading text-lightest-slate">Some Things I&apos;ve Built</h2>
            <motion.div variants={contentVariants}
                        initial="hidden"
                        animate={controls}>
                <ul className=" project-list">
                    {
                        projects.map(project => <ProjectItem key={project.title} project={project}  />)
                    }
                </ul>
            </motion.div>
        </section>
    )
}

function ProjectItem({project}) {
    console.log(project)
    return (
        <li className=" project-item">
            <div className=" project-content">
                <div>
                    <p className=" project-overline">
                        Featured Project
                    </p>
                    <h3 className=" project-title">
                        <a href={project.repo} target="_blank">{ project.title} </a>
                    </h3>
                    <div className=" project-description">
                        <p>
                            {project.description}
                        </p>
                    </div>
                    <ul className=" project-tech-list">
                        {
                            project.tech.map(tech => <li key={tech}>{tech}</li>)
                        }
                    </ul>
                    <div className=" project-links">
                        <a href={project.repo} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className=" project-image">
                <a href={project.repo} target="_blank">
                    <div className="img-wrapper img image-wrapper-constrained">
                        <div className=" block max-w-img-max">
                            <img className=" img" style={{maxWidth: '100%', display: 'block', position: 'static'}} src={project.image} />
                        </div>
                        <img aria-hidden={true} className=" second-img" src={project.image}></img>
                    </div>
                </a>
            </div>
        </li>
    )
}

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired
}