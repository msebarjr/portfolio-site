import styles from "../styles/FilteredButton.module.css";

const FilteredButton = (props) => {
    return <button className={styles.filter_button}>{props.text}</button>;
};

export default FilteredButton;
