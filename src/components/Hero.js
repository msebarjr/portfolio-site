import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

import Background from "./Background";
import SocialIcon from "./SocialIcon";
import Button from "./Button";
import styles from "../styles/Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.hero} id="hero">
            <Background />
            <div className={styles.hero__content}>
                <div className={styles.hero_icons_wrapper}>
                    <div className={styles.hero__content_icons}>
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
                </div>
                <div className={styles.hero__content_text}>
                    <p className={styles.name}>Michael Sebar Jr</p>
                    <h1>Frontend Developer</h1>
                    <p className={styles.info}>
                        who is leaving his fingerprints all over the{" "}
                        <span>web</span> and <span>mobile</span> applications.
                    </p>
                    <Button cname={styles.hero_button} link="#contact">
                        Contact Me
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
