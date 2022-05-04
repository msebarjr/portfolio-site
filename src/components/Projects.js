import styles from "../styles/Projects.module.css";
import FilteredButton from "./FilteredButton";
import { PROJECTS } from "../data/projectData";
import Project from "./Project";

const Projects = () => {
    const filters = [
        "All",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "React Native",
        "Next JS",
    ];

    return (
        <div className={styles.projects}>
            <h2>
                {"<"}Projects {" />"}
            </h2>
            <div className={styles.filter_buttons}>
                {filters.map((item) => (
                    <FilteredButton key={item} text={item} />
                ))}
            </div>
            <div className={styles.project_wrapper}>
                {PROJECTS.map((project) => (
                    <Project
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
