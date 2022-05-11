import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import Background from "./Background";
import SocialIcon from "./SocialIcon";
import Button from "./Button";
import {
    heroContentVariants,
    floatingIconsVariants,
} from "../animations/variants";
import styles from "../styles/Hero.module.css";

const Hero = (props) => {
    return (
        <div className={styles.hero} id="hero">
            <Background />
            <div className={styles.hero__content}>
                {props.showSocialIcons && (
                    <div className={styles.hero_icons_wrapper}>
                        <motion.div
                            variants={floatingIconsVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                delay: 2,
                                type: "tween",
                                duration: 0.85,
                            }}
                            className={styles.hero__content_icons}
                        >
                            <SocialIcon link="https://www.linkedin.com/in/msebarjr">
                                <FaLinkedinIn />
                            </SocialIcon>
                            <SocialIcon link="https://www.twitter.com/_MichaelSebarJr">
                                <FaTwitter />
                            </SocialIcon>
                            <SocialIcon link="https://www.github.com/msebarjr">
                                <FaGithub />
                            </SocialIcon>
                        </motion.div>
                    </div>
                )}
                <motion.div
                    variants={heroContentVariants}
                    initial="hidden"
                    animate="visible"
                    className={styles.hero__content_text}
                >
                    <p className={styles.name}>Michael Sebar Jr</p>
                    <h1>Frontend Developer</h1>
                    <p className={styles.info}>
                        who is leaving his fingerprints all over the{" "}
                        <span>web</span> and <span>mobile</span> applications.
                    </p>

                    <Button cname={styles.hero_button} link="#contact">
                        Contact
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
