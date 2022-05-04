import styles from "../styles/TechIcon.module.css";

const TechIcon = ({ src, alt }) => {
    return (
        <div className={styles.tech_icon}>
            <img src={src} alt={alt} />
        </div>
    );
};

export default TechIcon;
