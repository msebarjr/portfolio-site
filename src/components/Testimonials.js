import styles from "../styles/Testimonials.module.css";
import Card from "./Card";

const Testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <h2>
                {"<"}Testimonials{" />"}
            </h2>
            <Card cname="tesimonial_wrapper"></Card>
        </div>
    );
};

export default Testimonials;
