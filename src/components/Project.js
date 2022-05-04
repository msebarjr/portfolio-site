import ReactPlayer from "react-player/lazy";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

import styles from "../styles/Project.module.css";
import Card from "./Card";

const Project = ({ project }) => {
    return (
        <Card>
            <h3 className={styles.project__title}>{project.title}</h3>
            <div className={styles.preview}>
                <ReactPlayer
                    url={project.src}
                    width="100%"
                    height="250px"
                    playing
                    loop={true}
                    muted={true}
                />
            </div>
            <div className={styles.tags}>
                {project.tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))}
            </div>
            <div className={styles.links}>
                <div className={styles.link}>More Info</div>
                <div className={styles.link}>
                    <a href={project.github} target="_blank" rel="noreferrer">
                        <IconContext.Provider
                            value={{ className: `${styles.icon}` }}
                        >
                            <FaGithub />
                        </IconContext.Provider>
                    </a>
                </div>
            </div>
        </Card>
    );
};

export default Project;
