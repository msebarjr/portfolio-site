import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "../styles/Contact.module.css";
import FormModal from "./FormModal";

const Contact = () => {
    const [formIsValid, setFormIsValid] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [openSuccessModal, setOpenSuccessModal] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    const contactAnimation = useAnimation();

    useEffect(() => {
        if (inView) {
            contactAnimation.start({
                opacity: 1,
                transition: {
                    duration: 2.5,
                },
            });
        }

        if (!inView) {
            contactAnimation.start({ opacity: 0 });
        }
    }, [inView]);

    const formRef = useRef();

    const checkFormValidity = () => {
        if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "")
            setFormIsValid(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "gmail",
                "portfolio_template",
                formRef.current,
                process.env.REACT_APP_EMAIL_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        setOpenSuccessModal(true);

        setTimeout(() => {
            setOpenSuccessModal(false);
        }, 5000);

        setName("");
        setEmail("");
        setMessage("");
        setFormIsValid(false);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        checkFormValidity();
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        checkFormValidity();
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        checkFormValidity();
    };

    return (
        <div ref={ref} className={styles.contact} id="contact">
            <motion.form
                ref={formRef}
                animate={contactAnimation}
                onSubmit={handleSubmit}
            >
                <div>
                    <p>Leave me a message!</p>
                    <div className={styles.form_control}>
                        <label htmlFor="name">
                            Name <span>*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleNameChange}
                            value={name}
                        />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">
                            Email <span>*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleEmailChange}
                            value={email}
                        />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="message">
                            Message <span>*</span>
                        </label>
                        <textarea
                            cols="30"
                            rows="10"
                            name="message"
                            id="message"
                            onChange={handleMessageChange}
                            value={message}
                        />
                    </div>
                    <button className={!formIsValid ? styles.disable : ""}>
                        Send
                    </button>
                </div>
            </motion.form>
            {openSuccessModal ? <FormModal /> : ""}
        </div>
    );
};

export default Contact;
