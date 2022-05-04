import styles from "../styles/FilteredButton.module.css";

const FilteredButton = (props) => {
    return (
        <button
            className={`${styles.filter_button} ${props.cname}`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};

export default FilteredButton;
