import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "../styles/Tech.module.css";
import { TECH_ICONS } from "../data/techData";
import TechIcon from "./TechIcon";
import SocialIcon from "../components/SocialIcon";

const Tech = (props) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    const headingAnimation = useAnimation();
    const contentAnimation = useAnimation();

    useEffect(() => {
        if (inView) {
            headingAnimation.start({
                x: 0,
                transition: {
                    type: "tween",
                    duration: 1.2,
                },
            });

            contentAnimation.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: "tween",
                    duration: 1.2,
                    delay: 1,
                },
            });
        }

        if (!inView) {
            headingAnimation.start({
                x: "300vw",
                transition: {
                    duration: 1.5,
                },
            });
            contentAnimation.start({ opacity: 0 });
        }
    }, [inView, headingAnimation, contentAnimation]);

    return (
        <div ref={ref} className={styles.tech}>
            {props.showSocialIcons && (
                <div className={styles.top_page_icon_wrapper}>
                    <div className={styles.top_page_icon}>
                        <SocialIcon link="#hero">
                            <FaArrowUp />
                        </SocialIcon>
                    </div>
                </div>
            )}
            <motion.h2 animate={headingAnimation}>
                {"<"}Technology{" />"}
            </motion.h2>
            <motion.div
                animate={contentAnimation}
                className={styles.tech_icons}
            >
                {TECH_ICONS.map((icon) => (
                    <TechIcon key={icon.id} src={icon.src} alt={icon.alt} />
                ))}
            </motion.div>
        </div>
    );
};

export default Tech;
