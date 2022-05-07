import ReactPlayer from "react-player/lazy";
import { FaTimes, FaGithub } from "react-icons/fa";

import styles from "../styles/CaseStudy.module.css";
import Button from "./Button";

const CaseStudy = ({ project, closeCaseStudy }) => {
    return (
        <div className={styles.case_study_container}>
            <div className={styles.case_study}>
                <header>
                    <h2>Case Study</h2>
                    <FaTimes
                        className={styles.close}
                        onClick={closeCaseStudy}
                    />
                </header>
                <div className={styles.case_study_wrapper}>
                    <div className={styles.preview}>
                        <div className={styles.video}>
                            <ReactPlayer
                                url={project.src}
                                width="100%"
                                height="250px"
                                playing
                                loop={true}
                                muted={true}
                            />
                        </div>
                        <div className={styles.links}>
                            <Button
                                cname={styles.link}
                                link={project.caseStudy.website}
                            >
                                Visit Site
                            </Button>
                            <Button cname={styles.link} link={project.github}>
                                <FaGithub className={styles.github_icon} />
                            </Button>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.project__info}>
                            <h3>Project Name:</h3>
                            <p>{project.title}</p>
                        </div>
                        <div className={styles.project__info}>
                            <h3>Problem:</h3>
                            <p>{project.caseStudy.problem}</p>
                        </div>
                        <div className={styles.project__info}>
                            <h3>Solution:</h3>
                            <p>{project.caseStudy.solution}</p>
                        </div>
                        <div className={styles.project__info}>
                            <h3>Obstacles:</h3>
                            <p>{project.caseStudy.obstacles}</p>
                        </div>
                        <div className={styles.project__info}>
                            <h3>What Did I Learn?</h3>
                            <p>{project.caseStudy.learned}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
