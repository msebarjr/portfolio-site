import { motion } from "framer-motion";

import styles from "../styles/Card.module.css";
import { slideUpVariant } from "../animations/variants";

const Card = (props) => {
    return (
        <motion.div
            variants={slideUpVariant}
            initial="hidden"
            animate="visible"
            className={`${styles.card} ${props.cname}`}
        >
            {props.children}
        </motion.div>
    );
};

export default Card;
