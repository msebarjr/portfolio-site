import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Button from "./Button";
import Profile from "../assets/images/transparent_profile.png";
import styles from "../styles/About.module.css";

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });
    const headingAnimation = useAnimation();
    const contentAnimation = useAnimation();

    useEffect(() => {
        if (inView) {
            headingAnimation.start({
                opacity: 1,
                transition: {
                    duration: 0.75,
                },
            });

            contentAnimation.start({
                opacity: 1,
                transition: {
                    duration: 0.75,
                    delay: 0.25,
                },
            });
        }

        if (!inView) {
            headingAnimation.start({
                opacity: 0,
                transition: {
                    duration: 0.75,
                },
            });
            contentAnimation.start({ opacity: 0 });
        }
    }, [inView, headingAnimation, contentAnimation]);

    return (
        <div ref={ref} className={styles.about} id="about">
            <div className={styles.about__content}>
                <motion.h2 animate={headingAnimation}>
                    {"<"}About Me {"/>"}
                </motion.h2>
                <motion.div animate={contentAnimation}>
                    <p className={styles.about__content_bio}>
                        I am a very passionate and motivated web and mobile
                        developer. Throughout my professional career I have
                        learned how to manage my time, stay self-motivated, and
                        use my resources around me in order to get the job done.
                        <br />
                        <br />I have a hunger for knowledge so I use every day
                        as an oppurtunity to learn something new. This plays a
                        key role as a developer enabling me to constantly stay
                        up-to-date with trends, updates, and features introduced
                        constantly in the field.
                    </p>
                    <Button cname={styles.about_button} link="#contact">
                        Contact Me
                    </Button>
                </motion.div>
                <div className={styles.img_wrapper}>
                    <img src={Profile} alt="Profile" />
                </div>
            </div>
        </div>
    );
};

export default About;
