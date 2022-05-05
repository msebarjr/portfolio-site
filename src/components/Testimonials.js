import styles from "../styles/Testimonials.module.css";
import Card from "./Card";
import Testimonial from "./Testimonial";
import { TESTIMONIALS } from "../data/testimonialData";

const Testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <h2>
                {"<"}Testimonials{" />"}
            </h2>
            <div className={styles.testimonial_container}>
                {TESTIMONIALS.map((testimonial) => (
                    <Card
                        key={testimonial.id}
                        cname={styles.testimonial_wrapper}
                    >
                        <Testimonial testimonial={testimonial} />
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
