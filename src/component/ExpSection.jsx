import PropTypes from "prop-types";
import ExpData from "../assets/content/experience.json";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// const data1 = {
//     "title" : "Moblie Security Engineer",
//     "company" : "V-Key",
//     "website" : "https://www.v-key.com/",
//     "time" : "May 2018 - Present",
//     "workDetails" : [
//         "Leveraged Android SDK and NDK to enhance existing security features, discovering new techniques and documenting findings on Confluence.",
//         "Designed and implemented mobile security features based on research findings.Authored detailed documentation and instructions for the testing team and presented these features to clientsduring meetings",
//         "Addressed customer reports on false positives and false negatives in malware detection. Reproduced reported issues, investigated root causes, and used Android SDK and NDK to resolve bugs, making necessary redesigns.",
//     ]
// }

const ExpSection = React.forwardRef(({ isActive }, ref) => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [currentTab, setCurrentTab] = useState(0);

    const controls = useAnimation();
    const data = ExpData.exprience;

    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const handleTabSwitch = (index) => {
        setCurrentTab(index)
    }

    useEffect(() => {
        if (isActive && !hasAnimated) {
            controls.start('visible')
            setHasAnimated(true)
        }
    }, [isActive, hasAnimated, controls])

    return (
        <section
            className="experience min-h-screen max-w-about-max flex flex-col items-start
                 mx-auto my-0"
            ref={ref}
        >
            <motion.div variants={contentVariants}
                initial="hidden"
                animate={controls}>
                <h2 className=" section-heading text-lightest-slate">Experience</h2>
                <div className=" inner">
                    <div className=" tab-list">
                        {data && data.map(
                            (exp, index) => {
                                return <TabButton
                                    key={exp.company}
                                    company={exp.company}
                                    isActive={currentTab === index}
                                    handleClick={() => handleTabSwitch(index)}
                                />
                            }
                        )}
                    </div>
                    <div className=" work-details">
                        <WorkDetails workInfo={data[currentTab]} />
                    </div>
                </div>
            </motion.div>
        </section>
    )
})

function TabButton({ company, isActive, handleClick }) {
    return (
        <button className={`tab-btn ${isActive ? 'active' : ''}`} onClick={handleClick}>
            <span>
                {company}
            </span>
        </button>
    )
}

function WorkDetails({ workInfo }) {
    return (
        <div className=" work-info">
            <h3>
                <span>{workInfo.title}</span>
                <span>
                    &nbsp;@&nbsp;
                    <a href={workInfo.website} target="_blank" className=" inline-link">
                        {workInfo.company}
                    </a>
                </span>
            </h3>
            <p className="time-range">{workInfo.time}</p>
            <div>
                <ul>
                    {
                        workInfo && workInfo.workDetails.map(details => <WorkDetailsItem key={details} workFuncListItem={details} />)
                    }
                </ul>
            </div>

        </div>
    )
}

function WorkDetailsItem({ workFuncListItem }) {
    return (
        <li>
            {workFuncListItem}
        </li>
    )
}

WorkDetails.propTypes = {
    workInfo: PropTypes.object.isRequired
}
WorkDetailsItem.propTypes = {
    workFuncListItem: PropTypes.string.isRequired
}
TabButton.propTypes = {
    company: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
}
ExpSection.propTypes = {
    isActive: PropTypes.bool.isRequired
}

ExpSection.displayName = "ExpSection"
export default ExpSection