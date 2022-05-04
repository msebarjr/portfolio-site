import Button from "./Button";
import Profile from "../assets/images/transparent_profile.png";
import styles from "../styles/About.module.css";

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.about__content}>
                <h2>
                    {"<"}About Me {"/>"}
                </h2>
                <p className={styles.about__content_bio}>
                    I am a very passionate and motivated web and mobile
                    developer. I am a husband and a father to three kids. I
                    graduated on the Dean's List with a BA in Computer Science
                    from Florida International University and a member of the
                    Tau Sigma's Honor Society. I went to school online and
                    taught myself Web Development on the side. Through those
                    experiences I have learned how to manage my time, stay
                    self-motivated, and use my resources around me in order to
                    get the job done. I have a hunger for knowledge so I use
                    every day as an oppurtunity to learn something new. This
                    plays a key role as a developer enabling me to constantly
                    stay up-to-date with trends, updates, and features
                    introduced constantly in the field.
                </p>
                <Button cname={styles.about_button} link="#contact">
                    Contact Me
                </Button>
                <div className={styles.img_wrapper}>
                    <img src={Profile} alt="Profile" />
                </div>
            </div>
        </div>
    );
};

export default About;