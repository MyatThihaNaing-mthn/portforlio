import PropTypes from "prop-types";
import ExpData from "../assets/content/experience.json";
import { forwardRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const ExpSection = forwardRef((props, ref) => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [expRef, expInView] = useInView({
        threshold : 0.5
    })
    const [isActive, setIsActive] = useState(false);
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
        if(expInView){
            setIsActive(true)
        }
    }, [expInView])

    useEffect(() => {
        if (isActive && !hasAnimated) {
            controls.start('visible')
            setHasAnimated(true)
        }
    }, [isActive, hasAnimated, controls])

    return (
        <section
            className="experience max-w-about-max flex flex-col items-start
                 mx-auto my-0"
                 id="experience"
            ref={(node) => {
                expRef(node)
                if(typeof ref === 'function') ref(node);
                else if(ref) ref.current = node
            }}
        >
            <motion.div variants={contentVariants}
                initial="hidden"
                animate={controls}>
                <h2 className=" section-heading text-lightest-slate">Experience</h2>
                <div className=" inner">
                    <div className=" tab-list pr-5">
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
}
)
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

ExpSection.displayName = "ExpSection"
export default ExpSection