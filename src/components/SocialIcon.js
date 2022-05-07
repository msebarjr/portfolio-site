import { IconContext } from "react-icons";

import styles from "../styles/SocialIcon.module.css";

const SocialIcon = (props) => {
    return (
        <div className={styles.icon_wrapper}>
            <a
                href={props.link}
                target={props.link !== "#hero" ? "_blank" : null}
                rel="noreferrer"
            >
                <IconContext.Provider value={{ className: `${styles.icon}` }}>
                    {props.children}
                </IconContext.Provider>
            </a>
        </div>
    );
};

export default SocialIcon;
