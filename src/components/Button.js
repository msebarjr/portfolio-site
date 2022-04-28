import styles from "../styles/Button.module.css";

const Button = (props) => {
    return (
        <a href={props.link} onClick={props.showMenu}>
            <button className={`${styles.button} ${props.cname}`}>
                {props.children}
            </button>
        </a>
    );
};

export default Button;
