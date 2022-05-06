import ReactDOM from "react-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import Card from "../components/Card";
import styles from "../styles/FormModal.module.css";

const FormModalOverlay = () => {
    return (
        <div className={styles.modal_container}>
            <Card cname={styles.form_modal}>
                <IoMdCheckmarkCircleOutline className={styles.success} />
                <h2>Thank You!</h2>
                <p>Your submission has been sent.</p>
            </Card>
        </div>
    );
};

const FormModal = () => {
    return (
        <>
            {ReactDOM.createPortal(
                <FormModalOverlay />,
                document.getElementById("modal-root")
            )}
        </>
    );
};

export default FormModal;
