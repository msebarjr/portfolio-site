import ReactPlayer from "react-player/lazy";
import { FaTimes, FaGithub } from "react-icons/fa";

import Card from "../components/Card";
import styles from "../styles/CaseStudy.module.css";
import Button from "./Button";

const CaseStudy = ({ caseStudy }) => {
    return (
        <div className={styles.case_study_container}>
            <Card cname={styles.case_study}>
                <header>
                    <h2>Case Study</h2>
                    <FaTimes className={styles.close} />
                </header>
                <div className={styles.case_study_wrapper}>
                    <div className={styles.preview}>
                        <div className={styles.video}>
                            <ReactPlayer
                                url={caseStudy.video}
                                width="100%"
                                height="150px"
                                playing
                                loop={true}
                                muted={true}
                            />
                        </div>
                        <div className={styles.links}>
                            <Button
                                className={styles.link}
                                link={caseStudy.website}
                            >
                                Visit Site
                            </Button>
                            <Button
                                className={styles.link}
                                link={caseStudy.github}
                            >
                                <FaGithub className={styles.github_icon} />
                            </Button>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.project__name}>
                            <h3>Project Name:</h3>
                            <p>{caseStudy.project}</p>
                        </div>
                        <div className={styles.project__problem}>
                            <h3>Problem:</h3>
                            <p>{caseStudy.problem}</p>
                        </div>
                        <div className={styles.project_solution}>
                            <h3>Solution:</h3>
                            <p>{caseStudy.solution}</p>
                        </div>
                        <div className={styles.project_obstacles}>
                            <h3>Obstacles:</h3>
                            <p>{caseStudy.obstacles}</p>
                        </div>
                        <div className={styles.project_learn}>
                            <h3>What Did I Learn?</h3>
                            <p>{caseStudy.learned}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CaseStudy;
