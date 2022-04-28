import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

import styles from "../styles/Hero.module.css";
import Background from "./Background";
import SocialIcon from "./SocialIcon";


const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero__content}>
                <div>
                    <SocialIcon link="https://www.linkedin.com/in/msebarjr">
                        <FaLinkedinIn />
                    </SocialIcon>
                    <SocialIcon link="https://www.twitter.com/_MichaelSebarJr">
                        <FaTwitter />
                    </SocialIcon>
                    <SocialIcon link="https://www.github.com/msebarjr">
                        <FaGithub />
                    </SocialIcon>
                </div>
                <div className={styles.hero__content_text}>
                    <p className={styles.name}>Michael Sebar Jr, a</p>
                    <h1>Frontend Developer</h1>
                    <p className={styles.info}></p>
                    <button>Hire Me</button>
                </div>
            </div>
            <Background />
        </div>
    );
};

export default Hero;
