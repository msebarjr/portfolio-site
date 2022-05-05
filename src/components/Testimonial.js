import styles from "../styles/Testimonial.module.css";

const Testimonial = ({ testimonial }) => {
    return (
        <div className={styles.testimonial}>
            <div className={styles.testimonial__text}>
                <p>
                    <span>"</span>
                    {testimonial.text} <span>"</span>
                </p>
            </div>
            <div className={styles.testimonial__client}>
                <img src={testimonial.img} alt={testimonial.alt} />
                <div className={styles.testimonial__client_info}>
                    <p>{testimonial.company}</p>
                    <p>{testimonial.client}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
