import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "../styles/Navbar.module.css";
import Button from "./Button";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const { ref, inView } = useInView();

    const navAnimation = useAnimation();

    useEffect(() => {
        if (inView) {
            navAnimation.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    stiffness: 50,
                },
            });
        }

        if (!inView) {
            navAnimation.start({ opacity: 0, y: -250 });
        }
    }, [inView, navAnimation]);

    useEffect(() => {
        function resizeHandler() {
            setWindowWidth(window.innerWidth);

            if (windowWidth > 768) setShowMenu(false);
        }

        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [windowWidth]);

    const showMenuHandler = () => {
        if (windowWidth < 768) setShowMenu((prevState) => !prevState);
    };

    return (
        <header ref={ref}>
            <motion.nav animate={navAnimation}>
                <div className={styles.nav_icons} onClick={showMenuHandler}>
                    {showMenu ? (
                        <IconContext.Provider
                            value={{ className: `${styles.times}` }}
                        >
                            <FaTimes />
                        </IconContext.Provider>
                    ) : (
                        <IconContext.Provider
                            value={{ className: `${styles.bars}` }}
                        >
                            <FaBars />
                        </IconContext.Provider>
                    )}
                </div>
                <ul
                    className={
                        showMenu
                            ? `${styles.menu_list}`
                            : `${styles.menu_list} ${styles.close}`
                    }
                >
                    <li onClick={showMenuHandler}>
                        <a href="#hero">
                            {"<"}Home{" />"}
                        </a>
                    </li>
                    <li onClick={showMenuHandler}>
                        <a href="#about">
                            {"<"}About{" />"}
                        </a>
                    </li>
                    <li onClick={showMenuHandler}>
                        <a href="#projects">
                            {"<"}Projects{" />"}
                        </a>
                    </li>
                    <li onClick={showMenuHandler}>
                        <a href="#testimonials">
                            {"<"}Testimonials{" />"}
                        </a>
                    </li>

                    <Button
                        cname={styles.nav_button}
                        onClick={showMenuHandler}
                        link="#contact"
                    >
                        {"<"}Contact{" />"}
                    </Button>
                </ul>
            </motion.nav>
        </header>
    );
};

export default Navbar;
