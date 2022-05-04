import styles from "../styles/Tech.module.css";
import TechIcon from "./TechIcon";

const Tech = () => {
    return (
        <div className={styles.tech}>
            <h2>
                {"<"}Technology{" />"}
            </h2>
            <div className={styles.tech_icons}>
                <TechIcon
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                    alt="Html"
                />
                <TechIcon
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                    alt="Css"
                />
                <TechIcon
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                />
                <TechIcon
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    alt="React"
                />
                <TechIcon
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                    alt="Next Js"
                />
                <TechIcon
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                    alt="Git"
                />
            </div>
        </div>
    );
};

export default Tech;
