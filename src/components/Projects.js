import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "../styles/Projects.module.css";
import FilteredButton from "./FilteredButton";
import { PROJECTS } from "../data/projectData";
import Project from "./Project";
import Button from "./Button";
import CaseStudyModal from "./CaseStudyModal";


const Projects = (props) => {
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState("");
    const [selectedCaseStudy, setSelectedCaseStudy] = useState({});

    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    const headingAnimation = useAnimation();
    const contentAnimation = useAnimation();

    useEffect(() => {
        if (inView) {
            headingAnimation.start({
                x: 0,
                transition: {
                    type: "tween",
                    duration: 1.2,
                },
            });

            contentAnimation.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: "tween",
                    duration: 2,
                    delay: 1,
                },
            });
        }

        if (!inView) {
            headingAnimation.start({ x: "-300vw" });
            contentAnimation.start({ opacity: 0 });
        }
    }, [inView]);

    const filters = [
        "All",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "React Native",
        "Next JS",
    ];

    useEffect(() => {
        setFilteredProjects(PROJECTS);
        setActiveFilter("All");
    }, []);

    const handleFilter = (item) => {
        setActiveFilter(item);

        if (item === "All") setFilteredProjects(PROJECTS);
        else
            setFilteredProjects(
                PROJECTS.filter((project) => project.tags.includes(item))
            );
    };

    const openCaseStudyModal = (id) => {
        props.handleCaseStudy();
        setSelectedCaseStudy(PROJECTS.find((project) => project.id === id));
    };

    const closeCaseStudyModal = () => {
        props.handleCloseCaseStudy();
        setSelectedCaseStudy({});
    };

    return (
        <div ref={ref} className={styles.projects} id="projects">
            <motion.h2 animate={headingAnimation}>
                {"<"}Projects {" />"}
            </motion.h2>
            <motion.div
                animate={contentAnimation}
                className={styles.filter_buttons}
            >
                {filters.map((item) => (
                    <FilteredButton
                        key={item}
                        text={item}
                        onClick={handleFilter.bind(this, item)}
                        cname={activeFilter === item ? styles.active : ""}
                    />
                ))}
            </motion.div>
            <motion.div
                animate={contentAnimation}
                className={styles.project_wrapper}
            >
                {filteredProjects.map((project) => (
                    <Project
                        key={project.id}
                        project={project}
                        onClick={openCaseStudyModal.bind(this, project.id)}
                    />
                ))}
            </motion.div>
            <motion.div
                animate={contentAnimation}
                className={styles.projects_button_wrapper}
            >
                <Button cname={styles.projects_button} link="#contact">
                    Contact Me
                </Button>
            </motion.div>
            {props.caseStudy && (
                <CaseStudyModal
                    project={selectedCaseStudy}
                    closeCaseStudy={closeCaseStudyModal}
                />
            )}
        </div>
    );
};

export default Projects;
