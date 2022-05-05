import { useEffect, useState } from "react";

import styles from "../styles/Projects.module.css";
import FilteredButton from "./FilteredButton";
import { PROJECTS } from "../data/projectData";
import Project from "./Project";
import Button from "./Button";

const Projects = () => {
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState("");

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
                    <Project key={project.id} project={project} />
                ))}
            </div>
            <div className={styles.projects_button_wrapper}>
                <Button cname={styles.projects_button} link="#contact">
                    Contact Me
                </Button>
            </div>
        </div>
    );
};

export default Projects;
