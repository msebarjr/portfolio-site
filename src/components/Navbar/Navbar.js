import classes from "../../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav>
            <ul className={classes.menu_list}>
                <li>
                    <a href="#hero">
                        {"<"}Home{" />"}
                    </a>
                </li>
                <li>
                    <a href="#about">
                        {"<"}About{" />"}
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        {"<"}Projects{" />"}
                    </a>
                </li>
                <li>
                    <a href="#testimonials">
                        {"<"}Testimonials{" />"}
                    </a>
                </li>
            </ul>
            <button>
                <a href="#contact">
                    {"<"}Contact{" />"}
                </a>
            </button>
        </nav>
    );
};

export default Navbar;
