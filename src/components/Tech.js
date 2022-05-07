import { FaArrowUp } from "react-icons/fa";

import styles from "../styles/Tech.module.css";
import { TECH_ICONS } from "../data/techData";
import TechIcon from "./TechIcon";
import SocialIcon from "../components/SocialIcon";

const Tech = () => {
    return (
        <div className={styles.tech}>
            <div className={styles.top_page_icon_wrapper}>
                <div className={styles.top_page_icon}>
                    <SocialIcon
                        link="#hero"                      
                    >
                        <FaArrowUp />
                    </SocialIcon>
                </div>
            </div>
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
