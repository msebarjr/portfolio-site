import styles from "../styles/Circle.module.css";

const Circle = () => {
    return (
        <div className={styles.circle}>
            <div className={styles.watermark}>
                <h2>Web {"&"} Mobile</h2>
                <h2>Developer</h2>
            </div>
        </div>
    );
};

export default Circle;
