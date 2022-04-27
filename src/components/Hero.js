import styles from "../styles/Hero.module.css";
import Circle from "./Circle";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero__content}>
                <div className={styles.hero__content_icons}></div>
                <div className={styles.hero__content_text}>
                    <p className={styles.name}>Michael Sebar Jr, a</p>
                    <h1>Frontend Developer</h1>
                    <p className={styles.infd}></p>
                    <button>Hire Me</button>
                </div>
            </div>
            <Circle />
        </div>
    );
};

export default Hero;
