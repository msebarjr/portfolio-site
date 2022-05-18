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
