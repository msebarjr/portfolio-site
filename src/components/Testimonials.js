import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "../styles/Testimonials.module.css";
import Card from "./Card";
import Testimonial from "./Testimonial";
import { TESTIMONIALS } from "../data/testimonialData";

const Testimonials = () => {
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
                    duration: 2,
                    delay: 1,
                },
            });
        }

        if (!inView) {
            headingAnimation.start({ x: "300vw" });
            contentAnimation.start({ opacity: 0 });
        }
    }, [inView]);

    return (
        <div ref={ref} className={styles.testimonials} id="testimonials">
            <motion.h2 animate={headingAnimation}>
                {"<"}Testimonials{" />"}
            </motion.h2>
            <motion.div
                animate={contentAnimation}
                className={styles.testimonial_container}
            >
                {TESTIMONIALS.map((testimonial) => (
                    <Card
                        key={testimonial.id}
                        cname={styles.testimonial_wrapper}
                    >
                        <Testimonial testimonial={testimonial} />
                    </Card>
                ))}
            </motion.div>
        </div>
    );
};

export default Testimonials;
