import { useEffect, useState } from "react";

import styles from "../styles/Projects.module.css";
import FilteredButton from "./FilteredButton";
import { PROJECTS } from "../data/projectData";
import Project from "./Project";
import Button from "./Button";
import CaseStudyModal from "./CaseStudyModal";

const Projects = () => {
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState("");
    const [selectedCaseStudy, setSelectedCaseStudy] = useState({});
    const [openCaseStudy, setOpenCaseStudy] = useState(false);

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

    const handleCaseStudy = (id) => {
        setOpenCaseStudy(true);
        setSelectedCaseStudy(PROJECTS.find((project) => project.id === id));
    };

    const handleCloseCaseStudy = () => {
        setOpenCaseStudy(false);
        setSelectedCaseStudy({});
    };

    return (
        <div className={styles.projects} id="projects">
            <h2>
                {"<"}Projects {" />"}
            </h2>
            <div className={styles.filter_buttons}>
                {filters.map((item) => (
                    <FilteredButton
                        key={item}
                        text={item}
                        onClick={handleFilter.bind(this, item)}
                        cname={activeFilter === item ? styles.active : ""}
                    />
                ))}
            </div>
            <div className={styles.project_wrapper}>
                {filteredProjects.map((project) => (
                    <Project
                        key={project.id}
                        project={project}
                        onClick={handleCaseStudy.bind(this, project.id)}
                    />
                ))}
            </div>
            <div className={styles.projects_button_wrapper}>
                <Button cname={styles.projects_button} link="#contact">
                    Contact Me
                </Button>
            </div>
            {openCaseStudy ? (
                <CaseStudyModal
                    project={selectedCaseStudy}
                    closeCaseStudy={handleCloseCaseStudy}
                />
            ) : (
                ""
            )}
        </div>
    );
};

export default Projects;
