import styles from "../styles/Tech.module.css";
import { TECH_ICONS } from "../data/techData";
import TechIcon from "./TechIcon";

const Tech = () => {
    return (
        <div className={styles.tech}>
            <h2>
                {"<"}Technology{" />"}
            </h2>
            <div className={styles.tech_icons}>
                {TECH_ICONS.map((icon) => (
                    <TechIcon key={icon.id} src={icon.src} alt={icon.alt} />
                ))}
            </div>
        </div>
    );
};

export default Tech;
